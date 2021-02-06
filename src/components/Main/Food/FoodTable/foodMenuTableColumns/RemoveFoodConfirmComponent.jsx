import React from 'react';
import PropTypes from 'prop-types';
import { Popconfirm, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import profileSelector from '../../../../../store/Selectors/profileSelector';
import removeFoodFromMenu from './removeFoodFromMenu';

const RemoveFoodConfirmComponent = ({ tableRecord: { key } }) => {
  const profile = useSelector(profileSelector);
  const firebase = useFirebase();

  return (
    <Popconfirm
      title="Sure to remove food from menu?"
      onConfirm={() => {
        removeFoodFromMenu(key, profile, firebase);
      }}
    >
      <Button>Remove</Button>
    </Popconfirm>
  );
};

RemoveFoodConfirmComponent.propTypes = {
  tableRecord: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default RemoveFoodConfirmComponent;
