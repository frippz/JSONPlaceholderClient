export interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostItemComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
