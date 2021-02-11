import React from 'react';
import {
  Row, Col, Typography, Button,
} from 'antd';
import style from '../style.module.css';
import defaultBg from '../../../../assets/defaultBg.png';

const { Title } = Typography;

const FirstTitleComponent = () => (
  <Row
    align="middle"
    justify="space-around"
    className={style.wrapper}
  >
    <Col md={{ span: 10, order: 0 }} xs={{ span: 17, order: 1 }}>
      <Row className={style.defaultPageButton}>
        <Title level={5} className={style.defaultPageText}>
          Our application is a basic fitness tracker in which you can compose your diet for the
          whole day, set goals for weight loss, create a workout schedule for the week and keep
          statistics of your progress.
        </Title>
        <Button
          type="primary"
          size="large"
        >
          <a href="/signup">Get started</a>
        </Button>
      </Row>
    </Col>
    <Col md={{ span: 10, order: 1 }} xs={{ span: 17, order: 0 }}>
      <img
        src={defaultBg}
        alt="fitness"
        width="100%"
      />
    </Col>
  </Row>
);

export default FirstTitleComponent;
