import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const AuthErrorModalComponent = ({ errorMessage, modalVisible, setModalVisible }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const cancelModal = () => {
    setModalVisible(false);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModalVisible(false);
      setConfirmLoading(false);
    }, 1000);
  };

  return (
    <Modal
      title="Title"
      visible={modalVisible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={cancelModal}
    >
      <p>{errorMessage}</p>
    </Modal>
  );
};

AuthErrorModalComponent.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};

export default AuthErrorModalComponent;
