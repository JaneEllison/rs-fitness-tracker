import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import authSelector from '../../store/Selectors/authSelector';

const PrivateRoute = ({ children, ...remainingProps }) => {
  const auth = useSelector(authSelector);

  return isLoaded(auth) ? (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  )
    : null
};

export default PrivateRoute;
