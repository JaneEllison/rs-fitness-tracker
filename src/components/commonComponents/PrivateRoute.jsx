import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import authSelector from '../../store/Selectors/authSelector';
import { PATHS } from '../../constants/routeConstants';

const {
  SIGN_IN_ROUTE,
} = PATHS;

const PrivateRoute = ({
  children,
  ...remainingProps
}) => {
  const auth = useSelector(authSelector);

  return isLoaded(auth) ? (
    <Route
      {...remainingProps}
      render={({ location }) => {
        const isAuthReady = isLoaded(auth) && !isEmpty(auth);
        return isAuthReady ? children : (
          <Redirect
            to={{
              pathname: SIGN_IN_ROUTE,
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  )
    : null;
};

PrivateRoute.defaultProps = {
  children: null,
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
