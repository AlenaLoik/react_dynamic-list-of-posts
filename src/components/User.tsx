import React from 'react';

type Props = {
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
}

export const User: React.FC<Props> = ({ name, email, address }) => (
  <section className="user__info">
    <h3>about autor:</h3>
    <p><strong>{name}</strong></p>
    <h4>email:</h4>
    <p>{email}</p>
    <h4>adress:</h4>
    <p>
      {address.street}
      ,
      {' '}
      {' '}
      {address.suite}
      ,
      {' '}
      {address.city}
    </p>
  </section>
);
