import React from 'react';
import { Menu } from 'antd';
import routes from '../../../config/routes';
import NavLinkComponent from '../../commonComponents/NavLinkComponent';

const NavMenuComponent = () => {
  const { menuRoutes } = routes;

  return (
    <Menu mode="horizontal" theme="dark">
      {
        menuRoutes.map((route, index) => {
          const keyProp = `route-${index}`;
          return (
            <Menu.Item key={keyProp}>
              <NavLinkComponent path={route.path} render={route.value} />
            </Menu.Item>
          );
        })
      }

    </Menu>
  );
};

export default NavMenuComponent;
