import type { PageServerLoad } from './$types';

import { getPostItem } from '$lib/api/posts';

export const load: PageServerLoad = async ({ params }) => {
  const id = parseInt(params.postId, 10);
  const postItem = await getPostItem(id);

  return {
    postItem,
  };
};
