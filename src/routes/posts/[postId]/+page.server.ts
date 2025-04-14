import type { PageServerLoad } from './$types';

import { getPostItem /* getPostItemComments  */ } from '$lib/api/posts';

export const load: PageServerLoad = async ({ params }) => {
  const id = parseInt(params.postId, 10);
  const postItem = await getPostItem(id);
  // const postItemComments = await getPostItemComments(id);

  return {
    postItem,
    // postItemComments,
  };
};
