import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { HiEye } from 'react-icons/hi';
import { IoCopy } from 'react-icons/io5';
import { usePassword } from '@/context/password';
import KeyIcon from '../icons/KeyIcon';

const MainSpace = () => {
  const { password } = usePassword();

  if (!password) return <p>loading....</p>;

  return (
    <main className='w-full min-h-screen p-10 flex flex-col'>
      <section className='w-full h-fit bg-pu flex items-center justify-between'>
        <span className='h-fit flex items-center gap-4'>
          <KeyIcon />
          <h1 className='text-lg font-bold'>{password.title}</h1>
        </span>
        <span className='h-fit flex items-center gap-4'>
          <button className=''>
            <MdEdit size={26} />
          </button>
          <button className=''>
            <FaTrash size={18} />
          </button>
        </span>
      </section>

      <div className='divider'></div>

      <section>
        <h2 className='flex flex-col font-bold my-4'>
          <span className='text-neutral font-normal'>Username</span>
          {password.username}
        </h2>
        <div className='bg-secondary rounded-xl p-4 flex items-center justify-between'>
          <h2 className='flex flex-col font-bold'>
            <span className='text-neutral font-normal'>Password</span>
            {password.password}
          </h2>
          <span className='flex items-center gap-4'>
            <button>
              <HiEye />
            </button>
            <button>
              <IoCopy />
            </button>
          </span>
        </div>
        <h2 className='flex flex-col font-bold my-4'>
          <span className='text-neutral font-normal'>Website</span>
          {password.url}
        </h2>
      </section>

      <div className='divider'></div>

      <section>
        <h2 className='flex flex-col font-bold my-4'>
          <span className='text-neutral font-normal'>Last updated</span>
          {password.updatedAt}
        </h2>
      </section>
    </main>
  );
};
export default MainSpace;
