import React from 'react';

import StyledTag from 'src/GlobalStyles/StyledTag';
import StyledExperiencePreview from './StyledExperiencePreview';


const ExperiencePreview = () => (
  <StyledExperiencePreview>
    <div className="exp-main">
      <img src="" alt="Domaine" />
      <div className="exp-desc">
        <h2>Nom de l'expérience</h2>
        <StyledTag>Mots-clés</StyledTag>
        <div className="exp-time">
          <p> <span role="img" aria-label="Durée">🕙</span>Durée</p>
          <p><span role="img" aria-label="Etapes">➿</span>Nombre d'étapes </p>
        </div>
        <p><span role="img" aria-label="Rémunération">💶</span>Rémunération ?</p>
      </div>
    </div>
    <div className="exp-footer">
      <p>Type de Passation : Questionnaire</p>
    </div>
  </StyledExperiencePreview>
);

export default ExperiencePreview;
