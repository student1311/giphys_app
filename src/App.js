import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { FirebaseAuth } from './context/firebase/FirebaseAuth';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { PrivateRouteHome } from './components/PrivateRouteHome';
import { PrivateRouteLogin } from './components/PrivateRouteLogin';
import { Login } from './components/Login';
import { AlertState } from './context/alert/AlertState';
import { Alert } from './components/Alert';

export default function App() {
  return (
    <AlertState>
      <FirebaseAuth>
        <HashRouter basename="/">
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <PrivateRouteLogin path="/login">
                <Login />
              </PrivateRouteLogin>
              <PrivateRouteHome path="/">
                <Home />
              </PrivateRouteHome>
            </Switch>
          </div>
        </HashRouter>
      </FirebaseAuth>
    </AlertState>
  );
}
