import type { User } from './users';

/**
 * Mirrors the FastAPI `PostResponse` model
 */
export interface PostItem {
  id: number;
  title: string;
  body: string;
  /** ISO 8601 UTC timestamp, e.g. "2026-11-01T12:00:00Z" */
  createdAt: string;
  /** The author's UUID (same as `author.userId`) */
  userId: User['userId'];
  author: User;
}

export interface PostItemCreate {
  title: string;
  body: string;
  userId: User['userId'];
}

export interface PostItemUpdate {
  title?: string;
  body?: string;
}
