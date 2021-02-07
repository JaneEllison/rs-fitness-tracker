import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Typography,
} from 'antd';
import style from '../Weather.module.css';
import antdPropConstants from '../../../../constants/antdPropConstants';
import weatherComponentConstants from '../../../../constants/weatherComponentConstants';

const {
  WEATHER_COMPONENT: {
    CONTENT_JUSTIFY,
  },
} = antdPropConstants;

const {
  IMG_ALT,
  IMG_SIZE_SUMMARY,
  GET_IMG_SRC,
  TEMP_UNIT,
} = weatherComponentConstants;

const { Text } = Typography;

function WeatherSummaryComponent({
  data: {
    icon,
    name,
    temperature,
    description,
  },
  onClick,
}) {
  return (
    <Row onClick={onClick}>
      <Col>
        <img
          src={GET_IMG_SRC(IMG_SIZE_SUMMARY)(icon)}
          className={style.weatherIcon}
          alt={IMG_ALT}
        />
      </Col>
      <Col className={style.content}>
        <Row justify={CONTENT_JUSTIFY}>
          <Text className={style.weatherTitle}>
            {name}
          </Text>
          <Text className={style.weatherTitle}>
            {`${temperature} ${TEMP_UNIT}`}
          </Text>
        </Row>
        <Row className={style.weatherSubtitle}>
          {description}
        </Row>
      </Col>
    </Row>
  );
}

WeatherSummaryComponent.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WeatherSummaryComponent;
