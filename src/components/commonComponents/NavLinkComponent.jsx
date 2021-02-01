import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkComponent = ({path, render, icon}) => {
  return (
    <NavLink  to={path}>
      {render}
      {
        icon && icon
      }
    </NavLink>
  );
};

export default NavLinkComponent;
