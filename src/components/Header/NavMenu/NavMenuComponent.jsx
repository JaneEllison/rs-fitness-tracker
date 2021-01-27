import React, { useEffect, useState } from 'react';
import routes from '../../../config/routes';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
import authSelector from '../../../store/Selectors/authSelector';

const NavMenuComponent = () => {
  const { menuRoutes } = routes;
  const { authRoutes } = routes;
  const [routesList, setRoutesList] = useState(authRoutes);
  const auth = useSelector(authSelector);

  const {isEmpty} = auth;

  useEffect(() => {
    isEmpty
      ? setRoutesList(
        [
          ...menuRoutes,
          ...authRoutes.filter((item) => item.type === 'nonAuthenticated'),
        ])
      : setRoutesList(
        [
          ...menuRoutes,
          ...authRoutes.filter((item) => item.type === 'authenticated'),
        ])
  }, [isEmpty]);
  return (
    <Menu mode="horizontal" theme="dark">
      {
        routesList.map((route, index)=> (
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
