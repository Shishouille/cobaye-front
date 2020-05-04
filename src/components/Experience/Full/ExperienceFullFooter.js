import React from 'react';
import { Link } from 'react-router-dom';

import { StyledButtonForm } from 'src/GlobalStyles/StyledButton';
import StyledLink from 'src/GlobalStyles/StyledLink';
import StyledFooter from './StyledFooter';


const ExperienceFullFooter = () => {
  return (
    <StyledFooter>
      <StyledButtonForm type="button"><Link to="/experience/1/participer">Participer à l'expérience</Link> </StyledButtonForm>
      <StyledLink>Vous avez des questions ? Contactez le chercheur.</StyledLink>
    </StyledFooter>
  );
};

export default ExperienceFullFooter;
