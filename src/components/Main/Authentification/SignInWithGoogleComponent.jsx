import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from "react-router-dom";
import {GoogleOutlined} from '@ant-design/icons';

const SignInWithGoogleComponent = () => {

  const firebase = useFirebase();
  const history = useHistory();
  console.log(firebase);
  const signInWithGoogle = () => {
    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
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
