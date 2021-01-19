import React, {useState} from 'react';
import { Button, Descriptions, Input } from 'antd';
import { useFirebase } from 'react-redux-firebase';
import {EditOutlined} from '@ant-design/icons';

const AccountInfoItemComponent = ({label, info, paramName}) => {
  const [inputOpen, toggleInputOpen] = useState(false);
  const firebase = useFirebase();

  const changeData = (value) => {
    firebase.push('users', {[paramName]: value});
  };
  return (
    <Descriptions.Item label={label}>
      {
        toggleInputOpen
        ? <Input  />
        : <Button onClick={changeData}>
            {info}
            <EditOutlined onClick={toggleInputOpen} />
          </Button>
      }


    </Descriptions.Item>
  );
};

export default AccountInfoItemComponent;
