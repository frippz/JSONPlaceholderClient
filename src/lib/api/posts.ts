import type { PostItem } from '$types/posts';

import { api } from './client';

const endPoints = {
  posts: 'posts',
  postItem: (postItem: number) => `${endPoints.posts}/${postItem}`,
};

/**
 * Retrieve a list of posts
 * @returns Promise containing the posts array
 */
export function getPosts(): Promise<Array<PostItem>> {
  return api.get(endPoints.posts).json();
}

/**
 * Retrieve a single post
 * @param postItem The unique identifier of the post
 * @returns Promise containing the postItem data
 */
export function getPostItem(postItem: number): Promise<PostItem> {
  return api.get(endPoints.postItem(postItem)).json();
}
