import { NextRequest, NextResponse } from 'next/server';

import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const { token, newPassword } = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      resetToken: token,
      resetTokenExpiry: { gte: new Date() },
    }
  });

  if (!user) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 });
  }

  const hashed = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashed,
      resetToken: null,
      resetTokenExpiry: null,
    }
  });

  return NextResponse.json({ message: 'Password reset successful' });
}
