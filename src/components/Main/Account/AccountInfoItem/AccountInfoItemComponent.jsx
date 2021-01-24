import React, {useState} from 'react';
import { Button, Input } from 'antd';
import { useFirebase } from 'react-redux-firebase';
import {EditOutlined} from '@ant-design/icons';

const AccountInfoItemComponent = ({info, paramName, updateCallBack}) => {

  const [newData, changeNewData] = useState(info);
  const [inputOpen, toggleInputOpen] = useState(false);
  const firebase = useFirebase();
  const changeData = (event) => {
    updateCallBack(paramName, event.target.value, firebase);
    toggleInputOpen(!inputOpen);
  };

  return (
    <div>
      {
        inputOpen
        ? <Input
            defaultValue={newData}
            onChange={(event)=>changeNewData(event.target.value)}
            onPressEnter={changeData}
            onBlur={changeData}
          />
        :
          <span>
            {info}
            <Button onClick={()=>toggleInputOpen(!inputOpen)} >
              <EditOutlined />
            </Button>
          </span>
      }
    </div>
  );
};

export default AccountInfoItemComponent;
