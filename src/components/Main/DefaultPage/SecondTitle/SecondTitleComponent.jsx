import React from 'react';
import {
  Row, Col, Typography, Button,
} from 'antd';
import style from '../style.module.css';

const { Title } = Typography;

const SecondTitleComponent = () => (
  <Row
    align="middle"
    justify="space-around"
    className={style.wrapper}
  >
    <Col md={{ span: 10 }} xs={{ span: 17 }}>
      <iframe
        title="How it works"
        width="100%"
        height="380"
        src="https://www.youtube.com/embed/MO10KOoQx5E"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={style.videoPlayer}
      />
    </Col>
    <Col md={{ span: 10 }} xs={{ span: 17 }}>
      <Row justify="end" className={style.defaultPageButton}>
        <Title
          level={5}
          className={[style.defaultPageText, style.defaultPageTextRight]}
        >
          Our app is an all-in-one solution for both fitness and dieting. It has a variety of
          tracking tools for both your nutrition, weigth and whatever kind of exercise you
          enjoy.
        </Title>
        <Button
          type="primary"
          size="large"
        >
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/embed/MO10KOoQx5E">Watch wideo</a>
        </Button>
      </Row>
    </Col>
  </Row>
);

export default SecondTitleComponent;
