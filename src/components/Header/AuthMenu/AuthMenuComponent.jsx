import React, {useEffect, useState} from 'react';
import routes from '../../../config/routes';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelector from '../../../store/Selectors/authSelector';

const AuthMenuComponent = () => {
  const { authRoutes } = routes;
  const [menuRoutes, setMenuRoutes] = useState(authRoutes);
  const auth = useSelector(authSelector);

  const {isEmpty, isLoaded} = auth;

  useEffect(() => {
    isEmpty
      ? setMenuRoutes(authRoutes.filter((item) => item.type === 'nonAuthenticated'))
      : setMenuRoutes(authRoutes.filter((item) => item.type === 'authenticated'))
  }, [isEmpty]);

  return (
    <Menu mode="horizontal" theme="dark">
      {
        menuRoutes.map((route, index)=> (
          <Menu.Item key={`${index}`}>
            <NavLink to={route.path}>
              {route.textName}
            </NavLink>
          </Menu.Item>
        ))
      }
    </Menu>
  );
};

export default AuthMenuComponent;
