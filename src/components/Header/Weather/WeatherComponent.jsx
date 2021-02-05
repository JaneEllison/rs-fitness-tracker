import React, { useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import WeatherModalComponent from './WeatherModal/WeatherModalComponent';
import makeQueryToFindCityId from '../../../api/makeQueryToFindCityId';
import makeQueryToFindWeather from '../../../api/makeQueryToFindWeather';
import style from './Weather.module.css';

const { Text } = Typography;

const WeatherComponent = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const getWeatherForUser = async () => {
    const id = await makeQueryToFindCityId();
    const weatherData = await makeQueryToFindWeather(id);
    setWeatherInfo(weatherData);
  };

  useEffect(() => {
    getWeatherForUser();
  }, []);

  if (Object.keys(weatherInfo).length > 0) {
    return (
      <Row
        className={style.weatherContainer}
      >
        <WeatherModalComponent
          weatherInfo={weatherInfo}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
        <Col
          onClick={showModal}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
            className={style.weatherIcon}
            alt="weather-icon"
          />
        </Col>
        <Col
          onClick={showModal}
          style={{ cursor: 'pointer' }}
          className={style.content}
        >
          <Row justify="center">
            <Text className={style.weatherTitle}>
              {weatherInfo.name}
            </Text>
            <Text className={style.weatherTitle}>
              {`${weatherInfo.temperature} °C`}
            </Text>
          </Row>
          <Row className={style.weatherSubtitle}>
            {weatherInfo.description}
          </Row>
        </Col>
      </Row>
    );
  }
  return <div />;
};

export default WeatherComponent;
