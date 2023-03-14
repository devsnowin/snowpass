import type { User } from '@prisma/client';
import { UserPayload } from '../../types/types';
import prisma from './prisma';

export const getUser = async (email: string): Promise<User> => {
  const user = await prisma.user.findUnique({
    where: {
      email: email as string,
    },
  });

  return user;
};

export const createUser = async (payload: UserPayload): Promise<User> => {
  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    },
  });

  return user;
};

export const updateUser = async (
  id: string,
  payload: UserPayload
): Promise<User> => {
  const user = await prisma.user.update({
    where: { email: id },
    data: {
      ...payload,
    },
  });
  return user;
};
