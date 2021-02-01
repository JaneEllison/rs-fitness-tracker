import React from 'react';
import routes from '../../../config/routes';
import { Menu } from 'antd';
import NavLinkComponent from '../../commonComponents/NavLinkComponent';
import WeatherComponent from '../Weather/WeatherComponent';

const NavMenuComponent = () => {
  const { menuRoutes } = routes;

  return (
    <Menu mode="horizontal" theme="dark">
      {
        menuRoutes.map((route, index)=> (
          <Menu.Item key={`${index}`}>
              <NavLinkComponent path={route.path} render={route.value} />
          </Menu.Item>
        ))
      }

    </Menu>
  );
};

export default NavMenuComponent;
