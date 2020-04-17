// == Import npm
import React from 'react';
// import { Link } from 'react-router-dom';
import StyledButton from 'src/GlobalStyles/StyledButton';
import Layout from '../Layout';


// == Import

// == Composant
const HomePage = () => (
  <Layout>
    <div>
      <h1>Devenez cobaye dès aujourd'hui.</h1>
    </div>
    <div>
      <StyledButton type="button">Inscription</StyledButton>
      <StyledButton type="button">Connexion</StyledButton>
    </div>
    <div>
      {/* <Link>Ou découvrez le monde de la recherche.</Link> */}
    </div>
  </Layout>
);

// == Export
export default HomePage;
