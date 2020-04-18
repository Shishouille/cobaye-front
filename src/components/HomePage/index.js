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
    <section className="home-display">
      <div>
        <h1>Devenez cobaye dès aujourd'hui.</h1>
      </div>
      <div>
        <StyledButton type="button">Inscription</StyledButton>
        <StyledButton type="button">Connexion</StyledButton>
      </div>
      <div>
        <Link to="/experiences">Ou découvrez le monde de la recherche.</Link>
      </div>
    </section>
  </StyledHome>
);

// == Export
export default HomePage;
