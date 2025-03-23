import type { PageServerLoad } from './$types';

import { getPostItem } from '$lib/api/posts';

export const load: PageServerLoad = async (params) => {
  const id = 1;
  const postItem = await getPostItem(id);

  return {
    postItem,
  };
};
