/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import WeatherModalComponent from './WeatherModal/WeatherModalComponent';
import weatherApi from '../../../api/makeQueryToShowWeather';
import cityApi from '../../../api/makeQueryToFindCity';
import style from './Weather.module.css';

const { Text } = Typography;

const WeatherComponent = () => {
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherForUser = async () => {
    const ipData = await cityApi.get('', {});
    // const weatherData = false;
    const city = ipData ? ipData.data.city.name_en : 'Minsk';

    const weatherData = await weatherApi.get('', {
      params: {
        q: city,
      },
    });

    if (weatherData && !weatherData.data.error) {
      setWeatherInfo({
        temperature: weatherData.data.main.temp,
        name: weatherData.data.name,
        countryName: weatherData.data.sys.country,
        description: weatherData.data.weather[0].description,
        icon: weatherData.data.weather[0].icon,
        temperatureFeelsLike: weatherData.data.main.feels_like,
        pressure: weatherData.data.main.pressure,
        wind: weatherData.data.wind.speed,
        humidity: weatherData.data.main.humidity,
      });
    } else {
      setWeatherInfo({
        temperature: '-3',
        name: 'Minsk',
        countryName: 'Belarus',
        description: 'Mostly cloudy',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6Eqcl15XoN3eM922kfnx7ftuuENq5kTCrg&usqp=CAU',
        temperatureFeelsLike: '-5',
        wind: '11',
        pressure: '1002 Hpa',
        humidity: '88',
      });
    }
  };

  useEffect(() => {
    getWeatherForUser();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

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
