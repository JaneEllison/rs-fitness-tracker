import { Form, Input, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import signUpComponentLayout from '../../../config/signUpComponentLayout';
import SignInWithGoogleComponent from './SignInWithGoogleComponent';
import AuthErrorModalComponent from '../Account/AuthErrorModal/AuthErrorModalComponent';
import authErrorSelector from '../../../store/Selectors/authErrorSelector';

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
        history.push('/account');
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
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={createUser}
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="displayName"
          rules={[
            {
              required: true,
              message: 'Please enter your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <SignInWithGoogleComponent />
    </div>
  );
};

export default SignUpComponent;
