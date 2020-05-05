import React from 'react';

import { InlineIcon } from '@iconify/react';
import searchIcon from '@iconify/icons-ion/search';

import { StyledInput } from 'src/components/Inputs/StyledInput';


const Navigation = ({ userData, isConnected }) => (
  <header className="header">
    <div className="header-search">
      <label htmlFor="Search">
        <InlineIcon icon={searchIcon} />
        <StyledInput type="text" name="Search" id="" placeholder="Rechercher..." />
      </label>
    </div>
    {/* <div>
      {isConnected && (<p className="header-name">Bonjour{` ${userData.user._doc.firstName}`}</p>)}
    </div> */}
  </header>
);

export default Navigation;
