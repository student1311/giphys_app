import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const PrivateRouteLogin = ({ children }) => {
  const { user } = useContext(FirebaseContext);
  return (
    <Route
      path="/login"
      render={({ location }) =>
        !user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
