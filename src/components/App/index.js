// == Import npm
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Import Style
import '@pathofdev/react-tag-input/build/index.css';
import 'react-nice-dates/build/style.css';

// == Import
import LoadingPage from 'src/components/Loading';

import ExperiencesList from 'src/components/Experience/List/ExperiencesList';
import ExperienceCreation from 'src/containers/Experience/Creation';
import ExperienceParticipation from 'src/components/Experience/Participation/ExperienceParticipation';
import ExperienceEdition from 'src/components/Experience/Edit/ExperienceEdit';
import ExperienceDescription from 'src/components/Experience/Full/ExperienceDescription';
import ExperienceCriterias from 'src/components/Experience/Full/ExperienceCriterias';

import SignIn from 'src/containers/Authentification/SignIn';
import SignUpCobaye from 'src/containers/Authentification/SignUp/SignUpCobaye';
import SignUpScientist from 'src/containers/Authentification/SignUp/SignUpScientist';
import ProfilePage from 'src/containers/Profile/Home';
import HomePage from 'src/containers/HomePage';
import MessageBox from '../MessageBox';
import Settings from '../Settings';


// == Composant
const App = ({ loading }) => (
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
        <SignUpCobaye />
      </Route>
      <Route
        path="/inscription/chercheur"
        exact
      >
        <SignUpScientist />
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
        {loading ? (
          <LoadingPage />
        ) : (
          <ExperiencesList />
        )}
      </Route>
      <Route
        path="/experience/creation"
        exact
      >
        {loading ? (
          <LoadingPage />
        ) : (
          <ExperienceCreation />
        )}
      </Route>
      <Route
        path="/experience/edition/:id"
        exact
      >
        {loading ? (
          <LoadingPage />
        ) : (
          <ExperienceEdition />)}
      </Route>
      <Route
        path="/experience/:id"
        exact
      >
        {loading ? (
          <LoadingPage />
        ) : (
          <ExperienceDescription />)}
      </Route>
      <Route
        path="/experience/:id/criteres"
        exact
      >
        {loading ? (
          <LoadingPage />
        ) : (
          <ExperienceCriterias />)}
      </Route>
      <Route
        path="/experience/:id/participer"
        exact
      >
        {loading ? (
          <LoadingPage />
        ) : (
          <ExperienceParticipation />)}
      </Route>
      <Route
        path="/profil"
        exact
      >
        {loading ? (
          <LoadingPage />
        ) : (
          <ProfilePage />)}
      </Route>
      <Route
        path="/messages"
        exact
      >
        {loading ? (
          <LoadingPage />
        ) : (
          <MessageBox />)}
      </Route>
      <Route
        path="/parametres"
        exact
      >
        {loading ? (
          <LoadingPage />
        ) : (
          <Settings />)}
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
