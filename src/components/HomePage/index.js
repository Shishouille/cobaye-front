// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import homeImage from 'src/assets/images/homeImage.svg';

import StyledButton from 'src/GlobalStyles/StyledButton';
import StyledHome from './StyledHome';


// == Composant
const HomePage = () => (
  <StyledHome>
    <div className="home-display">
      <img className="home-pic" src={homeImage} alt="HomePage" />
    </div>
    <section className="home-display home-title">
      <div>
        <h1>Devenez cobaye dès aujourd'hui.</h1>
      </div>
      <div className="home-button">
        <Link to="/inscription"><StyledButton type="button">Inscription</StyledButton></Link>
        <Link to="/connexion"><StyledButton type="button">Connexion</StyledButton></Link>
      </div>
      <div className="home-exp">
        <Link to="/experiences">Ou découvrez le monde de la recherche.</Link>
      </div>
    </section>
  </StyledHome>
);

// == Export
export default HomePage;
