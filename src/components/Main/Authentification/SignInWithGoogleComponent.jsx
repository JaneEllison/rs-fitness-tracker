import React from 'react';
import { useFirebase, useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { useHistory } from "react-router-dom";
import {GoogleOutlined} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import authSelector from '../../../store/Selectors/authSelector';

const SignInWithGoogleComponent = () => {
  useFirestoreConnect(['physicsChars']);
  const firebase = useFirebase();
  const history = useHistory();
  const firestore = useFirestore();

  const {uid} = useSelector(authSelector);

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: "google",
        type: "popup",
      }).then(() => {
        history.push("/account");
      });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button
        onClick={(event) => {
          event.preventDefault();
          signInWithGoogle();
        }}
      >
        Sign In with Google <GoogleOutlined />
      </button>
    </div>
  )
};

export default SignInWithGoogleComponent;
