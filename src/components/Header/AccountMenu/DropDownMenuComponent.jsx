import React from 'react';
import { Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import AccountMenuComponent from './DropDownMenu/AccountMenuComponent';

const DropDownMenuComponent = () => (
  <Dropdown
    overlay={AccountMenuComponent}
    trigger={['click']}
    placement="bottomCenter"
  >
    <Button onClick={(event) => event.preventDefault()}>
      Account
      {' '}
      <UserOutlined />
    </Button>
  </Dropdown>
);

export default DropDownMenuComponent;
