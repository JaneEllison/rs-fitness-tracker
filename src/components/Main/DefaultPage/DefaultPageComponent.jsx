import React from 'react';
import {
  Row, Col, Typography, Button, Carousel,
} from 'antd';
import defaultBg from '../../../assets/defaultBg3.png';

const { Title } = Typography;
const DefaultPageComponent = () => {
  const contentStyle = {
    height: '400px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      <Row align="middle" justify="space-around">
        <Col span={10}>
          <Row>
            <Title level={4}>
              Our application is a basic fitness tracker in wich you can compose your diet for the
              whole day, set goals for weight loss, create a workout schedule for the week and keep
              statistics of your progress.
            </Title>
          </Row>
          <Button type="primary">
            <a href="/signin">Get started</a>
          </Button>
        </Col>
        <Col span={10}>
          <img
            src={defaultBg}
            alt="fitness"
            width="100%"
          />
        </Col>
      </Row>
      <Row align="middle" justify="space-around">
        <Col span={10}>
          <iframe
            title="How it works"
            width="100%"
            height="380"
            src="https://www.youtube.com/embed/ah6fmNEtXFI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Col>
        <Col span={10}>
          <Row justify="end">
            <Title level={4} style={{ textAlign: 'right' }}>
              Our app is an all-in-one solution for both fitness and dieting. It has a variety of
              tracking tools for both your nutrition, weigth and whatever kind of exercise you
              enjoy.
            </Title>
            <Button type="primary">
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/embed/ah6fmNEtXFI">Watch wideo</a>
            </Button>
          </Row>
        </Col>
      </Row>
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <img
              src={defaultBg}
              alt="fitness"
              height="400px"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src={defaultBg}
              alt="fitness"
              height="400px"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src={defaultBg}
              alt="fitness"
              height="400px"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src={defaultBg}
              alt="fitness"
              height="400px"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default DefaultPageComponent;
