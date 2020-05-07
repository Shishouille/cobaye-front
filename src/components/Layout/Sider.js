import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import { InlineIcon } from '@iconify/react';
import cogIcon from '@iconify/icons-mdi/cog';

// TODO: Changer l'icône messagerie par celle-ci quand quelqu'un tape un message.
import messageSquareOutline from '@iconify/icons-eva/message-square-outline';

import houseUser from '@iconify/icons-fa-solid/house-user';
import diceD6 from '@iconify/icons-fa-solid/dice-d6';
import roundAddToPhotos from '@iconify/icons-ic/round-add-to-photos';
import logoutBoxFill from '@iconify/icons-ri/logout-box-fill';
import messageSquare from '@iconify/icons-feather/message-square';
import loginBoxFill from '@iconify/icons-ri/login-box-fill';

const Sider = ({
  signOut, 
  isConnected, 
  isScientist,
}) => (
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
      ><InlineIcon icon={diceD6} color="white" />
        Parcourir
      </NavLink>
      {isScientist && (
      <NavLink
        to="/experience/creation"
        activeClassName="sider-link--active"
      ><InlineIcon icon={roundAddToPhotos} color="white" />
        Créer une expérience
      </NavLink>
      )}
      <NavLink
        to="/profil"
        activeClassName="sider-link--active"
      ><InlineIcon icon={houseUser} color="white" />
        Tableau de Bord
      </NavLink>
      <NavLink
        to="/messages"
        activeClassName="sider-link--active"
      ><InlineIcon icon={messageSquare} color="white" />
        Messages
      </NavLink>
    </div>
    <div className="sider-secondary-menu">
      <NavLink
        to="/parametres"
        activeClassName="sider-link--active"
      ><InlineIcon icon={cogIcon} color="white" />
        Paramètres
      </NavLink>
      {isConnected ? (
        <div onClick={signOut}>
          <Link to="/">
            <InlineIcon icon={logoutBoxFill} color="white" /> Déconnexion
          </Link>
        </div>
      ) : (
        <Link to="/connexion">
          <InlineIcon icon={loginBoxFill} color="white" /> Connexion
        </Link>
      )}
    </div>
  </nav>
);
export default Sider;
