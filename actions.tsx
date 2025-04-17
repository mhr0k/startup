'use server';

import users from '@/data/users.json';
import { LoginSchema } from './lib/validation';

type Response = {
  error?: string;
  user?: (typeof users)[number];
};

export async function signin(data: unknown): Promise<Response> {
  const validationResult = LoginSchema.safeParse(data);

  if (!validationResult.success) {
    return { error: 'An unexpected error occurred. Please try again later' };
  }

  const { email, password } = validationResult.data;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return { error: 'Invalid email or password' };
  }

  if (user.type === 'blocked') {
    return { error: 'Your account has been blocked' };
  }

  if (user.type === 'delay') {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    return { user };
  }

  return { user };
}
