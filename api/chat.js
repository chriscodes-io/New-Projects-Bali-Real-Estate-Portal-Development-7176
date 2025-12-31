import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// --- INVENTORY DATA (Context) ---
// We embed this directly to ensure fast, reliable RAG without external DBs for now.
const PROJECTS = [
    {
        title: "Aegean Villa (Lombok)",
        price: "$315,000",
        yield: "12-15%",
        status: "Off-plan (Q4 2026)",
        details: "1 Bed, 1 Bath, Private Pool. Mediterranean design. Developer: Kinnara Capital."
    },
    {
        title: "Celestia Villa (Lombok)",
        price: "$425,000",
        yield: "12-15%",
        status: "Off-plan (Q4 2026)",
        details: "1 Bed, 1 Bath, 120sqm. Modern tropical architecture."
    },
    {
        title: "Vistara Villa (Lombok)",
        price: "$615,000",
        yield: "13-16%",
        status: "Off-plan (Q4 2026)",
        details: "2 Bed, 2 Bath, 180sqm. Large pool, luxury finishes."
    },
    {
        title: "Seraya Villa (Lombok)",
        price: "$825,000",
        yield: "14-17%",
        status: "Off-plan (Q4 2026)",
        details: "3 Bed, 3 Bath, 250sqm. Ocean views, entertainer's pool."
    },
    {
        title: "Elysian Villa (Lombok)",
        price: "$950,000",
        yield: "14-18%",
        status: "Off-plan (Q4 2026)",
        details: "3 Bed, 3 Bath, 300sqm. Double-height ceilings, panoramic views."
    },
    {
        title: "Altura Villa (Lombok)",
        price: "$1,225,000",
        yield: "15-20%",
        status: "Off-plan (Q4 2026)",
        details: "4 Bed, 4 Bath, 400sqm. Grand estate, elevated views."
    },
    {
        title: "ELLE Resort & Beach Club (Bali)",
        price: "From $350,000",
        yield: "Projected 15%",
        status: "Off-plan (2027)",
        details: "1 Bed Suites. Seminyak location. Iconic brand, full hotel service."
    },
    {
        title: "Marina Bay Beachfront Villas (Lombok)",
        price: "From $348,250",
        yield: "High Yield",
        status: "Off-plan (2026)",
        details: "1 Bed, Beachfront. Direct ocean access."
    },
    {
        title: "Mazari Villas (Lombok)",
        price: "Contact for Price",
        status: "Completed (Now Open)",
        yield: "Established",
        details: "3 Bed, 3 Bath. Mediterranean style."
    },
    {
        title: "Shanti Village (Bali)",
        price: "From $765,000",
        yield: "12% ROI",
        status: "Off-plan (2026)",
        details: "Luxury villas at Balangan Beach. Buy direct from developer for best terms."
    },
    {
        title: "OMA SORA (Bali)",
        price: "From $295,000",
        yield: "14% Projected",
        status: "Off-plan (2026)",
        details: "Umalas location. Wabi Sabi architecture. Direct developer sales."
    },
    {
        title: "Amani Melasti (Bali)",
        price: "From $109,900",
        yield: "14-18% ROI",
        status: "Off-plan (Q2 2027)",
        details: "Managed by Wyndham. Melasti Beach. Boutique hotel units."
    }
];

// Node.js runtime for stability
// export const config = {
//     runtime: 'edge',
// };


export default async function handler(req, res) {
    const { messages } = req.body;

    if (!messages) {
        return res.status(400).json({ error: "Messages are required" });
    }

    // TODO: For better performance with large inventories (>25 properties),
    // consider migrating to a vector search solution (e.g., Pinecone, Vercel KV)
    // to reduce prompt size and improve response times
    const inventoryContext = JSON.stringify(PROJECTS, null, 2);

    try {
        const result = await streamText({
            model: google('gemini-2.0-flash-lite-preview-02-05'), // Using 2.0 Flash Lite as requested
            maxSteps: 5,
            system: `You are the Expert AI Sales Agent for "New Projects Bali", a luxury real estate portal.
    
        1. **YOUR GOAL**: Assist investors naturally and build rapport. Your ultimate goal is to schedule a viewing or send a brochure, BUT you must earn trust first.
        2. **TONE**:
           - Professional, knowledgeable, elite, yet warm and inviting.
           - **NEVER** be pushy, aggressive, or robotic.
           - Speak like a high-end concierge, not a lead-gen bot.
        
        3. **KNOWLEDGE**:
           - You accept that you know about the "Bali & Lombok" real estate market.
           - **grounding**: You have access to LIVE Google Search. Use it to verify location details, current tourism trends, or competitor info if needed to support your answer.
           - **CRITICAL**: You ONLY sell properties from the list below. If asked about others, pivot back to these.
    
        4. **INVENTORY (Train yourself on this)**:
        ${inventoryContext}
        
        5. **RULES OF ENGAGEMENT (STRICT)**:
           - **NO GATEKEEPING**: Never refuse to answer a question until you get contact details. Answer first, then *subtly* guide.
           - **NATURAL FLOW**: Do not ask "What is your name?" or "What is your email?" immediately. generic questions are fine.
           - **VALUE EXCHANGE**: Only ask for contact details when you have something specific to offer that requires it (e.g., "I can email you the full PDF brochure and floorplans if you'd like?").
           - **RESPECT**: If they decline to give details, accept it gracefully and continue helping.
        
        6. **GENERAL RULES**:
           - If the user asks for "ROI" or "Yield", quote the specific % from the inventory.
           - If the user asks for "Price", quote the exact price.
           - Keep answers concise (under 3 paragraphs) unless asked for deep detail.
           - Use emojis sparingly (🏡, ✨, 📈) to be friendly.
           - Always end with a relevant, engaging question to keep the conversation going (e.g., "Are you looking for a holiday home or a pure investment?", "Would you like to see the floorplan?").
        `,
            messages,
        });

        result.pipeDataStreamToResponse(res);
    } catch (error) {
        console.warn("AI Chat generation failed (likely invalid API key), falling back to mock response:", error.message);

        // Correct Vercel AI SDK Data Stream format for @ai-sdk/react useChat hook
        // Format: 0:"text chunk"\n for each text delta
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8',
            'Transfer-Encoding': 'chunked',
            'X-Vercel-AI-Data-Stream': 'v1'
        });

        const mockResponse = "I'm currently in helpful Offline Mode! The AI service is temporarily unavailable, but I can tell you that we have amazing properties like Aegean Villa ($315,000, 12-15% yield) or Celestia Villa ($425,000, 12-15% yield) available. Which one interests you?";

        // Split into chunks and send as proper text-stream events
        const words = mockResponse.split(' ');
        for (const word of words) {
            res.write(`0:"${word} "\n`);
        }

        // Send finish event
        res.write(`d:{"finishReason":"stop"}\n`);
        res.end();
    }
}
