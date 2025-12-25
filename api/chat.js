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

export const config = {
    runtime: 'edge',
};

export default async function handler(req) {
    const { messages } = await req.json();

    const inventoryContext = JSON.stringify(PROJECTS, null, 2);

    const result = await streamText({
        model: google('gemini-2.0-flash-exp'), // Using 2.0 Flash for speed + latest branding
        system: `You are the Expert AI Sales Agent for "New Projects Bali", a luxury real estate portal.
    
    1. **YOUR GOAL**: Help investors find their dream property from our EXCLUSIVE INVENTORY below.
    2. **TONE**: Professional, knowledgeable, elite, yet warm and inviting. 
    3. **KNOWLEDGE**:
       - You accept that you know about the "Bali & Lombok" real estate market.
       - You allow yourself to use your internal knowledge to answer general questions (weather, tourism trends, laws).
       - **CRITICAL**: You ONLY sell properties from the list below. If asked about others, pivot back to these.
    
    4. **INVENTORY (Train yourself on this)**:
    ${inventoryContext}
    
    5. **RULES**:
       - If the user asks for "ROI" or "Yield", quote the specific % from the inventory.
       - If the user asks for "Price", quote the exact price.
       - Keep answers concise (under 3 paragraphs) unless asked for deep detail.
       - Use emojis sparingly (🏡, ✨, 📈) to be friendly.
       - Always end with a question to keep the conversation going (e.g., "Would you like to see the floorplan?", "What is your budget?").
    `,
        messages,
    });

    return result.toDataStreamResponse();
}
