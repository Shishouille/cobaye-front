// == Import npm
import React from 'react';
// import { Link } from 'react-router-dom';
import Layout from '../Layout';

// == Import

// == Composant
const HomePage = () => (
  <Layout>
    <div>
      <h1>Devenez cobaye dès aujourd'hui.</h1>
    </div>
    <div>
      <button type="button">Inscription</button>
      <button type="button">Connexion</button>
    </div>
    <div>
      {/* <Link>Ou découvrez le monde de la recherche.</Link> */}
    </div>
  </Layout>
);

// == Export
export default HomePage;
