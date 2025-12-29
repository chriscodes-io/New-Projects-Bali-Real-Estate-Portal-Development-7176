import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve paths
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Load .env manually since we don't have dotenv in root dependencies
const envPath = path.join(rootDir, '.env');
if (fs.existsSync(envPath)) {
    console.log('Loading .env from', envPath);
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            process.env[key.trim()] = value.trim();
        }
    });
}

// Map AI_GATEWAY_API_KEY to GOOGLE_GENERATIVE_AI_API_KEY if present
if (process.env.AI_GATEWAY_API_KEY && !process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    console.log('Mapping AI_GATEWAY_API_KEY to GOOGLE_GENERATIVE_AI_API_KEY');
    process.env.GOOGLE_GENERATIVE_AI_API_KEY = process.env.AI_GATEWAY_API_KEY;
}

// Import handlers dynamically after env is loaded
const { default: chatHandler } = await import('../api/chat.js');
const { default: summaryHandler } = await import('../api/summary.js');

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    console.log(`[${req.method}] ${req.url}`);

    // Helper to buffer body
    const buffers = [];
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    const bodyStr = Buffer.concat(buffers).toString();

    // Parse JSON body
    try {
        if (bodyStr) {
            req.body = JSON.parse(bodyStr);
        } else {
            req.body = {};
        }
    } catch (e) {
        console.error('Invalid JSON body', e);
        req.body = {};
    }

    // Response Helper Shims (to match Request/Response and Express-like usage in our handlers)
    res.status = (code) => {
        res.statusCode = code;
        return res;
    };
    res.json = (data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
        return res;
    };

    // Route Dispatch
    try {
        if (req.url === '/api/chat') {
            await chatHandler(req, res);
        } else if (req.url === '/api/summary') {
            await summaryHandler(req, res);
        } else {
            res.status(404).json({ error: 'Not Found' });
        }
    } catch (err) {
        console.error('Handler Error:', err);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
    }
});

server.listen(PORT, () => {
    console.log(`
  🚀 Local API Server running at http://localhost:${PORT}
  - /api/chat
  - /api/summary
  
  Please ensure your Vite app is running separately (npm run dev)
  `);
});
