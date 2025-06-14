import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/prisma';
import sendEmail from '@/lib/sendEmail';
// import sendEmail from '@/lib/sendEmail'; // your custom email sender

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: 'Email not found' }, { status: 404 });
  }

  const token = crypto.randomBytes(32).toString('hex');
  const expiry = new Date(Date.now() + 3600000); // 1 hour

  await prisma.user.update({
    where: { email },
    data: {
      resetToken: token,
      resetTokenExpiry: expiry
    }
  });

  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

  await sendEmail(email, resetUrl);
  console.log('Reset link:', resetUrl); // simulate email sending

  return NextResponse.json({ message: 'Reset link sent if email exists.' });
}
