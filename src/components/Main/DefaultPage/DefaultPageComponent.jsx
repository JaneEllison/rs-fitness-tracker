import React from 'react';
import { Col } from 'antd';
import CarouselComponent from './Carousel/CarouselComponent';
import FirstTitleComponent from './FirstTitle/FirstTitleComponent';
import SecondTitleComponent from './SecondTitle/SecondTitleComponent';
import ThirdTitleComponent from './ThirdTitle/ThirdTitleComponent';

const DefaultPageComponent = () => (
  <Col>
    <FirstTitleComponent />
    <CarouselComponent />
    <SecondTitleComponent />
    <ThirdTitleComponent />
  </Col>
);

export default DefaultPageComponent;
