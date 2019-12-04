import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const PrivateRouteLogin = ({ children }) => {
  const { user } = useContext(FirebaseContext);
  return (
    <Route
      path="/giph-app/build/login"
      render={({ location }) =>
        !user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/giph-app/build/home',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
