import React from 'react';
import {
  Row,
  Col,
  Typography,
  Modal,
} from 'antd';
import PropTypes from 'prop-types';
import antdPropConstants from '../../../../constants/antdPropConstants';
import weatherComponentConstants from '../../../../constants/weatherComponentConstants';
import style from '../Weather.module.css';

const { Title } = Typography;

const {
  WEATHER_COMPONENT: {
    MODAL: {
      FOOTER,
      TITLE_LEVEL,
      COMPONENT_ALIGN,
      COMPONENT_JUSTIFY,
      COMPONENT_GUTTER,
      TEMPERATURE_ROW_JUSTIFY,
      DESCRIPTION_ROW_JUSTIFY,
      FEELS_LIKE_ROW_JUSTIFY,
      WIND_ROW_JUSTIFY,
      PRESSURE_ROW_JUSTIFY,
      HUMIDITY_ROW_JUSTIFY,
    },
  },
} = antdPropConstants;

const {
  IMG_ALT,
  IMG_SIZE_MODAL,
  GET_IMG_SRC,

  TEMP_UNIT,
  WIND_UNIT,
  PRESSURE_UNIT,
  HUMIDITY_UNIT,

  FEELS_LIKE_TEXT,
  WIND_TEXT,
  PRESSURE_TEXT,
  HUMIDITY_TEXT,
} = weatherComponentConstants;

const WeatherModalComponent = ({
  weatherInfo: {
    name,
    countryName,
    icon,
    temperature,
    description,
    temperatureFeelsLike,
    wind,
    pressure,
    humidity,
  },
  setIsModalVisible,
  isModalVisible,
}) => {
  const closeModal = () => { setIsModalVisible(false); };

  return (
    <Modal
      className={style.weatherModal}
      title={`${name}, ${countryName}`}
      visible={isModalVisible}
      onOk={closeModal}
      onCancel={closeModal}
      centered
      footer={FOOTER}
    >
      <Row gutter={COMPONENT_GUTTER} align={COMPONENT_ALIGN} justify={COMPONENT_JUSTIFY}>
        <Col sm={12} xs={17}>
          <img
            src={GET_IMG_SRC(IMG_SIZE_MODAL)(icon)}
            alt={IMG_ALT}
            className={style.weatherModalImg}
          />
        </Col>
        <Col sm={12} xs={17}>
          <Row justify={TEMPERATURE_ROW_JUSTIFY}>
            <Title
              level={TITLE_LEVEL}
              className={style.weatherModalTitle}
            >
              {`${temperature} ${TEMP_UNIT}`}
            </Title>
          </Row>
          <Row justify={DESCRIPTION_ROW_JUSTIFY}>
            <p className={style.weatherModalSubtitle}>
              {description}
            </p>
          </Row>
          <Row justify={FEELS_LIKE_ROW_JUSTIFY}>
            <p>{`${FEELS_LIKE_TEXT} ${temperatureFeelsLike} ${TEMP_UNIT}`}</p>
          </Row>
          <Row justify={WIND_ROW_JUSTIFY}>
            <p>{WIND_TEXT}</p>
            <p>{`${wind} ${WIND_UNIT}`}</p>
          </Row>
          <Row justify={PRESSURE_ROW_JUSTIFY}>
            <p>{PRESSURE_TEXT}</p>
            <p>{`${pressure} ${PRESSURE_UNIT}`}</p>
          </Row>
          <Row justify={HUMIDITY_ROW_JUSTIFY}>
            <p>{HUMIDITY_TEXT}</p>
            <p>{`${humidity} ${HUMIDITY_UNIT}`}</p>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};

WeatherModalComponent.propTypes = {
  weatherInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    temperatureFeelsLike: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
  }).isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
};

export default WeatherModalComponent;
