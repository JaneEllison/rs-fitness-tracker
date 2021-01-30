import React from 'react';
import { Dropdown } from 'antd';
import AccountMenuComponent from './DropDownMenu/AccountMenuComponent';
import { UserOutlined } from '@ant-design/icons';

const DropDownMenuComponent = ({}) => {
  return (
    <Dropdown
      overlay={AccountMenuComponent}
      trigger={['click']}
      placement="bottomCenter"
    >
      <a onClick={event => event.preventDefault()}>
        Account <UserOutlined />
      </a>
    </Dropdown>
  );
};

export default DropDownMenuComponent;
