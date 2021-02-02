import React from 'react';
import {
  UserOutlined,
  StockOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const AccountMenuComponent = () => (
  <Menu
    mode="inline"
    theme="light"
  >
    <Menu.Item key="1" icon={<UserOutlined />}>
      Account
    </Menu.Item>
    <Menu.Item key="2" icon={<StockOutlined />}>
      Statistics
    </Menu.Item>
  </Menu>
);

export default AccountMenuComponent;
