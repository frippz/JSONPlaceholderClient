import type { PageServerLoad } from './$types';

import { getPosts } from '$lib/api/posts';

export const load: PageServerLoad = async () => {
  return {
    posts: await getPosts(),
  };
};
