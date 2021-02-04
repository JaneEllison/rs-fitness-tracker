import React from 'react';
import {
  Row, Col, Typography, Button,
} from 'antd';
import style from '../style.module.css';
import defaultBg2 from '../../../../assets/defaultBg2.png';

const { Title } = Typography;

const ThirdTitleComponent = () => (
  <Row
    align="middle"
    justify="space-around"
    className={style.wrapper}
  >
    <Col md={{ span: 10, order: 0 }} xs={{ span: 17, order: 1 }}>
      <Row className={style.defaultPageButton}>
        <Title level={5} className={style.defaultPageText}>
          App includes some unique tools like a calorie calculator, timer, stopwatch,
          also you can seach and watch exersise from YouTube. Version without sign-in
          doesnt come with some features. Sign in and get all function of app.
        </Title>
        <Button
          type="primary"
          size="large"
        >
          <a href="/signin">Sign in</a>
        </Button>
      </Row>
    </Col>
    <Col md={{ span: 10, order: 1 }} xs={{ span: 17, order: 0 }}>
      <img
        src={defaultBg2}
        alt="fitness"
        width="100%"
      />
    </Col>
  </Row>
);

export default ThirdTitleComponent;
