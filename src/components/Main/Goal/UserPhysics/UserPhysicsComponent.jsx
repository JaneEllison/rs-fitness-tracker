import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  InputNumber,
  Radio,
  DatePicker,
  Button,
} from 'antd';
import moment from 'moment';
import { useFirebase } from 'react-redux-firebase';
import showPhysicsModal from './showPhysicsModal';
import genders from '../../../../config/genders';
import goalComponentConstants from '../../../../constants/goalComponentConstants';
import antdPropConstants from '../../../../constants/antdPropConstants';
import style from '../Goal.module.css';

const {
  GOAL: {
    USER_PHYSICS: {
      BUTTON_TYPE,
      RADIO_STYLE,
    },
  },
} = antdPropConstants;

const {
  PHYSICS: {
    PHYSICS_HEADING,
    WEIGHT_LABEL,
    MIN_WEIGHT,
    HEIGHT_LABEL,
    MIN_HEIGHT,
    DATE_OF_BIRTH_LABEL,
    GENDER_LABEL,
    BUTTON_TEXT,
  },
} = goalComponentConstants;

function UserPhysicsComponent({
  summary: {
    weight,
    height,
    gender,
    birthDay,
  },
  userHistory,
  dailyCalories,
}) {
  const firebase = useFirebase();
  const [userWeight, setUserWeight] = useState(weight);
  const [userHeight, setUserHeight] = useState(height);
  const [userSex, setUserSex] = useState(gender);
  const [userBirthday, setUserBirthday] = useState(
    birthDay ? moment(birthDay) : moment(moment.now()),
  );

  const LATEST_DATE = moment().subtract(10, 'years');

  return (
    <Col>
      <Row>
        <h3>{PHYSICS_HEADING}</h3>
      </Row>
      <Row className={style.userPhysicsField}>
        <Col span={8}>
          {WEIGHT_LABEL}
        </Col>
        <Col span={16}>
          <InputNumber
            defaultValue={userWeight}
            onChange={setUserWeight}
            min={MIN_WEIGHT}
            className={style.goalInputField}
          />
        </Col>
      </Row>
      <Row className={style.userPhysicsField}>
        <Col span={8}>
          {HEIGHT_LABEL}
        </Col>
        <Col span={16}>
          <InputNumber
            defaultValue={userHeight}
            onChange={setUserHeight}
            min={MIN_HEIGHT}
            className={style.goalInputField}
          />
        </Col>
      </Row>
      <Row className={style.userPhysicsField}>
        <Col span={8}>
          {DATE_OF_BIRTH_LABEL}
        </Col>
        <Col span={16}>
          <DatePicker
            defaultValue={birthDay ? userBirthday : LATEST_DATE}
            onChange={setUserBirthday}
            className={style.goalInputField}
            disabledDate={(current) => current >= LATEST_DATE}
          />
        </Col>
      </Row>
      <Row className={style.userPhysicsField}>
        <Col span={8}>
          {GENDER_LABEL}
        </Col>
        <Col span={16}>
          <Radio.Group
            defaultValue={userSex}
            onChange={(event) => setUserSex(event.target.value)}
            buttonStyle={RADIO_STYLE}
          >
            {
              genders.map(({ value, label }, index) => {
                const keyProp = `gender-${index}`;
                return (
                  <Radio.Button key={keyProp} value={value}>
                    {label}
                  </Radio.Button>
                );
              })
            }
          </Radio.Group>
        </Col>
      </Row>
      <Row className={style.userPhysicsField}>
        <Button
          disabled={!userBirthday}
          type={BUTTON_TYPE}
          onClick={() => {
            showPhysicsModal({
              userWeight,
              userHeight,
              userBirthday,
              userSex,
              dailyCalories,
              userHistory,
              firebase,
            });
          }}
        >
          {BUTTON_TEXT}
        </Button>
      </Row>
    </Col>
  );
}

UserPhysicsComponent.propTypes = {
  summary: PropTypes.shape({
    weight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    gender: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    birthDay: PropTypes.string.isRequired,
  }).isRequired,
  dailyCalories: PropTypes.number.isRequired,
  userHistory: PropTypes.array.isRequired,
};

export default UserPhysicsComponent;
