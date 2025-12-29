import chatHandler from '../api/chat.js';
import summaryHandler from '../api/summary.js';

// Mock Response class to handle both stream (Chat) and JSON (Summary) interactions
class MockResponse {
    constructor(name) {
        this.name = name;
        this.headers = {};
        this.statusCode = 200;
        this.finished = false;
    }

    // Standard Node.js ServerResponse methods
    writeHead(code, headers) {
        this.statusCode = code;
        this.headers = { ...this.headers, ...headers };
        console.log(`[${this.name}] writeHead: ${code}`, this.headers);
        return this;
    }

    write(chunk) {
        // Handle Buffer or string
        const text = Buffer.isBuffer(chunk) ? chunk.toString() : chunk;
        console.log(`[${this.name}] chunk:`, text.trim());
        return true;
    }

    end(content) {
        if (content) this.write(content);
        this.finished = true;
        console.log(`[${this.name}] Stream ended.`);
        return this;
    }

    setHeader(name, value) {
        this.headers[name] = value;
        return this;
    }

    getHeader(name) {
        return this.headers[name];
    }

    // Express/Next.js convenience methods
    status(code) {
        this.statusCode = code;
        console.log(`[${this.name}] status set to ${code}`);
        return this;
    }

    json(data) {
        console.log(`[${this.name}] JSON Response:`, JSON.stringify(data, null, 2));
        this.end();
        return this;
    }
}

async function runVerify() {
    console.log("==========================================");
    console.log("   STARTING AI FEATURE VERIFICATION");
    console.log("==========================================\n");

    // 1. Verify Chat API
    console.log("--- Testing /api/chat ---");
    const chatReq = {
        body: {
            messages: [
                { role: 'user', content: 'Hello, are there any villas in Lombok?' }
            ]
        }
    };
    const chatRes = new MockResponse('Chat');

    try {
        await chatHandler(chatReq, chatRes);
    } catch (error) {
        console.error("Chat Handler CRASHED:", error);
    }

    console.log("\n------------------------------------------\n");

    // 2. Verify Summary API
    console.log("--- Testing /api/summary ---");
    const summaryReq = {
        body: {
            property: {
                title: "Test Villa Verification",
                location: "Uluwatu, Bali",
                type: "Villa",
                priceDisplay: "$450,000",
                yield: "12%"
            }
        }
    };
    const summaryRes = new MockResponse('Summary');

    try {
        await summaryHandler(summaryReq, summaryRes);
    } catch (error) {
        console.error("Summary Handler CRASHED:", error);
    }

    console.log("\n==========================================");
    console.log("   VERIFICATION COMPLETE");
    console.log("==========================================");
}

runVerify();
