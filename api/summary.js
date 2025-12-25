import { google } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { z } from 'zod';

export const config = {
    runtime: 'edge',
};

export default async function handler(req) {
    try {
        const { property } = await req.json();

        if (!property) {
            return new Response(JSON.stringify({ error: 'Property data required' }), { status: 400 });
        }

        const result = await generateObject({
            model: google('gemini-2.5-flash'),
            tools: {
                googleSearch: google.tools.googleSearch(),
            },
            schema: z.object({
                rentalOutlook: z.string().describe("A 2-3 sentence analysis of current rental demand and projected yields for this specific location."),
                capitalGrowth: z.string().describe("A 2-3 sentence analysis of recent land value trends and future infrastructure impact on growth."),
                verdict: z.string().describe("A concise specific verdict on why this property is a good investment."),
                sources: z.array(z.string()).describe("A list of 2-4 real data sources or news outlets used for this analysis (e.g. 'Bali Bureau of Statistics', 'AirDNA').")
            }),
            prompt: `
        Analyze the investment potential for this property:
        Title: ${property.title}
        Location: ${property.location}
        Type: ${property.type}
        Price: ${property.priceDisplay}
        Current Yield Claim: ${property.yield}

        GOAL:
        Use Google Search to find REAL, CURRENT market data for ${property.location} (current tourism stats, land price trends, infrastructure news).
        
        REQUIREMENTS:
        1. rentalOutlook: Cite specific occupancy rates or demand drivers for ${property.location}.
        2. capitalGrowth: Mention specific infrastructure projects (like the Toll Road or Subway) if relevant to ${property.location}.
        3. verdict: Be realistic but persuasive.
        4. sources: List the real entities you found data from.
      `,
        });

        return new Response(JSON.stringify(result.object), {
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Summary Generation Error:', error);
        return new Response(JSON.stringify({ error: 'Failed to generate summary' }), { status: 500 });
    }
}
