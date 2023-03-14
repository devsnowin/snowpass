import { useAuth } from '@/context/auth';
import { LocalUser } from '@/types';
import { FormEvent } from 'react';

const LoginPage = () => {
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(form.entries());
    console.log('FormData', formData);

    try {
      await login(formData as unknown as LocalUser);
    } catch (e) {
      throw new Error(e.message);
    }
  };

  return (
    <main className='min-h-screen grid place-items-center'>
      <form
        className='w-full max-w-sm flex flex-col gap-4'
        onSubmit={handleSubmit}
      >
        <h1 className='font-bold text-4xl text-center'>Login</h1>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='Your Email Id'
            name='email'
            className='input input-bordered w-full'
          />
        </div>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            placeholder='Your Password'
            name='password'
            className='input input-bordered w-full'
          />
        </div>
        <button className='btn btn-info'>Login</button>
      </form>
    </main>
  );
};
export default LoginPage;
