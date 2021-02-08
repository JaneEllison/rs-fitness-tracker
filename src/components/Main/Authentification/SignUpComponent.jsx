import { Form, Input, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import signUpComponentLayout from '../../../config/signUpComponentLayout';
import SignInWithGoogleComponent from './SignInWithGoogleComponent';
import AuthErrorModalComponent from './AuthErrorModal/AuthErrorModalComponent';
import authErrorSelector from '../../../store/Selectors/authErrorSelector';
import { PATHS } from '../../../constants/routeConstants';
import authFormsConfig from '../../../config/authFormsConfig';
import antdPropConstants from '../../../constants/antdPropConstants';

const { USER_INFO_ROUTE } = PATHS;

const {
  AUTHENTIFICATION: {
    SIGN_IN_COMPONENT: {
      FORM_NAME,
      BUTTON_TYPE,
      BUTTON_HTML_TYPE,
    },
  },
} = antdPropConstants;

const SignUpComponent = () => {
  const [modalErrorMessage, setModalErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const authError = useSelector(authErrorSelector);
  const firebase = useFirebase();
  const history = useHistory();
  const { layout, tailLayout } = signUpComponentLayout;

  useEffect(() => {
    if (authError) {
      setModalErrorMessage(authError.message);
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [authError]);

  const createUser = (values) => {
    const { email, password, displayName } = values;
    firebase.createUser(
      {
        email, password,
      },
      {
        displayName, email, avatarUrl: '',
      },
    )
      .then(() => {
        history.push(USER_INFO_ROUTE);
      });
  };

  return (
    <div>
      <AuthErrorModalComponent
        errorMessage={modalErrorMessage}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Form
        {...layout}
        name={FORM_NAME}
        initialValues={{
          remember: true,
        }}
        onFinish={createUser}
      >
        {Object.values(authFormsConfig).map((obj, index) => {
          const keyProp = `signUpForm-${index}`;

          const {
            name,
            label,
            dependencies,
            rules,
          } = obj;

          if (obj.name !== 'confirm') {
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
          }

          return (
            <Form.Item
              key={keyProp}
              label={label}
              name={name}
              dependencies={[...dependencies]}
              rules={rules}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          );
        })}
        <Form.Item {...tailLayout}>
          <Button type={BUTTON_TYPE} htmlType={BUTTON_HTML_TYPE}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <SignInWithGoogleComponent />
    </div>
  );
};

export default SignUpComponent;
