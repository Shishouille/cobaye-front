import React from 'react';

const Navigation = ({ userData, isConnected }) => {
  return(
  <header className="header">
    <div className="header-search">
      <label htmlFor="Search">
        <img src="" alt="" />
        <input type="text" name="Search" id="" placeholder="Rechercher..." />
      </label>
    </div>
    <div>
      {isConnected && (<p className="header-name">Bonjour{` ${userData.user._doc.firstName}`}</p>)}
    </div>
  </header>
);};

export default Navigation;
