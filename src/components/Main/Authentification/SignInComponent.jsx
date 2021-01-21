import React from 'react';
import { Button, Form, Input } from 'antd';
import signUpComponentLayout from '../../../config/signUpComponentLayout';
import { useFirebase } from 'react-redux-firebase';
import {useHistory} from 'react-router-dom';
import SignInWithGoogleComponent from './SignInWithGoogleComponent';

const SignInComponent = () => {
  const {layout, tailLayout} = signUpComponentLayout;
  const firebase = useFirebase();
  const history = useHistory();

  const onFinish = (values) => {
    const {email, password} = values;
    firebase.login(
      {
        email, password
      }).then(
        history.push('/account')
    ).catch(() => {
      alert('There is no user with such credentials');
    })
  };

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
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

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <SignInWithGoogleComponent/>
    </div>

  );
};

export default SignInComponent;
