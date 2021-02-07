import React from 'react';
import {
  UserOutlined,
  StockOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import antdPropConstants from '../../../../constants/antdPropConstants';
import accountComponentConstants from '../../../../constants/accountComponentConstants';

const {
  ACCOUNT_COMPONENT: {
    MENU: {
      MODE,
      THEME,
    },
  },
} = antdPropConstants;

const {
  MENU: {
    ITEM_ACCOUNT_TEXT,
    ITEM_ACCOUNT_KEY,
    ITEM_STATS_TEXT,
    ITEM_STATS_KEY,
  },
} = accountComponentConstants;

const AccountMenuComponent = () => (
  <Menu
    mode={MODE}
    theme={THEME}
  >
    <Menu.Item key={ITEM_ACCOUNT_KEY} icon={<UserOutlined />}>
      {ITEM_ACCOUNT_TEXT}
    </Menu.Item>
    <Menu.Item key={ITEM_STATS_KEY} icon={<StockOutlined />}>
      {ITEM_STATS_TEXT}
    </Menu.Item>
  </Menu>
);

export default AccountMenuComponent;
