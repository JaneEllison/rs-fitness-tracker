import React from 'react';
import {
  Row, Col, Typography, Button, Carousel,
} from 'antd';
import defaultBg from '../../../assets/defaultBg3.png';
import slide1 from '../../../assets/slides/1.png';
import slide2 from '../../../assets/slides/2.png';
import slide3 from '../../../assets/slides/3.png';
import slide4 from '../../../assets/slides/4.png';
import slide5 from '../../../assets/slides/5.png';
import slide6 from '../../../assets/slides/6.png';
import slide7 from '../../../assets/slides/7.png';

const { Title } = Typography;
const DefaultPageComponent = () => {
  const contentStyle = {
    // height: '300px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '30px',
  };

  return (
    <Col>
      <Carousel autoplay effect="fade">
        <div>
          <div style={contentStyle}>
            <img
              src={slide1}
              alt="fitness"
              width="45%"
              // height="200px"
            />
            <img
              src={slide2}
              alt="fitness"
              width="45%"
              // height="200px"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src={slide3}
              alt="fitness"
              width="45%"
              // height="200px"
            />
            <img
              src={slide4}
              alt="fitness"
              width="45%"
              // height="200px"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src={slide5}
              alt="fitness"
              width="45%"
              // height="200px"
            />
            <img
              src={slide6}
              alt="fitness"
              width="45%"
              // height="200px"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src={slide7}
              alt="fitness"
              width="45%"
              // height="200px"
            />
            <img
              src={slide7}
              alt="fitness"
              width="45%"
              // height="200px"
            />
          </div>
        </div>
      </Carousel>
      <Row align="middle" justify="space-around">
        <Col span={10}>
          <Row>
            <Title level={5}>
              Our application is a basic fitness tracker in wich you can compose your diet for the
              whole day, set goals for weight loss, create a workout schedule for the week and keep
              statistics of your progress.
            </Title>
          </Row>
          <Button
            type="primary"
            size="large"
          >
            <a href="/signup">Get started</a>
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
            <Title level={5} style={{ textAlign: 'right' }}>
              Our app is an all-in-one solution for both fitness and dieting. It has a variety of
              tracking tools for both your nutrition, weigth and whatever kind of exercise you
              enjoy.
            </Title>
            <Button
              type="primary"
              size="large"
            >
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/embed/ah6fmNEtXFI">Watch wideo</a>
            </Button>
          </Row>
        </Col>
      </Row>
      <Row align="middle" justify="space-around">
        <Col span={10}>
          <Row>
            <Title level={5}>
              App includes some unique tools like a timer, stopwatch, also you can seach
              and watch exersise from YouTube. Version without sign-in doesnt come with
              some features. Sign in and get all function of app.
            </Title>
          </Row>
          <Button
            type="primary"
            size="large"
          >
            <a href="/signin">Sign in</a>
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
    </Col>
  );
};

export default DefaultPageComponent;
