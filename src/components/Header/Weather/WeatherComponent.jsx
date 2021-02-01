import React, { useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import WeatherModalComponent from './WeatherModal/WeatherModalComponent'
import weatherApi from '../../../api/makeQueryToShowWeather';
import cityApi from '../../../api/makeQueryToFindCity';
import style from './Weather.module.css';
const { Text } = Typography;

const WeatherComponent = () => {
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherForUser = async () => {
    const ipData = await cityApi.get('', {});

    let city;
    let weatherData;

    (ipData)
    ? city = ipData.data.city.name_en
    : city = 'Minsk'
    
    //у апи есть ограничение на запросы, поэтому пока так

    // weatherData = await weatherApi.get('', {
    //   params: {
    //     query: city,
    //   },
    // });

    if (weatherData) {
      setWeatherInfo({
        temperature: weatherData.data.current.temperature,
        name: city,
        countryName: ipData.data.country.name_en,
        discription: weatherData.data.current.weather_descriptions[0],
        icon: weatherData.data.current.weather_icons[0],
        temperatureFeelsLike: weatherData.data.current.feelslike, 
        wind: weatherData.data.current.wind_speed,
        precip: weatherData.data.current.precip,
        humidity: weatherData.data.current.humidity,
      });
    } else {
      setWeatherInfo({
        temperature: '-3',
        name: 'Minsk',
        countryName: "Belarus",
        discription: 'Mostly cloudy',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6Eqcl15XoN3eM922kfnx7ftuuENq5kTCrg&usqp=CAU',
        temperatureFeelsLike: '-5', 
        wind: '11',
        precip: '3',
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

  return (
    <Row
      align="middle"
      className={style.weatherContainer}
    >
      <WeatherModalComponent 
        weatherInfo={weatherInfo}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <Col 
        onClick={showModal}
        style={{ cursor:"pointer" }}
      >
        <img 
          src={weatherInfo.icon}
          className={style.weatherIcon}
          alt="weather-icon"
        />
      </Col>
      <Col 
        onClick={showModal}
        style={{ cursor:"pointer" }}
      >
        <Row justify="center">
            <Text className={style.weatherTitle}>
              {weatherInfo.countryName}
            </Text>
            <Text className={style.weatherTitle}>
              {`${weatherInfo.temperature} °C`}
            </Text>
        </Row>
        <Row className={style.weatherSubtitle}>
          {weatherInfo.discription}
        </Row>
      </Col>
    </Row>
  )
}

export default WeatherComponent;