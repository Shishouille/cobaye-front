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
        activeClassName="sider-link--active"
      ><img src="" alt="" />
        Parcourir
      </NavLink>
      <NavLink
        to="/experience/creation"
        activeClassName="sider-link--active"
      ><img src="" alt="" />
        Créer une expérience
      </NavLink>
      <NavLink
        to="/profil"
        activeClassName="sider-link--active"
      ><img src="" alt="" />
        Tableau de Bord
      </NavLink>
      <NavLink
        to="/messages"
        activeClassName="sider-link--active"
      ><img src="" alt="" />
        Messages
      </NavLink>
    </div>
    <div className="sider-secondary-menu">
      <NavLink
        to="/parametres"
        activeClassName="sider-link--active"
      ><img src="" alt="" />
        Paramètres
      </NavLink>
      <Link to="/">
        <img src="" alt="" /> Déconnexion
      </Link>
    </div>
  </nav>
);

export default Sider;
