export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  phone: string;
  website: string;
  company: object;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostsUpdate {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: IUser;
  comments: IComment[];
}
