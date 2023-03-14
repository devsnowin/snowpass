import { usePassword } from '@/context/password';
import { Password } from '@/types';
import KeyIcon from '../icons/KeyIcon';

const KeyCard = ({ password }: { password: Password }) => {
  const { setPassword, password: activePassword } = usePassword();

  return (
    <button
      className={`btn btn-ghost justify-start text-center gap-4 w-full h-16 capitalize ${
        password.id === activePassword.id && 'bg-info'
      }`}
      onClick={() => setPassword(password)}
    >
      <KeyIcon />
      {password.title}
    </button>
  );
};
export default KeyCard;
