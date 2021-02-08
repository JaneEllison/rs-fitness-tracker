import React from 'react';
import { Button, Form, Input } from 'antd';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import signUpComponentLayout from '../../../config/signUpComponentLayout';
import SignInWithGoogleComponent from './SignInWithGoogleComponent';
import { PATHS } from '../../../constants/routeConstants';
import authFormsConfig from '../../../config/authFormsConfig';
import authentificationConstants from '../../../constants/authentificationConstants';
import antdPropConstants from '../../../constants/antdPropConstants';

const { USER_INFO_ROUTE } = PATHS;

const {
  EMAIL,
  PASSWORD,
} = authFormsConfig;

const {
  AUTHENTIFICATION: {
    SIGN_IN_COMPONENT: {
      FORM_NAME,
      BUTTON_TYPE,
      BUTTON_HTML_TYPE,
    },
  },
} = antdPropConstants;

const {
  SIGN_IN: {
    NO_USER_MESSAGE,
  },
} = authentificationConstants;

const SignInComponent = () => {
  const { layout, tailLayout } = signUpComponentLayout;
  const firebase = useFirebase();
  const history = useHistory();

  const authenticateUser = (values) => {
    const { email, password } = values;
    firebase.login(
      {
        email, password,
      },
    ).then(
      history.push(USER_INFO_ROUTE),
    ).catch(() => {
      alert(NO_USER_MESSAGE);
    });
  };

  return (
    <div>
      <Form
        {...layout}
        name={FORM_NAME}
        initialValues={{
          remember: true,
        }}
        onFinish={authenticateUser}
      >
        {[EMAIL, PASSWORD].map(({
          label,
          name,
          rules,
        }, index) => {
          const keyProp = `signUpForm-${index}`;
          return (
            <Form.Item
              key={keyProp}
              label={label}
              name={name}
              rules={rules}
            >
              {name === 'password' ? <Input.Password /> : <Input /> }
            </Form.Item>
          );
        })}
        <Form.Item {...tailLayout}>
          <Button type={BUTTON_TYPE} htmlType={BUTTON_HTML_TYPE}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <SignInWithGoogleComponent />
    </div>
  );
};

export default SignInComponent;
