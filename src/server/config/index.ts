import * as dotenv from 'dotenv';

dotenv.config();

export const mailgunConfig = {
    secret: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    toEmail: process.env.MAILGUN_TO_EMAIL
}