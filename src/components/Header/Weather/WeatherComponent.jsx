import React, { useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import weatherApi from '../../../api/makeQueryToShowWeather';
import cityApi from '../../../api/makeQueryToFindCity';
import style from './Weather.module.css';
const { Title, Text } = Typography;

const WeatherComponent = () => {
  const [cityInfo, setCityInfo] = useState({});

  const getWeatherForUser = async () => {
    const responseIp = await cityApi.get('', {});

    let city = responseIp.data.city.name_en;

    const response = await weatherApi.get('', {
      params: {
        query: city,
      },
    });

    setCityInfo({
      cityTemperature: response.data.current.temperature,
      cityName: city,
      cityDiscr: response.data.current.weather_descriptions[0],
      cityIcon: response.data.current.weather_icons[0],
    });
  };

  // useEffect(() => {
  //   getWeatherForUser();
  // }, []);

  return (
    <Row
      align="middle"
      className={style.weatherContainer}>
      <Col>
        <img 
          src={cityInfo.cityIcon}
          className={style.weatherIcon}
          alt="weather-icon"
        />
      </Col>
      <Col>
        <Row justify="center">
            <Text className={style.weatherTitle}>
              {/* {cityInfo.cityName} */}
              Minsk
            </Text>
            <Text className={style.weatherTitle}>
              {/* {cityInfo.cityTemperature} */}
              12 C
            </Text>
        </Row>
        <Row className={style.weatherSubtitle}>
          {/* {cityInfo.cityDiscr} */}
          Mostly Rain, without snow
        </Row>
      </Col>
    </Row>
  )
}

export default WeatherComponent;