import React, { useEffect } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const SignOut = () => {
  const firebase = useFirebase();
  const history = useHistory();
  useEffect(() => {
    firebase.logout().then(history.push('/'));
  }, []);

  return (
    <div />
  );
};

export default SignOut;
