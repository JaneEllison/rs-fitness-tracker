import React from 'react';
import routes from '../../../config/routes';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

const NavMenuComponent = () => {
  const { menuRoutes } = routes;
  return (
    <Menu mode="horizontal" theme="dark">
      {
        menuRoutes.map((route, index)=> (
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
