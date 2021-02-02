import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import style from '../GoalComponent.module.css';
import { updateUserSummaryAC } from '../../../../store/userReducer/userReducerActionCreators';
import getAgeFromDateString from '../../../../utils/getAgeFromDateString';

function UserPhysicsComponent({
  summary: {
    weight,
    height,
    sex,
    birthday,
  },
}) {
  const dispatch = useDispatch();
  const [userWeight, setUserWeight] = useState(weight);
  const [userHeight, setUserHeight] = useState(height);
  const [userSex, setUserSex] = useState(sex);
  const [userBirthday, setUserBirthday] = useState(moment(birthday));

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
            Sex:
            {' '}
            {userSex.target ? userSex.target.value : userSex}
          </div>
        </div>
      ),
      onOk: () => {
        dispatch(updateUserSummaryAC(userWeight, userHeight, userBirthday, userSex));
      },
    });
  };

  return (
    <Col>
      <Row>
        <h3>Your physical parameters:</h3>
      </Row>
      <Row>
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
      <Row>
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
      <Row>
        <Col span={12}>
          Date of birth:
        </Col>
        <Col span={12}>
          <DatePicker
            defaultValue={userBirthday}
            onChange={setUserBirthday}
            className={style.goalInputField}
            disabledDate={(current) => current >= moment().subtract(13, 'years')}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          Sex:
        </Col>
        <Col span={12}>
          <Radio.Group
            defaultValue={userSex}
            onChange={setUserSex}
            buttonStyle="button"
          >
            <Radio.Button value="female">Female</Radio.Button>
            <Radio.Button value="male">Male</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Button
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
    weight: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    birthday: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserPhysicsComponent;
