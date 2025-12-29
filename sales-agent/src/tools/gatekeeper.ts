import { picaToolExecutor } from '../utils/pica.js';

export const gatekeeperTools = {
    /**
     * Validates lead content using OpenAI Moderation via Pica.
     * Filters out spam, hate speech, or inappropriate content.
     */
    async validateLead(text: string) {
        console.log(`[Gatekeeper] Validating content: "${text.substring(0, 50)}..."`);

        try {
            const response = await picaToolExecutor(
                '/moderations',
                process.env.OPENAI_MODERATION_ACTION_ID || '', // Search in Pica: Platform="OpenAI", Action="Create moderation" to find this ID
                process.env.PICA_OPENAI_CONNECTION_KEY || '',
                {
                    method: 'POST',
                    body: { input: text }
                }
            );

            const result = response.results?.[0];
            if (result?.flagged) {
                console.warn("[Gatekeeper] Lead FLAGGED:", result.categories);
                return {
                    valid: false,
                    status: 'rejected',
                    reason: "Flagged by OpenAI Moderation",
                    categories: result.categories
                };
            }

            return { valid: true, status: 'approved', score: 0.99 };
        } catch (error) {
            console.error("[Gatekeeper] Validation failed:", error);
            // Recommendation implementation: Grey-list for manual review on service failure
            return {
                valid: true,
                status: 'grey',
                warning: "Moderation service unreachable. Manual review required.",
                error: String(error)
            };
        }
    }
};
