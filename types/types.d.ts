import type { User } from '@prisma/client';
import { IpcRenderer } from 'electron';

interface UserPayload {
  name?: string;
  email?: string;
  password?: string;
}

interface ApiProps {
  getUser: (email: string) => Promise<IpcRenderer>;
  updateUser: ({
    id,
    ...payload
  }: {
    id: string;
    payload: UserPayload;
  }) => Promise<IpcRenderer>;
  login: ({ email, password }) => Promise<User>;
  register: ({ name, email, password }) => Promise<User>;
}
