// == Import npm
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// == Import
import ExperiencesList from 'src/components/Experience/ExperiencesList';

import HomePage from '../HomePage';
import ProfilePage from '../Profile/ProfilePage';
import MessageBox from '../MessageBox';
import Settings from '../Settings';

// == Composant
const App = () => (
  <div>
    <Switch>
      <Route
        path="/"
        exact
      >
        <HomePage />
      </Route>
      {/* <Route
          path="/404"
        >
          <404 />
        </Route>
        <Redirect to="/404" /> */}
      <Route
        path="/experiences"
        exact
      >
        <ExperiencesList />
      </Route>
      <Route
        path="/experiences"
        exact
      >
        <ExperiencesList />
      </Route>
      <Route
        path="/profil"
        exact
      >
        <ProfilePage />
      </Route>
      <Route
        path="/messages"
        exact
      >
        <MessageBox />
      </Route>
      <Route
        path="/parametres"
        exact
      >
        <Settings />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
