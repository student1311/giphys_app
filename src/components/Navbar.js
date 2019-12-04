import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthButton } from './AuthButton';
import { fire } from '../context/firebase/fireConfig';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { AlertContext } from '../context/alert/alertContext';

export const Navbar = () => {
  const { user } = useContext(FirebaseContext);
  const state = useContext(AlertContext);
  let history = useHistory();

  const logoutUser = () => {
    localStorage.clear();
    fire.auth().signOut();
    history.push('/');
  };

  const showInfo = () => {
    state.show('You must log in to view the page at HOME');
  };

  const hideInfo = () => {
    state.hide();
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">Giphy App</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/giph-app/build/home"
              onClick={!user ? showInfo : null}
            >
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/giph-app/build/about"
              onClick={hideInfo}
            >
              about
            </Link>
          </li>
          <li className="nav-item">
            {user ? (
              <Link
                onClick={logoutUser}
                className="nav-link"
                to="/giph-app/build/"
              >
                logout
              </Link>
            ) : (
              <Link
                onClick={hideInfo}
                className="nav-link"
                to="/giph-app/build/login"
              >
                signup/login
              </Link>
            )}
          </li>
        </ul>
        <div className="ml-auto ">
          <AuthButton user={user} />
        </div>
      </div>
    </nav>
  );
};
