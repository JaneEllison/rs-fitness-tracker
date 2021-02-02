import React from 'react';
import style from './Header.module.css';
import NavMenuComponent from './NavMenu/NavMenuComponent';
import WeatherComponent from './Weather/WeatherComponent';
import AuthMenuComponent from './AccountMenu/AuthMenuComponent';
import { Col, Row } from 'antd';

const HeaderComponent = () => {
  return (
    <header>
      <Row justify="space-between">
        <Col span={11}>
          <NavMenuComponent/>
        </Col>
        <Col
          span={10}
          className={style.authData}
        >
          <AuthMenuComponent/>
        </Col>
        <Col span={3}>
          <WeatherComponent/>
        </Col>
      </Row>
    </header>
  );
};

export default HeaderComponent;
