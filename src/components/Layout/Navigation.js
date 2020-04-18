import React from 'react';

const Navigation = () => (
  <header className="header">
    <div className="header-search">
      <label htmlFor="Search">
        <img src="" alt="" />
        <input type="text" name="Search" id="" placeholder="Rechercher..." />
      </label>
    </div>
    <div>
      <p className="header-name">John (UserName)</p>
    </div>
  </header>
);

export default Navigation;
