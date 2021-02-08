import React from 'react';
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { PATHS } from '../../../constants/routeConstants';
import authentificationConstants from '../../../constants/authentificationConstants';
import style from './googleSignIn.module.css';

const { USER_INFO_ROUTE } = PATHS;

const {
  GOOGLE_SIGN_IN: {
    PROVIDER,
    TYPE,
    FIRESTORE_CONNECT,
    HEADING_TEXT,
    BUTTON_TEXT,
  },
} = authentificationConstants;

const SignInWithGoogleComponent = () => {
  useFirestoreConnect([...FIRESTORE_CONNECT]);
  const firebase = useFirebase();
  const history = useHistory();

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: PROVIDER,
        type: TYPE,
      }).then(() => {
        history.push(USER_INFO_ROUTE);
      });
  };

  return (
    <div className={style.googleSignIn}>
      <h1>{HEADING_TEXT}</h1>
      <Button
        onClick={(event) => {
          event.preventDefault();
          signInWithGoogle();
        }}
      >
        {BUTTON_TEXT}
        {' '}
        <GoogleOutlined />
      </Button>
    </div>
  );
};

export default SignInWithGoogleComponent;
