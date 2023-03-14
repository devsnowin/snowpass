import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import HomePage from './page/home/Home';
import LoginPage from './page/login/Login';
import RegisterPage from './page/register/Register';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default App;
