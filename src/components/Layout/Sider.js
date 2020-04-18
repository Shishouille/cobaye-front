import React from 'react';

import { NavLink, Link } from 'react-router-dom';

const Sider = () => (
  <nav className="sider">
    <div className="sider-logo">
      <img src="" alt="" />
      <Link
        to="/"
      >
        Cobaye
      </Link>
    </div>
    <div className="sider-main-menu">
      <NavLink
        to="/experiences"
      ><img src="" alt="" />
        Expériences
      </NavLink>
      <NavLink
        to="/profil"
      ><img src="" alt="" />
        Profil
      </NavLink>
      <NavLink
        to="/messages"
      ><img src="" alt="" />
        Messages
      </NavLink>
    </div>
    <div className="sider-secondary-menu">
      <NavLink
        to="/parametres"
      ><img src="" alt="" />
        Paramètres
      </NavLink>
    </div>
  </nav>
);

export default Sider;
