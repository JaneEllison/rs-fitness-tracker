import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
import routes from '../../../config/routes';
import authSelector from '../../../store/Selectors/authSelector';
import NavLinkComponent from '../../commonComponents/NavLinkComponent';
import DropDownMenuComponent from './DropDownMenuComponent';
import antdPropConstants from '../../../constants/antdPropConstants';
import { AUTH_TYPES } from '../../../constants/routeConstants';

const {
  HEADER: {
    AUTH_MENU: {
      MODE,
      THEME,
    },
  },
} = antdPropConstants;

const {
  AUTHENTICATED,
  NON_AUTHENTICATED,
} = AUTH_TYPES;

const AuthMenuComponent = () => {
  const { authRoutes } = routes;
  const [routesList, setRoutesList] = useState([]);
  const auth = useSelector(authSelector);
  const { isEmpty, isLoaded } = auth;

  useEffect(() => {
    setRoutesList([
      ...authRoutes.filter((item) => item.type === (isEmpty ? NON_AUTHENTICATED : AUTHENTICATED)),
    ]);
  }, [isEmpty, isLoaded]);

  return (
    <Menu mode={MODE} theme={THEME}>
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
