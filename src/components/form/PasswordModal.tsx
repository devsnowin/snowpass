import { FormEvent } from 'react';

const PasswordModal = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(form.entries());

    console.log('FormData: ', formData);
  };

  return (
    <>
      <input type='checkbox' id='new-password-modal' className='modal-toggle' />
      <label htmlFor='new-password-modal' className='modal cursor-pointer'>
        <label className='modal-box relative w-full max-w-xl' htmlFor=''>
          <h3 className='text-lg font-bold my-2'>New Password</h3>
          <form
            className='flex items-start justify-between gap-2'
            onSubmit={handleSubmit}
          >
            <div className='space-y-4 w-full'>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input
                  type='text'
                  placeholder='Password title'
                  name='title'
                  className='input input-bordered w-full'
                />
              </div>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Website</span>
                </label>
                <input
                  type='url'
                  placeholder='Password url'
                  name='url'
                  className='input input-bordered w-full'
                />
              </div>
              <button className='btn btn-info w-full'>Login</button>
            </div>
            <div className='space-y-4 w-full'>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Username</span>
                </label>
                <input
                  type='text'
                  placeholder='Password username'
                  name='username'
                  className='input input-bordered w-full'
                />
              </div>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  className='input input-bordered w-full'
                />
              </div>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};
export default PasswordModal;
