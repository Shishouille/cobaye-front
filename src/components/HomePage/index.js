// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import homeImage from 'src/assets/images/homeImage.svg';

import { StyledButtonHome } from 'src/GlobalStyles/StyledButton';
import StyledHome from './StyledHome';

// == Composant
const HomePage = ({ isConnected, signOut }) => (
  <StyledHome>
    <div className="home-display">
      <img className="home-pic" src={homeImage} alt="HomePage" />
    </div>
    <section className="home-display home-title">
      <div>
        <h1>Devenez cobaye dès aujourd'hui.</h1>
      </div>
      {!isConnected && (
        <div className="home-button">
          <Link to="/inscription"><StyledButtonHome type="button">Inscription</StyledButtonHome></Link>
          <Link to="/connexion"><StyledButtonHome type="button">Connexion</StyledButtonHome></Link>
      </div>
      )}
      {isConnected && (
        <div className="home-button" onClick={signOut}>
          <Link to="/"><StyledButtonHome type="button">Déconnexion</StyledButtonHome></Link>
      </div>
      )}
      <div className="home-exp">
        <Link to="/experiences">Ou découvrez le monde de la recherche.</Link>
      </div>
    </section>
  </StyledHome>
);

// == Export
export default HomePage;
