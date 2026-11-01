/**
 * Mirrors the FastAPI `User` models. Users have two IDs: `id` (autoincrement)
 * and `userId` (UUID). API paths and `posts.userId` use the UUID.
 */
export interface User {
  id: number;
  userId: string;
  name: string;
  email: string;
}

export interface UserCreate {
  name: string;
  email: string;
}

export interface UserUpdate {
  name?: string;
  email?: string;
}
