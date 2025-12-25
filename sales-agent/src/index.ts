import dotenv from 'dotenv';
import { gatekeeperTools } from './tools/gatekeeper.js';
import { enrichmentTools } from './tools/enrichment.js';
import { billingTools } from './tools/billing.js';
import { notificationTools } from './tools/notification.js';

dotenv.config();

/**
 * Main Agent Loop: "PicaOS Lead Intelligence Engine"
 * Automates the verified handoff of leads to the Developer Platform.
 */
async function runAgent(mockLead: { name: string; email: string; phone?: string; message?: string }) {
    console.log("--- 🕵️‍♀️ PicaOS Lead Intelligence Engine Starting ---");
    console.log(`Processing New Lead: ${mockLead.name} <${mockLead.email}>`);

    // --- PHASE 1: GATEKEEPER (OpenAI) ---
    console.log("\n[Step 1] 🛡️ Validating Content...");
    const validation = await gatekeeperTools.validateLead(mockLead.message || "Interested in learning more.");

    if (!validation.valid) {
        console.log(`❌ Lead REJECTED: ${validation.reason}`);
        // Ideally, flag this in DB as 'Rejected'
        return;
    }
    console.log("✅ Lead Validated (Safe Content)");

    // --- PHASE 2: VERIFICATION & ENRICHMENT (Pica) ---
    console.log("\n[Step 2] 🔎 Enriching Prospect Data...");
    // Verify Email Format first
    const emailCheck = await enrichmentTools.verifyEmail(mockLead.email);
    if (!emailCheck.valid) {
        console.log("❌ Lead REJECTED: Invalid Email Format");
        return;
    }

    // Enrich with public data (simulates Pica Search)
    const enrichment = await enrichmentTools.enrichProspect(mockLead.email, mockLead.name);
    console.log("   Found:", enrichment.data);

    // --- PHASE 3: BILLING SYNC (Attio) ---
    console.log("\n[Step 3] 🔗 Syncing to Internal Billing (Attio)...");
    const billing = await billingTools.syncToInternalAttio({
        name: mockLead.name,
        email: mockLead.email,
        company: enrichment.data.company,
        job_title: enrichment.data.title,
        linkedin: enrichment.data.linkedin_url
    });

    if (billing.synced) {
        console.log(`   ✅ Synced to Attio (ID: ${billing.record_id})`);
    } else {
        console.log(`   ⚠️  Sync Failed (Simulated/Missing Key): ${billing.status || billing.error}`);
    }

    // --- PHASE 4: NOTIFICATION (Slack/Gmail) ---
    console.log("\n[Step 4] 🔔 Notifying Developer...");

    // 4a. Slack Alert
    await notificationTools.notifySlack(
        process.env.SLACK_CHANNEL_ID || '#leads',
        `🔥 *New Premium Lead:* ${mockLead.name} (${enrichment.data.title} @ ${enrichment.data.company})`
    );

    // 4b. Email Alert (to Developer)
    /* 
     In real usage, we would fetch the 'Developer Email' from the project DB.
     Here we simulate sending to a fixed address or the 'me' user.
    */
    // await notificationTools.notifyGmail('developer@example.com', 'New Verified Lead', 'You have a new lead...');
    console.log("   ✅ Slack Notification Sent (Simulated)");

    console.log("\n--- Processing Complete ---");
}

// Check for keys before running
if (!process.env.PICA_SECRET_KEY) {
    console.warn("⚠️  WARNING: Pica Keys missing in .env. Running in simulation mode.");
}

// Mock Run
runAgent({
    name: "Sarah Jenkins",
    email: "sarah.j@techstart.io",
    phone: "+15550199",
    message: "Hi, I am looking for a villa investment in Uluwatu via my company."
}).catch(console.error);
