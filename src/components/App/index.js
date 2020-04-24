// == Import npm
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// == Import
import ExperiencesList from 'src/components/Experience/List/ExperiencesList';
import ExperienceDescription from 'src/components/Experience/Full/ExperienceDescription';
import ExperienceCriterias from 'src/components/Experience/Full/ExperienceCriterias';

import SignIn from 'src/components/Authentification/SignIn';
import SignUp from 'src/components/Authentification/SignUp';
import HomePage from '../HomePage';
import ProfilePage from '../Profile/Home';
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
      <Route
        path="/connexion"
        exact
      >
        <SignIn />
      </Route>
      <Route
        path="/inscription"
        exact
      >
        <SignUp />
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
        path="/experience/:id"
        exact
      >
        <ExperienceDescription />
      </Route>
      <Route
        path="/experience/:id/criteres"
        exact
      >
        <ExperienceCriterias />
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
