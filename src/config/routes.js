import React from 'react';
import StockOutlined from '@ant-design/icons/lib/icons/StockOutlined';
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined';

const routes = {
  menuRoutes: [
    {
      path: '/search_food',
      value: 'Search food',
    },
    {
      path: '/exercise',
      value: 'Exercise',
    },
    {
      path: '/',
      value: 'Default',
    },
    {
      path: '/goal',
      value: 'Goal',
    },
  ],
  authRoutes: [
    {
      path: '/signup',
      value: 'Sign up',
      type: 'nonAuthenticated',
    },
    {
      path: '/signin',
      value: 'Sign In',
      type: 'nonAuthenticated',
    },
    {
      path: '/logout',
      value: 'Log out',
      type: 'authenticated',
    },
    {
      value: 'accountButton',
      type: 'authenticated',
    },
  ],
  accountMenuRoutes: [
    {
      path: '/account',
      value: 'User info',
      type: 'authenticated',
      icon: <UnorderedListOutlined />,
    },
    {
      path: '/stats',
      value: 'User statistics',
      type: 'authenticated',
      icon: <StockOutlined />,
    },
  ],
};

export default routes;
