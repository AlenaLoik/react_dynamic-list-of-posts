import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import { IUser, IComment } from './interface';

type Props = {
  title: string;
  body: string;
  userInfo: IUser;
  comments: IComment[];
};

export const Post: React.FC<Props> = ({ title, body, userInfo, comments }) => (
  <>
    <div className="article__content">
      <h2 className="article__title">{title}</h2>
      <p className="article__text">{body}</p>
      <User {...userInfo} />
    </div>
    <div className="article__comments">
      <CommentList comments={comments} />
    </div>
  </>
);
