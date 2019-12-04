import React, { useContext, useState } from 'react';
import { fire } from '../context/firebase/fireConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { useLoader } from './useLoader';
import { AlertContext } from '../context/alert/alertContext';

export const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loader, showLoader, hideLoader] = useLoader();
  const state = useContext(AlertContext);

  const loginUser = e => {
    localStorage.setItem('name', name);
    if (email && name && password) {
      showLoader();
    }

    let { from } = location.state || { from: { pathname: '/home' } };
    e.preventDefault();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(success => {
        state.hide();
        history.replace(from);
      })
      .catch(error => {
        hideLoader();
        state.show(error.toString().replace('Error:', ''), 'danger');
      });
  };

  const signupUser = e => {
    localStorage.setItem('name', name);
    if (email && name && password) {
      showLoader();
    }
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(success => {
        state.hide();
      })
      .catch(error => {
        hideLoader();
        state.show(error.toString().replace('Error:', ''), 'danger');
      });
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  return (
    <div className="container">
      <div
        style={{ maxWidth: '400px' }}
        className="form-wrap m-auto border border-dark rounded p-3"
      >
        {loader}
        <form>
          <div className="form-group">
            <input
              value={name}
              onChange={handleChangeName}
              type="text"
              name="name"
              className="form-control"
              id="userName"
              placeholder="Name"
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <input
              value={email}
              onChange={handleChangeEmail}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              value={password}
              onChange={handleChangePassword}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              autoComplete="password"
            />
          </div>

          <button type="submit" onClick={loginUser} className="btn btn-primary">
            Login
          </button>
          <button
            onClick={signupUser}
            style={{ marginLeft: '25px' }}
            className="btn btn-primary"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};
