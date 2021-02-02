/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Row,
  Col,
  Typography,
  Modal,
} from 'antd';
import PropTypes from 'prop-types';
import style from '../Weather.module.css';

const { Title } = Typography;

const WeatherModalComponent = ({
  weatherInfo: {
    name,
    countryName,
    icon,
    temperature,
    description,
    temperatureFeelsLike,
    wind,
    precip,
    humidity,
  },
  setIsModalVisible,
  isModalVisible,
}) => {
  const handleOk = () => { setIsModalVisible(false); };
  const handleCancel = () => { setIsModalVisible(false); };

  return (
    <Modal
      className={style.weatherModal}
      title={`${name}, ${countryName}`}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      footer={null}
    >
      <Row gutter={15} align="middle" justify="space-around">
        <Col sm={{ span: 12 }} xs={{ span: 17 }}>
          <img
            src={icon}
            alt="weather-icon"
            className={style.weatherModalImg}
          />
        </Col>
        <Col sm={{ span: 12 }} xs={{ span: 17 }}>
          <Row justify="center">
            <Title
              level={1}
              style={{ marginBottom: '3px' }}
            >
              {`${temperature} °C`}
            </Title>
          </Row>
          <Row justify="center">
            <p className={style.weatherModalSubtitle}>
              {description}
            </p>
          </Row>
          <Row justify="center">
            <p>Feels like:</p>
            <p>{`${temperatureFeelsLike} °C`}</p>
          </Row>
          <Row justify="space-between">
            <p>Wind:</p>
            <p>{`${wind} km/h`}</p>
          </Row>
          <Row justify="space-between">
            <p>Precipitation:</p>
            <p>{`${precip} %`}</p>
          </Row>
          <Row justify="space-between">
            <p>Humidity:</p>
            <p>{`${humidity} %`}</p>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};

// WeatherModalComponent.propTypes = {
//   weatherInfo: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     countryName: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//     temperature: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     temperatureFeelsLike: PropTypes.string.isRequired,
//     wind: PropTypes.string.isRequired,
//     precip: PropTypes.string.isRequired,
//     humidity: PropTypes.string.isRequired,
//   }).isRequired,
//   setIsModalVisible: PropTypes.func.isRequired,
//   isModalVisible: PropTypes.bool.isRequired,
// };

export default WeatherModalComponent;
