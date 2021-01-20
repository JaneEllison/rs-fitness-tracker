import React from 'react';
import routes from '../../../config/routes';
import { NavLink } from 'react-router-dom';

const NavMenuComponent = () => {
  return (
    <div>
      {
        routes.map((route, index)=> (
            <NavLink key={`${index}`} to={route.path}>
              {route.textName}
            </NavLink>
        ))
      }
    </div>
  );
};

export default NavMenuComponent;
