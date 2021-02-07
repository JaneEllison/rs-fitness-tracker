import React from 'react';
import { Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import AccountMenuComponent from './DropDownMenu/AccountMenuComponent';
import antdPropConstants from '../../../constants/antdPropConstants';
import style from '../Header.module.css';

const {
  HEADER: {
    DROP_DOWN_MENU: {
      TRIGGER,
      PLACEMENT,
      BUTTON_TYPE,
    },
  },
} = antdPropConstants;

const DropDownMenuComponent = () => (
  <Dropdown
    overlay={AccountMenuComponent}
    trigger={[...TRIGGER]}
    placement={PLACEMENT}
  >
    <Button
      className={style.profileButton}
      type={BUTTON_TYPE}
      onClick={(event) => event.preventDefault()}
    >
      Account
      {' '}
      <UserOutlined />
    </Button>
  </Dropdown>
);

export default DropDownMenuComponent;
