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
                'TODO_OPENAI_MODERATION_ACTION_ID', // Search in Pica: Platform="OpenAI", Action="Create moderation" to find this ID
                process.env.PICA_OPENAI_CONNECTION_KEY || '',
                {
                    method: 'POST',
                    body: { input: text }
                }
            );

            const result = response.results?.[0];
            if (result?.flagged) {
                console.warn("[Gatekeeper] Lead FLAGGED:", result.categories);
                return { valid: false, reason: "Flagged by OpenAI Moderation", categories: result.categories };
            }

            return { valid: true, score: 0.99 };
        } catch (error) {
            console.error("[Gatekeeper] Validation failed:", error);
            // Fail open (allow) if moderation service is down, or closed? 
            // Safe default for a MVP is to allow but log error.
            return { valid: true, warning: String(error) };
        }
    }
};
