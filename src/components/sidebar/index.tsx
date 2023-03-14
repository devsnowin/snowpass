import { usePassword } from '@/context/password';
import { MdAddBox } from 'react-icons/md';
import PasswordModal from '../form/PasswordModal';
import KeyCard from './KeyCard';

const SideBar = () => {
  const { passwords } = usePassword();
  return (
    <aside className='w-full px-4 max-w-xs min-h-screen bg-secondary'>
      <div className='w-full py-4 flex items-center gap-2'>
        <input
          type='text'
          placeholder='Search...'
          className='input input-sm bg-accent w-full h-10 max-w-xs focus:outline-info'
        />
        {/* open modal */}
        <label role='button' htmlFor='new-password-modal' className=''>
          <MdAddBox size={40} />
        </label>
        <PasswordModal />
      </div>
      {passwords?.map((password) => (
        <div key={password.id} className=''>
          <KeyCard password={password} />
        </div>
      ))}
    </aside>
  );
};
export default SideBar;
