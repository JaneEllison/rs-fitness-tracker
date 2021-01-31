import React from 'react';
import { Popconfirm } from 'antd';
import { useSelector } from 'react-redux';
import profileSelector from '../../../../../store/Selectors/profileSelector';
import removeFoodFromMenu from './removeFoodFromMenu';
import { useFirebase } from 'react-redux-firebase';

const RemoveFoodConfirmComponent = ({tableRecord}) => {
  const profile = useSelector(profileSelector);

  const { key } = tableRecord;
  const firebase = useFirebase();
  return (
    <Popconfirm
      title="Sure to remove food from menu?"
      onConfirm={() => {
        removeFoodFromMenu(key, profile, firebase);
      }}
    >
      <a>Remove</a>
    </Popconfirm>
  )
};

export default RemoveFoodConfirmComponent;
