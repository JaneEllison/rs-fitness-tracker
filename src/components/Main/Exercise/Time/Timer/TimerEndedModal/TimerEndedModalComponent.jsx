import {  Modal  } from 'antd';

const TimerEndedModalComponent = ({ handleCancel, isModalVisible, handleOk }) => {
  return(
    <Modal 
      title="Well done!" 
      visible={isModalVisible}
      onOk={handleOk} 
      onCancel={handleCancel}
      centered={true}
      okText={'Start new Timer with previous value'}
      cancelText={'Set new Timer'}
    >
      <img 
        src="./timer-popup-img.svg" 
        width="300px"
        alt="img"
      />
      <p>Time is up!</p>
    </Modal>
  )
}

export default TimerEndedModalComponent;