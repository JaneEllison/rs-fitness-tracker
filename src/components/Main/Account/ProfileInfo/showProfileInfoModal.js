import React from 'react';
import { Modal } from 'antd';
import { updateAuthData } from '../updateProfileData';

const NEW_KEYS = {
  displayName: 'New username',
  email: 'New email',
};

function showProfileInfoModal(obj, firebase) {
  return Modal.confirm({
    title: 'Confirm login data change',
    content: (
      <div>
        {
          Object.entries(obj).map(([key, value]) => (
            <p>{`${NEW_KEYS[key]}: ${value}`}</p>
          ))
        }
      </div>
    ),
    onOk: () => { updateAuthData(obj, firebase); },
  });
}

export default showProfileInfoModal;
