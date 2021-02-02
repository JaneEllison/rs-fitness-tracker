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

WeatherModalComponent.defaultProps = {
  weatherInfo: PropTypes.shape({
    temperature: '-3',
    name: 'Minsk',
    countryName: 'Belarus',
    description: 'Mostly cloudy',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6Eqcl15XoN3eM922kfnx7ftuuENq5kTCrg&usqp=CAU',
    temperatureFeelsLike: '-5',
    wind: '11',
    precip: '3',
    humidity: '88',
  }),
};

WeatherModalComponent.propTypes = {
  weatherInfo: PropTypes.shape({
    name: PropTypes.string,
    countryName: PropTypes.string,
    icon: PropTypes.string,
    temperature: PropTypes.string,
    description: PropTypes.string,
    temperatureFeelsLike: PropTypes.string,
    wind: PropTypes.string,
    precip: PropTypes.string,
    humidity: PropTypes.string,
  }),
  setIsModalVisible: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
};

export default WeatherModalComponent;
