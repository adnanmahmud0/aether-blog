// lib/sendEmail.ts
import { resend } from './resend';

export default async function sendEmail(to: string, resetUrl: string) {
  try {
    const data = await resend.emails.send({
      from: 'Your App <onboarding@resend.dev>',
      to,
      subject: 'Reset your password',
      html: `<p>You requested a password reset.</p>
             <p><a href="${resetUrl}">Click here to reset your password</a></p>`,
    });

    console.log('Email sent:', data);
  } catch (error) {
    console.error('Email sending failed:', error);
  }
}
