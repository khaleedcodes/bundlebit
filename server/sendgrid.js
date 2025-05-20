import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILSEND_API_KEY,
});

const sentFrom = new Sender(
  "MS_gcE9q8@test-r83ql3p285zgzw1j.mlsender.net",
  "Your name"
);

const recipients = [new Recipient("trybundlebit@gmail.com", "khaleed")];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setReplyTo(sentFrom)
  .setSubject("Verify Your Bundlebit Account").setHtml(`
  <p style="font-size: 16px; font-family: sans-serif;">
    Hi there,<br/><br/>
    Your verification code for Bundlebit is:
  </p>
  <p style="font-size: 24px; font-weight: bold; font-family: monospace; background-color: #f1f1f1; padding: 10px; width: fit-content; border-radius: 5px;">
    527194
  </p>
  <p style="font-size: 14px; color: #555;">
    This code will expire in 10 minutes. If you didn’t request this, you can safely ignore this email.
  </p>
  <br/>
  <p style="font-size: 14px;">— The Bundlebit Team</p>
`).setText(`
Hi there,

Your verification code for Bundlebit is: 527194

This code will expire in 10 minutes. If you didn’t request this, you can safely ignore this email.

— The Bundlebit Team
`);

await mailerSend.email.send(emailParams);
