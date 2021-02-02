import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import authSelector from '../../store/Selectors/authSelector';

const PrivateRoute = ({ children, ...remainingProps }) => {
  const auth = useSelector(authSelector);
  console.log(isLoaded(auth), isEmpty(auth));
  return isLoaded(auth) ? (
    <Route
      {...remainingProps}
      render={({ location }) =>
        !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
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
