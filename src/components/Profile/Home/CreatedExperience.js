import React from 'react';
import { Link } from 'react-router-dom';

import { Icon, InlineIcon } from '@iconify/react';
import trashIcon from '@iconify/icons-vaadin/trash';
import fileEditAlt from '@iconify/icons-uil/file-edit-alt';

import { StyledButtonIcon } from 'src/GlobalStyles/StyledButton';

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
      <Link to="experience/edition/1"><StyledButtonIcon><Icon icon={fileEditAlt} color="white" /></StyledButtonIcon></Link>
      <StyledButtonIcon><Icon icon={trashIcon} color="white" /></StyledButtonIcon>
    </div>
  </div>
);

export default CreatedExperience;
