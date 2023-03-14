import { ipcMain } from 'electron';
import { createUser, getUser, updateUser } from '../lib/user';

export const api = () => {
  ipcMain.handle('get-user', async (event, email) => {
    const user = await getUser(email);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      verified: user.verified,
    };
  });

  ipcMain.handle('create-user', async (event, payload) => {
    const isUserExist = await getUser(payload.email);
    if (isUserExist) throw new Error('User already exist');

    const user = await createUser(payload);
    return user;
  });

  ipcMain.handle('login', async (event, payload) => {
    const user = await getUser(payload.email);

    if (!user) throw new Error('User not found');
    return user;
  });

  ipcMain.handle('update-user', async (event, args) => {
    const isUserExist = await getUser(args.id);
    if (!isUserExist) throw new Error('User not found');

    console.log('id: ', args.id);

    const user = await updateUser(args.id, args.payload);
    return user;
  });
};
