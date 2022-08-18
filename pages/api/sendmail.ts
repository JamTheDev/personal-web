import { NextApiHandler } from "next";
import * as sendmail from "sendmail";


export type SendMailBody = {
    from: string,
    to: string,
    subject: string,
    html: string
}

const handler: NextApiHandler = async (req, res) => {
    if (!req.body) return res.status(400).json({ message: "invalid body" });

    const body = JSON.parse(req.body) as SendMailBody;

    // ??????????? wtf is this lmao
    sendmail.default({
        logger: {
            debug: console.log,
            info: console.info,
            warn: console.warn,
            error: console.error
        },
        smtpHost: 'smtp.gmail.com',
        smtpPort: 587
    })({
        from: body.from,
        to: body.to,
        subject: body.subject,
        html: body.html
    }, (err, reply) => {
        if (err) {
            console.log(err)
            return res.status(400).json(err);
        }

        return res.status(200);
    });

    return res.status(200);
}

export default handler;