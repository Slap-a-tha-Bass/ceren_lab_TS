import * as express from 'express';
import * as mailgun from 'mailgun.js';
import * as formdata from 'form-data';
import { mailgunConfig } from '../config';


const mg = new (<typeof mailgun>(<any>mailgun))(<any>formdata).client({
    username: 'api',
    key: mailgunConfig.secret
});

const router = express.Router();

router.post('/', async (req, res) => {
    const newEmail = req.body;
    try {
        const readyMail = await mg.messages.create(mailgunConfig.domain, {
            to: mailgunConfig.toEmail,
            subject: newEmail.subject,
            from: newEmail.from,
            text: newEmail.message
        });
        res.json(readyMail);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error, check it out." })
    }
})

export default router;