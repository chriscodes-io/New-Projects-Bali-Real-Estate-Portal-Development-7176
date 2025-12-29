import { picaToolExecutor } from '../utils/pica.js';
import { actionDiscovery } from '../utils/actionDiscovery.js';

export const notificationTools = {
    /**
     * Sends a Slack notification to the developer channel.
     * Endpoint: POST /chat.postMessage
     */
    async notifySlack(channel: string, message: string) {
        console.log(`[Notify] Sending Slack alert to ${channel}`);

        const actionId = await actionDiscovery.resolveAction('slack', 'post_message') || 'slack_post_message';

        return picaToolExecutor(
            '/chat.postMessage',
            actionId,
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

        const actionId = await actionDiscovery.resolveAction('gmail', 'send_email') || 'conn_mod_def::F_JeJ_A_TKg::cc2kvVQQTiiIiLEDauy6zQ';

        return picaToolExecutor(
            '/users/me/messages/send',
            actionId,
            process.env.PICA_GMAIL_CONNECTION_KEY || '',
            {
                method: 'POST',
                body: { raw }
            }
        );
    }
};
