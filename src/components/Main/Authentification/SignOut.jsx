import React, { useEffect } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../../constants/routeConstants';

const { MAIN_ROUTE } = PATHS;

const SignOut = () => {
  const firebase = useFirebase();
  const history = useHistory();
  useEffect(() => {
    firebase.logout().then(history.push(MAIN_ROUTE));
  }, []);

  return (
    <div />
  );
};

export default SignOut;
