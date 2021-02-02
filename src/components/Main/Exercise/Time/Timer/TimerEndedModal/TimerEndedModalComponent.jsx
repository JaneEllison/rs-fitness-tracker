/* eslint-disable react/prop-types */
import React from 'react';
import { Modal } from 'antd';

const TimerEndedModalComponent = ({ handleCancel, isModalVisible, handleOk }) => (
  <Modal
    title="Well done!"
    visible={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
    centered
    okText="Start new Timer with previous value"
    cancelText="Set new Timer"
    bodyStyle={{
      fontSize: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <img
      src="./timer-popup-img.svg"
      width="300px"
      alt="img"
    />
    <p>Time is up!</p>
  </Modal>
);

export default TimerEndedModalComponent;
