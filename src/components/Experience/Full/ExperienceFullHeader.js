import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import StyledHeader from './StyledHeader';

const ExperienceFullHeader = () => {
  const { id } = useParams();
  return (
    <StyledHeader>
      <menu>
        <ul>
          <li>
            <NavLink
              to={`/experience/${id}`}
            >
              Description
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/experience/${id}/criteres`}
            >
              Critères
            </NavLink>
          </li>
        </ul>
      </menu>
    </StyledHeader>
  );
};

export default ExperienceFullHeader;
