import React from 'react';
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

const SignInWithGoogleComponent = () => {
  useFirestoreConnect(['physicsChars']);
  const firebase = useFirebase();
  const history = useHistory();

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: 'google',
        type: 'popup',
      }).then(() => {
        history.push('/account');
      });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Button
        onClick={(event) => {
          event.preventDefault();
          signInWithGoogle();
        }}
      >
        Sign In with Google
        {' '}
        <GoogleOutlined />
      </Button>
    </div>
  );
};

export default SignInWithGoogleComponent;
