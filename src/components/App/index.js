// == Import npm
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Import Style
import '@pathofdev/react-tag-input/build/index.css';
import 'react-nice-dates/build/style.css';

// == Import
import ExperiencesList from 'src/components/Experience/List/ExperiencesList';
import ExperienceCreation from 'src/components/Experience/Creation/ExperienceCreation';
import ExperienceParticipation from 'src/components/Experience/Participation/ExperienceParticipation';
import ExperienceEdition from 'src/components/Experience/Edit/ExperienceEdit';
import ExperienceDescription from 'src/components/Experience/Full/ExperienceDescription';
import ExperienceCriterias from 'src/components/Experience/Full/ExperienceCriterias';

import SignIn from 'src/components/Authentification/SignIn';
import SignUp from 'src/components/Authentification/SignUp';
import SignUpScientist from 'src/components/Authentification/SignUp/SignupScientist';
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
        <ExperiencesList />
      </Route>
      <Route
        path="/experience/creation"
        exact
      >
        <ExperienceCreation />
      </Route>
      <Route
        path="/experience/edition/:id"
        exact
      >
        <ExperienceEdition />
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
        path="/experience/:id/participer"
        exact
      >
        <ExperienceParticipation />
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
