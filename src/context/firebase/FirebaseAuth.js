import React, { useState, useEffect } from 'react';
import { fire } from './fireConfig';
import { FirebaseContext } from './firebaseContext';

export const FirebaseAuth = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        user
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
