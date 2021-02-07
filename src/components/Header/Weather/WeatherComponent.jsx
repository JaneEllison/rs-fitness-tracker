import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import WeatherModalComponent from './WeatherModal/WeatherModalComponent';
import makeQueryToFindCityId from '../../../api/makeQueryToFindCityId';
import makeQueryToFindWeather from '../../../api/makeQueryToFindWeather';
import style from './Weather.module.css';
import WeatherSummaryComponent from './WeatherSummary/WeatherSummaryComponent';

const WeatherComponent = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => { setIsModalVisible(true); };

  const getWeatherForUser = async () => {
    const id = await makeQueryToFindCityId();
    const weatherData = await makeQueryToFindWeather(id);
    setWeatherInfo(weatherData);
  };

  useEffect(() => {
    getWeatherForUser();
  }, []);

  return weatherInfo === null
    ? <Spin />
    : (
      <div className={style.weatherContainer}>
        <WeatherModalComponent
          weatherInfo={weatherInfo}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
        <WeatherSummaryComponent
          onClick={showModal}
          data={weatherInfo}
        />
      </div>
    );
};

export default WeatherComponent;
