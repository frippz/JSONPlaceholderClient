import type { PageServerLoad } from './$types';
import { getUsers } from '$lib/api/users';

export const load: PageServerLoad = async ({ depends }) => {
  console.log('Server load function started.');
  depends('app:users');
  try {
    console.log('Attempting to fetch users...');
    const users = await getUsers();
    console.log('getUsers completed. Data received:', users ? '[data received]' : '[no data]');
    return {
      users,
    };
  } catch (error) {
    console.error('Error in server load function:', error);
    throw error;
  }
};
