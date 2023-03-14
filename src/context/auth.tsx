import { useLocalStorage } from '@/lib/hooks';
import { LocalUser } from '@/types';
import type { User } from '@prisma/client';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthController = () => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { value, storeValue } = useLocalStorage('snow-pass-user');

  const navigate = useNavigate();

  useEffect(() => {
    if (!value) return navigate('/register');
    if (!authUser) return navigate('/login');
  }, [authUser, value]);

  const login = async (user: LocalUser) => {
    setIsLoading(true);
    try {
      const createdUser = await window.api.login({
        email: user.email,
        password: user.password,
      });
      setAuthUser(createdUser);
      navigate('/');
    } catch (e) {
      throw new Error(e.message);
    }
    setIsLoading(false);
  };

  const register = async (user: LocalUser) => {
    setIsLoading(true);
    try {
      const createdUser = await window.api.register({
        name: user.name,
        email: user.email,
        password: user.password,
      });
      setAuthUser(createdUser);
      storeValue(createdUser);
      navigate('/login');
    } catch (e) {
      throw new Error(e.message);
    }
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setAuthUser(null);
    storeValue(null);
    setIsLoading(false);
  };

  return {
    authUser,
    register,
    login,
    logout,
    isLoading,
  };
};

const AuthContext = createContext<ReturnType<typeof useAuthController>>({
  authUser: null,
  isLoading: false,
  login: async (user: User) => {},
  register: async (user: User) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => (
  <AuthContext.Provider value={useAuthController()}>
    {children}
  </AuthContext.Provider>
);

export const useAuth = () => useContext(AuthContext);
