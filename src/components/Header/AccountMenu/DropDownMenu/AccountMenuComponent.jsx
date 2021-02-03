import React from 'react';
import { Menu } from 'antd';
import routes from '../../../../config/routes';
import NavLinkComponent from '../../../commonComponents/NavLinkComponent';

const AccountMenuComponent = () => {
  const { accountMenuRoutes } = routes;

  return (
    <Menu>
      {
        accountMenuRoutes.map((route, index) => {
          const keyProp = `route-${index}`;
          return (
            <Menu.Item key={keyProp}>
              <NavLinkComponent
                path={route.path}
                render={route.value}
                icon={route.icon}
              />
            </Menu.Item>
          );
        })
      }
    </Menu>
  );
};

export default AccountMenuComponent;
