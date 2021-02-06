import React from 'react';
import StockOutlined from '@ant-design/icons/lib/icons/StockOutlined';
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined';
import CarryOutOutlined from '@ant-design/icons/lib/icons/CarryOutOutlined';
import routePaths from '../constants/routePaths';

const {
  SEARCH_FOOD_ROUTE,
  EXERCISE_ROUTE,
  MAIN_ROUTE,
  SIGN_UP_ROUTE,
  SIGN_IN_ROUTE,
  LOGOUT_ROUTE,
  USER_INFO_ROUTE,
  USER_STATS_ROUTE,
  USER_GOAL_ROUTE,
} = routePaths;

const routes = {
  menuRoutes: [
    {
      path: SEARCH_FOOD_ROUTE,
      value: 'Search food',
      type: 'nonAuthenticated',
    },
    {
      path: EXERCISE_ROUTE,
      value: 'Exercise',
      type: 'authenticated',
    },
    {
      path: MAIN_ROUTE,
      value: 'Main',
      type: 'nonAuthenticated',
    },
  ],
  authRoutes: [
    {
      path: SIGN_UP_ROUTE,
      value: 'Sign up',
      type: 'nonAuthenticated',
    },
    {
      path: SIGN_IN_ROUTE,
      value: 'Sign In',
      type: 'nonAuthenticated',
    },
    {
      path: LOGOUT_ROUTE,
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
      path: USER_INFO_ROUTE,
      value: 'User info',
      type: 'authenticated',
      icon: <UnorderedListOutlined />,
    },
    {
      path: USER_STATS_ROUTE,
      value: 'User statistics',
      type: 'authenticated',
      icon: <StockOutlined />,
    },
    {
      path: USER_GOAL_ROUTE,
      value: 'Goal',
      type: 'authenticated',
      icon: <CarryOutOutlined />,
    },
  ],
};

export default routes;
