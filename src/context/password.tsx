import { Password } from '@/types';
import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

const data = [
  {
    id: '1',
    title: 'Amazon Web Console',
    url: 'console.aws.com',
    username: 'snowin@gmail.com',
    password: '123',
    createdAt: 'Tue Mar 14 2023 08:57:53 GMT+0530 (India Standard Time)',
    updatedAt: 'Tue Mar 14 2023 13:51:31 GMT+0530 (India Standard Time)',
  },
  {
    id: '0ceb85dc-9c66-42f8-a9e4-4f6f96c0784d',
    title: 'methodologies',
    url: 'https://insidious-perch.org',
    username: 'Bethany84@gmail.com',
    password: 'kbAOiAaVEErt5N8',
    createdAt: 'Tue Mar 14 2023 14:47:44 GMT+0530 (India Standard Time)',
    updatedAt: 'Mon Mar 13 2023 20:24:53 GMT+0530 (India Standard Time)',
  },
  {
    id: 'd728a606-76b1-4f53-81e3-d8017a3bccf4',
    title: 'gleeful-rear',
    url: 'http://homely-clipboard.org',
    username: 'Leonel16@yahoo.com',
    password: 'AMAiHwUwC1bo8Cn',
    createdAt: 'Tue Mar 14 2023 19:28:23 GMT+0530 (India Standard Time)',
    updatedAt: 'Mon Mar 13 2023 20:07:28 GMT+0530 (India Standard Time)',
  },
  {
    id: '374ceac9-b207-43f4-9bee-131f1fad240a',
    title: 'Google Mail',
    url: 'http://virtuous-trainer.net',
    username: 'Alena86@hotmail.com',
    password: 'BcQ_rPJRfR9ZAQi',
    createdAt: 'Tue Mar 14 2023 10:12:39 GMT+0530 (India Standard Time)',
    updatedAt: 'Tue Mar 14 2023 19:45:18 GMT+0530 (India Standard Time)',
  },
];

const usePasswordController = () => {
  const [passwords, setPasswords] = useState<Password[] | null>(null);
  const [password, setPassword] = useState<Password | null>(null);

  useEffect(() => {
    setPasswords(data);
    setPassword(data[0]);
  }, []);

  return {
    passwords,
    password,
    setPassword,
  };
};

const PasswordContext = createContext<ReturnType<typeof usePasswordController>>(
  {
    password: null,
    passwords: null,
    setPassword: () => {},
  }
);
export const PasswordProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PasswordContext.Provider value={usePasswordController()}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePassword = () => useContext(PasswordContext);
