import React from 'react';
import { Col, Row } from 'antd';
import style from './Header.module.css';
import NavMenuComponent from './NavMenu/NavMenuComponent';
import WeatherComponent from './Weather/WeatherComponent';
import AuthMenuComponent from './AccountMenu/AuthMenuComponent';

const HeaderComponent = () => (
  <header>
    <Row justify="space-between">
      <Col
        span={11}
      >
        <NavMenuComponent />
      </Col>
      <Col
        xs={3}
        sm={5}
        md={6}
        lg={8}
        xl={9}
        xxl={10}
        className={style.authData}
      >
        <AuthMenuComponent />
      </Col>
      <Col
        xs={10}
        sm={8}
        md={7}
        lg={5}
        xl={4}
        xxl={3}
      >
        <WeatherComponent />
      </Col>
    </Row>
  </header>
);

export default HeaderComponent;
