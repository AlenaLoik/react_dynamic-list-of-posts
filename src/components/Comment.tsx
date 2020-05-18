import React from 'react';

type Props = {
  name: string;
  email: string;
  body: string;
}

export const Comment: React.FC<Props> = ({ name, email, body }) => (
  <div className="comment">
    <h4>name: </h4>
    <p>{name}</p>
    <h4> email: </h4>
    <p>{email}</p>
    <section className="commet__text">
      <h4> comment: </h4>
      <p>{body}</p>
    </section>
  </div>
);
