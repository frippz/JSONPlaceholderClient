import type { PostItem } from '$types/posts';

import { api } from './client';

const endPoints = {
  posts: () => `posts`,
  postItem: (postItem: number) => `${endPoints.posts}/${postItem}`,
};

/**
 * Retrieve a list of posts
 * @returns Promise containing the TODOs array
 */
export function getPosts(): Promise<Array<PostItem>> {
  return api.get(endPoints.posts()).json();
}

/**
 * Retrieve a single post
 * @param todoItem The unique identifier of the TODO
 * @returns Promise containing the TODOs array
 */
export function getPostItem(todoItem: number): Promise<PostItem> {
  return api.get(endPoints.postItem(todoItem)).json();
}
