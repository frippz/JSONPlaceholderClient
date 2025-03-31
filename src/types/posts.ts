export interface PostItem {
  body: string;
  createdAt: string;
  id: number;
  title: string;
  userId: string;
}

export interface PostItemComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
