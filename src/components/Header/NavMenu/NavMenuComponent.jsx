import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
import routes from '../../../config/routes';
import NavLinkComponent from '../../commonComponents/NavLinkComponent';
import authSelector from '../../../store/Selectors/authSelector';

const NavMenuComponent = () => {
  const { menuRoutes } = routes;
  const [routesList, setRoutesList] = useState([]);
  const auth = useSelector(authSelector);
  const { isEmpty, isLoaded } = auth;

  useEffect(() => {
    if (isLoaded) {
      setRoutesList([
        ...menuRoutes.filter((item) => (isEmpty ? item.type !== 'authenticated' : true)),
      ]);
    }
  }, [isEmpty, isLoaded]);

  return (
    <Menu mode="horizontal" theme="dark">
      {
        routesList.map((route, index) => {
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
