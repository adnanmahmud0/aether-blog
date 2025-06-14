'use client';
import Logo from '@/components/layout/footer/Logo';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: FileList;
};

const SignUp: FC = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (data.password !== data.confirmPassword) return;

    let imageUrl = '';

    if (data.image && data.image[0]) {
      const file = data.image[0];
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        imageUrl = result.data.url;
      } else {
        console.error('Image upload failed');
        return;
      }
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('image', imageUrl);
    console.log(formData);
    const res = await fetch('/api/register', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      router.push('/login');
    } else {
      const err = await res.json();
      console.error(err);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <section className='mb-5'>
          <Logo />
        </section>
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input {...register('name', { required: true })} type="text" placeholder="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile image</label>
                <input {...register('image', { required: true })} type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.image && <p className="text-red-500 text-sm">Profile image is required</p>}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input {...register('email', { required: true })} type="email" placeholder="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input {...register('password', { required: true })} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input {...register('confirmPassword', { required: true })} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.confirmPassword && <p className="text-red-500 text-sm">Confirm password</p>}
                {watch('password') !== watch('confirmPassword') && <p className="text-red-500 text-sm">Passwords do not match</p>}
              </div>

              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
