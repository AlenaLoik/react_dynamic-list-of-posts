import React from 'react';
import { Comment } from './Comment';
import { IComment } from './interface';

type Props = {
  comments: IComment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <section className="comments">
    <h3>Comments:</h3>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </section>
);
