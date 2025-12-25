# PicaOS Lead Intelligence Engine

This service automates lead verification, enrichment, and billing synchronization for the Real Estate Portal.

## 🤖 Vercel AI SDK Upgrade (Optional)
To perform complex, autonomous reasoning (Step 3 in your guide), you can switch to the Toolkit:

**Install:**
```bash
npm install @ai-sdk/openai ai @picahq/toolkit
```

**Code Example:**
```typescript
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { Pica } from "@picahq/toolkit";

const pica = new Pica(process.env.PICA_SECRET_KEY!, {
  connectors: ["*"], // or specific connection keys
  actions: ["*"], // or specific actions
});

async function execute(message: string): Promise<string> {
  const { text } = await generateText({
    model: openai("gpt-4.1"), // Ensure model availability
    system: pica.systemPrompt,
    prompt: message,
    tools: { ...pica.tools() }, // Auto-load verified tools
    stopWhen: stepCountIs(10),
  });

  return text;
}
```

---

## 🚀 Quickstart

### 1. Configuration
Content of `.env`:
```bash
# Pica Security
PICA_SECRET_KEY=...

# Connection Keys (From Pica Dashboard)
PICA_GMAIL_CONNECTION_KEY=...
PICA_OPENAI_CONNECTION_KEY=...
PICA_ATTIO_CONNECTION_KEY=...
PICA_SLACK_CONNECTION_KEY=...
```

### 2. Action IDs (Required)
The code uses Pica "Passthrough" actions. Some IDs are pre-configured, others need to be looked up:

- **Gmail (Send):** `conn_mod_def::F_JeJ_A_TKg::cc2kvVQQTiiIiLEDauy6zQ` (Configured)
- **Attio (Create Record):** `conn_mod_def::F-w9HcwTIbs::lUVIwquYQgKgOLaB4ULhPQ` (Configured)
- **OpenAI (Moderation):** `TODO` -> *Search Pica Dashboard for "OpenAI" > "Create moderation"*

### 3. Testing (Simulation Mode)
Run the agent without keys to see the dry-run output:
```bash
npm run dev
```

### 4. Direct API Testing (Manual)
You can test individual connections using `curl` as per the Pica Quickstart:

**Test Gmail Connection:**
```bash
curl "https://api.picaos.com/v1/passthrough/users/me/profile" \
  -H "x-pica-secret: $PICA_SECRET_KEY" \
  -H "x-pica-connection-key: $PICA_GMAIL_CONNECTION_KEY" \
  -H "x-pica-action-id: conn_mod_def::F_JeCYGuzvg::yAM6bqGdRdm91ZbYejlbEA" \
  -H "Content-Type: application/json"
```

## Architecture
- `src/index.ts`: Main logic loop (Gatekeeper -> Enrichment -> Billing -> Notify).

---

## 🔮 Advanced Use Cases (Future Reference)

Here are official patterns for expanding this agent later:

### 1. Create a Lead in HubSpot
```typescript
// POST https://api.picaos.com/v1/passthrough/crm/v3/objects/leads
// Header: x-pica-action-id: "conn_mod_def::GDcIUlcRCc4::7oTUnx05SUmj44paCV5ugQ"
```

### 2. Create a Lead in Pipedrive
```typescript
// POST https://api.picaos.com/v1/passthrough/v1/leads
// Header: x-pica-action-id: "conn_mod_def::F63zyQ9PCSA::_Yb6Tj-7Th6nU-7zRWLL6g"
```

### 3. Track Event in Mixpanel
```typescript
// POST https://api.picaos.com/v1/passthrough/track
// Header: x-pica-action-id: "conn_mod_def::GFuTABONDmQ::r7-46MqUSauKC8JsOPjOdw"
```

### 4. Send SMS via Twilio
```typescript
// POST https://api.picaos.com/v1/passthrough/v1/SmsCommands
// Header: x-pica-action-id: "conn_mod_def::GC7OEECHKPA::4ziMveyGR5CSEB2DQCfE1Q"
```

### 5. Google Calendar Booking
```typescript
// POST https://api.picaos.com/v1/passthrough/calendars
// Header: x-pica-action-id: "conn_mod_def::F_JeCcch5D0::ZFJMT_gKQuevLubwdwaThg"
```
### 6. BrightData Web Scraping (Future)
Use BrightData to scrape real-time market data from:
- **Airbnb:** Occupancy rates, daily pricing.
- **Real Estate Portals:** Competitive listing analysis.

---

## 📚 Appendix: Available Integrations
Reference list for future agent expansions:

- 1Password
- 7shifts
- Ably
- ActiveCampaign
- Affinity.co
- AgentMail
- AgentQL
- Ahrefs
- Airtable
- Amazon Ads
- Anthropic
- Apify
- Apollo
- Asana
- Attio
- Auth0 Management
- Autodesk
- Beehiiv
- Benchmark Email
- BigCommerce
- BigQuery
- Bluebeam
- Bluesky
- Box
- Breathe
- Brevo
- Brex
- BrightData
- Browse AI
- Browserbase
- CATS
- Cal.com
- Calendly
- Canva
- Capsule
- Chargebee
- Clerk
- ClickHouse
- ClickUp
- Close
- Coda
- Conductor
- Contentstack Content Delivery
- Contentstack Content Management
- Convex
- Coresignal
- Currents News
- Data For SEO
- Datadog
- Deck.co
- DeepSeek
- Diffbot
- Discord
- Dovetail
- Dropbox
- ElevenLabs
- Exa
- Fireberry
- Firecrawl
- Fireflies.ai
- Folk.app
- FreshBooks
- Freshdesk
- Front
- Gemini
- GitHub
- GitLab
- Gmail
- Go Dial
- Google Ads
- Google Calendar
- Google Docs
- Google Drive
- Google Places
- Google Routes
- Google Sheets
- Gorgias
- Gumloop
- HackerNews
- Hoop
- HubSpot
- Instantly.ai
- Intercom
- Jira
- JobNimbus
- Kernel
- Klaviyo
- Kommo
- Linear
- Loops
- Mailchimp Marketing
- Mailgun
- Make
- Mapbox
- Maple Billing
- MeetGeek
- Meta
- Mixpanel Annotations
- Mixpanel Event Export
- Mixpanel Ingestion
- Mixpanel Lexicon Schemas
- Mixpanel Query
- Mixpanel Service Accounts
- Mixpanel Warehouse Connectors
- MongoDB Atlas Administration
- Netlify
- Netsuite
- NewsData.io
- Notion
- Nylas
- Nyne.ai
- Octave
- OneDrive
- OnePageCRM
- OpenAI
- OpenPhone
- OpenRouter
- Outlook Calendar
- Outlook Mail
- Parsehub
- Parsera
- PartnerStack Partner
- Paystack
- PeopleDataLabs
- Perplexity
- Personal AI
- PhantomBuster
- Pinecone
- Pipedrive
- Placekey
- PostHog
- Postmark
- Productive
- Puzzle.io
- Q2
- QuickBooks
- QuickChart
- Reducto
- Reply.io
- Resend
- Riveter
- Sage Sales Management
- Salesmate
- Scheduler
- Scrape.do
- Scrapingdog
- SendGrid
- SerpApi
- ShareFile
- SharePoint
- ShipBob
- ShipEngine
- ShipStation
- Shippo
- Shopify Admin
- Shopify Storefront
- Shortcut
- Sindri
- Slack
- Sling
- Square
- Stripe
- Supabase
- Tavily
- Todoist
- Trello
- Twelve Data
- Twilio
- Typeform
- Unipile
- Valyu
- Vercel
- Voiceflow
- Waterfall
- Weaviate
- Webflow
- Wikimedia
- WooCommerce
- WordPress
- Workable
- Wttr.in
- X AI
- Xero
- Zendesk
- Zoho
- n8n
