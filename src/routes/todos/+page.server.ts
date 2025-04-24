import type { Actions, PageServerLoad } from './$types';
import { getTodos /* updateTodoBatch */ } from '$lib/api/todos';

export const load: PageServerLoad = async () => {
  return {
    todos: await getTodos(),
  };
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
