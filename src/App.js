import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { PrivateRoute } from './helpers/PrivateRoute'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Welcome from './components/Welcome'
import Main from './layouts/Main'
import Profile from './pages/Profile'
import Signup from './pages/Signup'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Main>
               <PrivateRoute exact path="/dashboard" component={Dashboard} />
               <PrivateRoute path="/profile" component={Profile} />
            </Main>
        </Switch>
      </BrowserRouter> 
    </>
  );
}

export default App;
