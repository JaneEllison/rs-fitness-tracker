import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import authSelector from '../../store/Selectors/authSelector';

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(authSelector);
  if (!isLoaded(auth)) return <div>...Loading...</div>;
  return children;
};

export default AuthIsLoaded;
