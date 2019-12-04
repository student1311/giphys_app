import React from 'react';

export const AuthButton = ({ user }) => {
  let name = '';
  name = localStorage.getItem('name', name);

  return user ? (
    <h5 style={{ marginBottom: '0px' }}>
      Welcome<strong className="text-white pl-2">{name}!</strong>
    </h5>
  ) : (
    <h5 style={{ marginBottom: '0px' }}>You are not logged in.</h5>
  );
};
