import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const PrivateRouteHome = ({ children }) => {
  const { user } = useContext(FirebaseContext);
  return (
    <Route
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
