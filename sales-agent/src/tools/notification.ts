import { picaToolExecutor } from '../utils/pica.js';

export const notificationTools = {
    /**
     * Sends a Slack notification to the developer channel.
     * Endpoint: POST /chat.postMessage
     */
    async notifySlack(channel: string, message: string) {
        console.log(`[Notify] Sending Slack alert to ${channel}`);

        return picaToolExecutor(
            '/chat.postMessage',
            'slack_post_message',
            process.env.PICA_SLACK_CONNECTION_KEY || '',
            {
                method: 'POST',
                body: {
                    channel: channel,
                    text: message
                }
            }
        );
    },

    /**
     * Sends an email via Gmail.
     * Endpoint: POST /users/me/messages/send
     * Requires raw base64url encoded MIME message.
     */
    async notifyGmail(to: string, subject: string, body: string) {
        console.log(`[Notify] Sending Gmail to ${to}`);

        const emailContent = [
            `To: ${to}`,
            `Subject: ${subject}`,
            'Content-Type: text/plain; charset="UTF-8"',
            'MIME-Version: 1.0',
            '',
            body
        ].join('\n');

        const raw = Buffer.from(emailContent).toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        return picaToolExecutor(
            '/users/me/messages/send',
            'conn_mod_def::F_JeJ_A_TKg::cc2kvVQQTiiIiLEDauy6zQ', // Official Gmail Action ID
            process.env.PICA_GMAIL_CONNECTION_KEY || '',
            {
                method: 'POST',
                body: { raw }
            }
        );
    }
};
