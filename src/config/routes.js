const routes = {
  menuRoutes: [
    {
      path: '/search_food',
      textName: 'Search food',
    },
    {
      path: '/exercise',
      textName: 'Exercise',
    },
    {
      path: '/stats',
      textName: 'Stats',
    },
    {
      path: '/',
      textName: 'Default',
    },
  ],
  authRoutes: [
    {
      path: '/signup',
      textName: 'Sign up',
      type: 'nonAuthenticated'
    },
    {
      path: '/signin',
      textName: 'Sign in',
      type: 'nonAuthenticated'
    },
    {
      path: '/logout',
      textName: 'Log out',
      type: 'authenticated'
    },
    {
      path: '/account',
      textName: 'Account',
      type: 'authenticated'
    },
  ],
};

export default routes;
