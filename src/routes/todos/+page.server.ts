import type { Actions, PageServerLoad } from './$types';
import { getTodos /* updateTodoBatch */ } from '$lib/api/todos';

export const load: PageServerLoad = async ({ depends }) => {
  console.log('Server load function started.');
  depends('app:todos');
  try {
    console.log('Attempting to fetch todos...');
    const todos = await getTodos();
    console.log('getTodos completed. Data received:', todos ? '[data received]' : '[no data]');
    return {
      todos,
    };
  } catch (error) {
    console.error('Error in server load function:', error);
    // Depending on your SvelteKit version and desired behavior, you might re-throw or return an error status
    throw error; // Re-throwing the error to be handled by SvelteKit
  }
};

export const actions: Actions = {
  completeTodo: async ({ request }) => {
    const data = await request.formData();
    console.log({ data });

    const ids = data.getAll('id').map((id) => id.toString());

    const payload = ids.map((id) => ({
      id: id,
      completed: true,
    }));

    console.log({ payload });
    // await updateTodoBatch(payload);
  },
};
