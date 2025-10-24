import type { PostItem /* PostItemComment  */ } from '$types/posts';

import { api } from './client';

const endPoints = {
  posts: 'posts/',
  postItem: (postItem: number) => `${endPoints.posts}/${postItem}`,
  // postItemComments: (postItem: number) => `${endPoints.posts}/${postItem}/comments`,
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

// /**
//  * Retrieve comments from a single post
//  * @param postItem The unique identifier of the post
//  * @returns Promise containing the postItemComments data
//  */
// export function getPostItemComments(postItem: number): Promise<Array<PostItemComment>> {
//   return api.get(endPoints.postItemComments(postItem)).json();
// }
