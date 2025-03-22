import type { PageServerLoad } from './$types';

import { getTodos } from '$lib/api/todos';

export const load: PageServerLoad = async () => {
  return {
    todos: await getTodos(),
  };
};
