import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  InputNumber,
  Radio,
  DatePicker,
  Button,
  Modal,
} from 'antd';
import style from './../GoalComponent.module.css';
import moment from 'moment';
import getAgeFromDateString from './../../../../utils/getAgeFromDateString';
import { updateAllPhysicsData } from '../../Account/updateProfileData';
import { useFirebase } from 'react-redux-firebase';


function UserPhysicsComponent({
  summary: {
    weight,
    height,
    gender,
    birthDay
  }
}) {
  const firebase = useFirebase();

  let [userWeight, setUserWeight] = useState(weight);
  let [userHeight, setUserHeight] = useState(height);
  let [userSex, setUserSex] = useState(gender);
  let [userBirthday, setUserBirthday] = useState(moment(birthDay));
  console.log(    weight,
    height,
    gender,
    birthDay);
  const showModal = () => {
    Modal.confirm({
      title: 'Confirm new user parameters',
      content: (
        <div>
          <div>Weight: {userWeight} kg</div>
          <div>Height: {userHeight} cm</div>
          <div>Date of birth: {userBirthday.format('MMMM Do YYYY')}</div>
          <div>Age: {getAgeFromDateString(userBirthday.toString())} years</div>
          <div>Sex: {userSex}</div>
        </div>
      ),
      onOk: () => {
        updateAllPhysicsData({
          weight: userWeight,
          height: userHeight,
          birthDay: userBirthday.format('DD.MM.YYYY'),
          gender: userSex,
        }, firebase)
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
            className={style.goalInputField} />
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
            className={style.goalInputField} />
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
            disabledDate={(current) => current >= moment().subtract(13, 'years') } />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          Gender:
        </Col>
        <Col span={12}>
          <Radio.Group
            defaultValue={userSex}
            onChange={(event) => setUserSex(event.target.value)}
            buttonStyle='button'>
            <Radio.Button value='female'>Female</Radio.Button>
            <Radio.Button value='male'>Male</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Button
          type='primary'
          onClick={showModal}>
            Update stats
        </Button>
      </Row>
    </Col>
  )
}

export default UserPhysicsComponent;
