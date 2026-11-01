import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
import { getPostItem } from '$lib/api/posts';

export const load: PageServerLoad = async ({ params }) => {
  const id = Number(params.postId);
  if (!Number.isInteger(id)) {
    error(404, 'Post not found');
  }

  return {
    postItem: await getPostItem(id),
  };
};
