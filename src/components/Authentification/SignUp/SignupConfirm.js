import React from 'react';
import { Link } from 'react-router-dom';

const SignupConfirm = () => (
  <div>
    <p>* : Champs Obligatoires</p>
    <div>
      <Link to="/inscription">Je suis cobaye</Link>
      <Link to="/inscription/chercheur">Je suis chercheur</Link>
    </div>
    <div>
      <button type="button"><Link to="/">Annuler</Link></button>
      <button type="submit">Confirmer</button>
    </div>

  </div>
);

export default SignupConfirm;
