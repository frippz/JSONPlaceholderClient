import type { User, UserCreate, UserUpdate } from '$types/users';

import { api } from './client';

const endPoints = {
  users: () => `users/`,
  userItem: (userId: User['userId']) => `users/${userId}`,
};

/**
 * Retrieve all users
 * @returns Promise containing the users array
 */
export function getUsers(): Promise<Array<User>> {
  return api.get(endPoints.users()).json();
}

/**
 * Retrieve a single user
 * @param userId The user's UUID (`userId`, not `id`)
 * @returns Promise containing the user object
 */
export function getUserItem(userId: User['userId']): Promise<User> {
  return api.get(endPoints.userItem(userId)).json();
}

/**
 * Delete a single user
 * @param userId The user's UUID (`userId`, not `id`)
 * @returns Promise resolving when the API responds with 204 No Content
 */
export async function deleteUserItem(userId: User['userId']): Promise<void> {
  await api.delete(endPoints.userItem(userId));
}

/**
 * Update a single user
 * @param userId The user's UUID (`userId`, not `id`)
 * @param user The user update payload
 * @returns Promise containing the updated user
 */
export function updateUser(userId: User['userId'], user: UserUpdate): Promise<User> {
  return api.put(endPoints.userItem(userId), { json: user }).json();
}

/**
 * Create a single user
 * @param payload The user creation payload
 * @returns Promise containing the created user
 */
export function createUser(payload: UserCreate): Promise<User> {
  return api.post(endPoints.users(), { json: payload }).json();
}
