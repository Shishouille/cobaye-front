import React from 'react';
import { Link } from 'react-router-dom';

const CreatedExperience = () => (
  <div>
    <div>
      Nom
      Mot-clés
    </div>
    <div>
      Nombre de participants
      Période
    </div>
    <div>
      <button type="button"><Link to="experience/edition/1">Editer</Link></button>
      <button type="button">Supprimer</button>
    </div>
  </div>
);

export default CreatedExperience;
