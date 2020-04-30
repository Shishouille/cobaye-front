import React from 'react';
import { Link } from 'react-router-dom';

import StyledFooter from './StyledFooter';

const ExperienceFullFooter = () => {
  return (
    <StyledFooter>
      <button type="button"><Link to="/experience/1/participer">Participer à l'expérience</Link> </button>
      <button type="button">Vous avez des questions ? Contactez le chercheur.</button>
    </StyledFooter>
  );
};

export default ExperienceFullFooter;
