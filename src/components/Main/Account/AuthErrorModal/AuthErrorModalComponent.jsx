import React, {useState} from 'react';
import { Modal } from 'antd';

const AuthErrorModalComponent = ({errorMessage, modalVisible, setModalVisible}) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
  console.log(errorMessage);
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

export default AuthErrorModalComponent;
