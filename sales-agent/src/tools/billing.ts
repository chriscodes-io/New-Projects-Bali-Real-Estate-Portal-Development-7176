import { picaToolExecutor } from '../utils/pica.js';
import { actionDiscovery } from '../utils/actionDiscovery.js';

export const billingTools = {
    /**
     * Creates a verified lead record in Attio for billing tracking.
     * Matches endpoint: POST /objects/{object}/records
     */
    async syncToInternalAttio(lead: {
        name: string;
        email: string;
        job_title?: string;
        company?: string;
        linkedin?: string;
    }) {
        console.log(`[Billing] Syncing to Attio: ${lead.email}`);

        const connectionKey = process.env.PICA_ATTIO_CONNECTION_KEY;
        if (!connectionKey) {
            console.warn("[Billing] No PICA_ATTIO_CONNECTION_KEY. Skipping.");
            return { synced: false, status: "Missing Key" };
        }

        try {
            // 1. Resolve Action ID
            const actionId = await actionDiscovery.resolveAction('attio', 'create_record');
            if (!actionId) {
                throw new Error("Could not resolve Attio Create Record action");
            }

            // 2. Create Record
            const createResponse = await picaToolExecutor(
                '/objects/leads/records', // Assuming 'leads' is the object slug
                actionId,
                connectionKey,
                {
                    method: 'POST',
                    body: {
                        data: {
                            values: {
                                name: lead.name,
                                email: lead.email,
                                job_title: lead.job_title || "",
                                company: lead.company || "",
                                linkedin: lead.linkedin || ""
                            }
                        }
                    }
                }
            );

            if (!createResponse?.data?.id?.record_id) {
                throw new Error("Invalid response from Attio Create");
            }

            const recordId = createResponse.data.id.record_id;
            console.log(`[Billing] Created Attio Record: ${recordId}`);

            return {
                synced: true,
                record_id: recordId,
                billable_status: "Active"
            };

        } catch (error) {
            console.error("[Billing] Sync failed:", error);
            return { synced: false, error: String(error) };
        }
    }
};
