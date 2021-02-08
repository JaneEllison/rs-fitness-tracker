import React, { useEffect } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { Spin } from 'antd';

const SignOut = () => {
  const firebase = useFirebase();
  const history = useHistory();
  useEffect(() => {
    firebase.logout().then(history.push('/'));
  }, []);

  return (
    <Spin tip="Loading..." />
  );
};

export default SignOut;
