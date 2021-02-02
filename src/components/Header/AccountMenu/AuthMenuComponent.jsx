import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
import routes from '../../../config/routes';
import authSelector from '../../../store/Selectors/authSelector';
import NavLinkComponent from '../../commonComponents/NavLinkComponent';
import DropDownMenuComponent from './DropDownMenuComponent';

const AuthMenuComponent = () => {
  const { authRoutes } = routes;
  const [routesList, setRoutesList] = useState([]);
  const auth = useSelector(authSelector);
  const { isEmpty, isLoaded } = auth;

  useEffect(() => {
    if (isLoaded) {
      setRoutesList([
        ...authRoutes.filter((item) => item.type === (isEmpty ? 'nonAuthenticated' : 'authenticated')),
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
              {
                route.path
                  ? <NavLinkComponent path={route.path} render={route.value} />
                  : <DropDownMenuComponent />
              }
            </Menu.Item>
          );
        })
      }
    </Menu>
  );
};

export default AuthMenuComponent;
