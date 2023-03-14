import MainSpace from '@/components/mainspace';
import SideBar from '@/components/sidebar';
import { PasswordProvider } from '@/context/password';

const HomePage = () => {
  return (
    <PasswordProvider>
      <main className='flex'>
        <SideBar />
        <MainSpace />
      </main>
    </PasswordProvider>
  );
};
export default HomePage;
