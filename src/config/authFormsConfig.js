const authFormsConfig = {
  EMAIL: {
    label: 'E-mail',
    name: 'email',
    rules: [
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
      },
      {
        required: true,
        message: 'Please input your password!',
      },
    ],
  },

  USERNAME: {
    label: 'Username',
    name: 'displayName',
    rules: [
      {
        required: true,
        message: 'Please enter your username!',
      },
    ],
  },

  PASSWORD: {
    label: 'Password',
    name: 'password',
    rules: [
      {
        required: true,
        message: 'Please input your password!',
      },
    ],
  },

  CONFIRM_PASSWORD: {
    name: 'confirm',
    label: 'Confirm Password',
    dependencies: ['password'],
    rules: [
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
    ],
  },
};

export default authFormsConfig;
