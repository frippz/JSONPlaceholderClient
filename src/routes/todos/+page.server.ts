import type { Actions, PageServerLoad } from './$types';
import { getTodos, updateTodoBatch } from '$lib/api/todos';

export const load: PageServerLoad = async ({ depends }) => {
  depends('app:todos');
  return {
    todos: await getTodos(),
  };
};

export const actions: Actions = {
  /**
   * No-JS fallback: every rendered todo posts its id, checked ones also post `completed`
   */
  completeTodo: async ({ request }) => {
    const data = await request.formData();
    const completed = new Set(data.getAll('completed').map(String));

    const payload = data.getAll('id').map((id) => ({
      id: Number(id),
      completed: completed.has(String(id)),
    }));

    if (payload.length) {
      await updateTodoBatch(payload);
    }
  },
};
