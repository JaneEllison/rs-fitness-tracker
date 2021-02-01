import React, {useState, useEffect} from 'react';
import { Menu } from 'antd';
import routes from '../../../config/routes';
import { useSelector } from 'react-redux';
import authSelector from '../../../store/Selectors/authSelector';
import NavLinkComponent from '../../commonComponents/NavLinkComponent';
import DropDownMenuComponent from './DropDownMenuComponent';

const AuthMenuComponent = () => {
  const { authRoutes } = routes;
  const [routesList, setRoutesList] = useState(authRoutes);
  const auth = useSelector(authSelector);
  const {isEmpty, isLoaded} = auth;

  useEffect(() => {
    isEmpty
      ? setRoutesList(
      [
        ...authRoutes.filter((item) => item.type === 'nonAuthenticated'),
      ])
      : setRoutesList(
      [
        ...authRoutes.filter((item) => item.type === 'authenticated'),
      ])
  }, [isEmpty, isLoaded]);

  return (
    <Menu mode="horizontal" theme="dark">
      {
        isLoaded && !isEmpty
        ? routesList.map((route, index)=> (
          <Menu.Item key={`${index}`}>
            {
              route.path ? (
                  <NavLinkComponent path={route.path} render={route.value} />
                )
                : <DropDownMenuComponent />
            }
          </Menu.Item>
        ))
        : <div />
      }
    </Menu>
  );
};

export default AuthMenuComponent;
