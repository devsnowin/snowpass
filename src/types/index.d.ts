import { ApiProps } from '../../types/types';

declare global {
  interface Window {
    api: ApiProps;
  }
}

interface LocalUser {
  name?: string;
  email: string;
  password: string;
}

interface Password {
  id: string;
  title: string;
  url: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}
