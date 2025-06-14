'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function ResetPasswordPage() {
  const token = useSearchParams().get('token');
  const router = useRouter();
  const { register, handleSubmit } = useForm<{ newPassword: string }>();
  const [message, setMessage] = useState('');

  const onSubmit = async (data: { newPassword: string }) => {
    const res = await fetch('/api/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, newPassword: data.newPassword }),
    });

    const result = await res.json();
    if (res.ok) {
      router.push('/login');
    } else {
      setMessage(result.error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('newPassword')} placeholder="New Password" type="password" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Reset Password</button>
      </form>
      {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
    </div>
  );
}
