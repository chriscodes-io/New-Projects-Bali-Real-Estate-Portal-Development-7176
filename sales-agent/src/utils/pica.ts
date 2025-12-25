import dotenv from 'dotenv';

dotenv.config();

export async function picaToolExecutor(
    path: string,
    actionId: string,
    connectionKey: string,
    options: {
        method?: string;
        queryParams?: URLSearchParams;
        body?: any;
        contentType?: string;
    } = {}
) {
    const { method = 'GET', queryParams, body, contentType } = options;

    const baseUrl = 'https://api.picaos.com/v1/passthrough';
    const url = queryParams
        ? `${baseUrl}${path}?${queryParams.toString()}`
        : `${baseUrl}${path}`;

    // Headers for Pica Passthrough
    const headers: Record<string, string> = {
        'content-type': contentType || 'application/json',
        'x-pica-secret': process.env.PICA_SECRET_KEY || '',
        'x-pica-connection-key': connectionKey,
        'x-pica-action-id': actionId,
    };

    const fetchOptions: RequestInit = { method, headers };

    if (body && method !== 'GET') {
        fetchOptions.body = typeof body === 'string' ? body : JSON.stringify(body);
    }

    try {
        const response = await fetch(url, fetchOptions);

        if (!response.ok) {
            const text = await response.text().catch(() => '');
            throw new Error(`Pica API call failed: ${response.status} ${response.statusText} :: ${text}`);
        }

        // Some APIs return 204 No Content
        if (response.status === 204) return {};

        return response.json().catch(() => ({}));
    } catch (error) {
        console.error('Pica Executor Error:', error);
        throw error;
    }
}
