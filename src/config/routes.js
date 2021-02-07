import React from 'react';
import StockOutlined from '@ant-design/icons/lib/icons/StockOutlined';
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined';
import CarryOutOutlined from '@ant-design/icons/lib/icons/CarryOutOutlined';
import { PATHS, AUTH_TYPES } from '../constants/routeConstants';

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
} = PATHS;

const {
  AUTHENTICATED,
  NON_AUTHENTICATED,
} = AUTH_TYPES;

const routes = {
  menuRoutes: [
    {
      path: SEARCH_FOOD_ROUTE,
      value: 'Search food',
      type: NON_AUTHENTICATED,
    },
    {
      path: EXERCISE_ROUTE,
      value: 'Exercise',
      type: AUTHENTICATED,
    },
    {
      path: MAIN_ROUTE,
      value: 'Main',
      type: NON_AUTHENTICATED,
    },
  ],
  authRoutes: [
    {
      path: SIGN_UP_ROUTE,
      value: 'Sign up',
      type: NON_AUTHENTICATED,
    },
    {
      path: SIGN_IN_ROUTE,
      value: 'Sign In',
      type: NON_AUTHENTICATED,
    },
    {
      path: LOGOUT_ROUTE,
      value: 'Log out',
      type: AUTHENTICATED,
    },
    {
      value: 'accountButton',
      type: AUTHENTICATED,
    },
  ],
  accountMenuRoutes: [
    {
      path: USER_INFO_ROUTE,
      value: 'User info',
      type: AUTHENTICATED,
      icon: <UnorderedListOutlined />,
    },
    {
      path: USER_STATS_ROUTE,
      value: 'User statistics',
      type: AUTHENTICATED,
      icon: <StockOutlined />,
    },
    {
      path: USER_GOAL_ROUTE,
      value: 'Goal',
      type: AUTHENTICATED,
      icon: <CarryOutOutlined />,
    },
  ],
};

export default routes;
