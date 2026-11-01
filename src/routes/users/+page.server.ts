import type { PageServerLoad } from './$types';
import { getUsers } from '$lib/api/users';

export const load: PageServerLoad = async ({ depends }) => {
  depends('app:users');
  return {
    users: await getUsers(),
  };
};
