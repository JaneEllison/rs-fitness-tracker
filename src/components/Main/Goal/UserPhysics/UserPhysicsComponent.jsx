import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  InputNumber,
  Radio,
  DatePicker,
  Button,
  Modal,
} from 'antd';
import moment from 'moment';
import { useFirebase } from 'react-redux-firebase';
import style from '../GoalComponent.module.css';
import getAgeFromDateString from '../../../../utils/getAgeFromDateString';
import { updateAllPhysicsData, updateUserHistoryData } from '../../Account/updateProfileData';

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

  console.log(birthDay);

  const showModal = () => {
    Modal.confirm({
      title: 'Confirm new user parameters',
      content: (
        <div>
          <div>
            Weight:
            {' '}
            {userWeight}
            {' '}
            kg
          </div>
          <div>
            Height:
            {' '}
            {userHeight}
            {' '}
            cm
          </div>
          <div>
            Date of birth:
            {' '}
            {userBirthday.format('MMMM Do YYYY')}
          </div>
          <div>
            Age:
            {' '}
            {getAgeFromDateString(userBirthday.toString())}
            {' '}
            years
          </div>
          <div>
            Gender:
            {' '}
            {userSex}
          </div>
        </div>
      ),
      onOk: () => {
        updateAllPhysicsData({
          weight: userWeight,
          height: userHeight,
          birthDay: userBirthday.format('MM.DD.YYYY'),
          gender: userSex,
        }, firebase);
        updateUserHistoryData({
          weight: userWeight,
          caloriesConsumed: dailyCalories,
          date: moment(moment.now()).format('MM.DD.YYYY'),
        }, firebase, userHistory);
      },
    });
  };

  return (
    <Col>
      <Row>
        <h3>Your physical parameters:</h3>
      </Row>
      <Row className={style.userPhysicsField}>
        <Col span={12}>
          Weight, kg:
        </Col>
        <Col span={12}>
          <InputNumber
            defaultValue={userWeight}
            onChange={setUserWeight}
            min={25}
            className={style.goalInputField}
          />
        </Col>
      </Row>
      <Row className={style.userPhysicsField}>
        <Col span={12}>
          Height, cm:
        </Col>
        <Col span={12}>
          <InputNumber
            defaultValue={userHeight}
            onChange={setUserHeight}
            min={100}
            className={style.goalInputField}
          />
        </Col>
      </Row>
      <Row className={style.userPhysicsField}>
        <Col span={12}>
          Date of birth:
        </Col>
        <Col span={12}>
          <DatePicker
            defaultValue={moment(birthDay) === 'Invalid date' ? moment() : moment(birthDay)}
            onChange={setUserBirthday}
            className={style.goalInputField}
            disabledDate={(current) => current >= moment().subtract(3, 'years')}
          />
        </Col>
      </Row>
      <Row className={style.userPhysicsField}>
        <Col span={12}>
          Gender:
        </Col>
        <Col span={12}>
          <Radio.Group
            defaultValue={userSex}
            onChange={(event) => setUserSex(event.target.value)}
            buttonStyle="button"
          >
            <Radio.Button value="female">Female</Radio.Button>
            <Radio.Button value="male">Male</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row className={style.userPhysicsField}>
        <Button
          disabled={!userBirthday}
          type="primary"
          onClick={showModal}
        >
          Update stats
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
  userHistory: PropTypes.arrayOf([]).isRequired,
};

export default UserPhysicsComponent;
