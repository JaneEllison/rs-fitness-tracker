import React from 'react';
import routes from '../../../config/routes';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

const NavMenuComponent = () => {

  return (
    <Menu  theme="dark" >
      {
        routes.map((route, index)=> (
          <Menu.Item key={`${index}`}>
            <NavLink  to={route.path}>
              {route.textName}
            </NavLink>
          </Menu.Item>
        ))
      }
    </Menu>
  );
};

export default NavMenuComponent;
