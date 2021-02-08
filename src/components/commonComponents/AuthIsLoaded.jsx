import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { Spin } from 'antd';
import authSelector from '../../store/Selectors/authSelector';

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(authSelector);
  if (!isLoaded(auth)) return <Spin tip="Loading...">{children}</Spin>;
  return children;
};

export default AuthIsLoaded;
