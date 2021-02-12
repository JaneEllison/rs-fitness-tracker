import React from 'react';
import moment from 'moment';
import { Row, Col, Modal } from 'antd';
import { updateAllPhysicsData, updateUserHistoryData } from '../../Account/updateProfileData';
import getAgeFromDateString from '../../../../utils/getAgeFromDateString';
import goalComponentConstants from '../../../../constants/goalComponentConstants';

const {
  PHYSICS: {
    MODAL: {
      TITLE,
      WEIGHT_LABEL,
      GET_WEIGHT_STRING,
      HEIGHT_LABEL,
      GET_HEIGHT_STRING,
      DATE_OF_BIRTH_LABEL,
      DATE_OF_BIRTH_LOCALE,
      AGE_LABEL,
      GET_AGE_STRING,
      GENDER_LABEL,
    },
  },
} = goalComponentConstants;

function showPhysicsModal({
  userWeight,
  userHeight,
  userBirthday,
  userSex,
  dailyCalories,
  userHistory,
  firebase,
}) {
  return Modal.confirm({
    title: TITLE,
    content: (
      <Col span={24}>
        <Row>
          <Col span={12}>
            {WEIGHT_LABEL}
          </Col>
          <Col span={12}>
            {GET_WEIGHT_STRING(userWeight)}
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            {HEIGHT_LABEL}
          </Col>
          <Col span={12}>
            {GET_HEIGHT_STRING(userHeight)}
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            {DATE_OF_BIRTH_LABEL}
          </Col>
          <Col span={12}>
            {userBirthday.format(DATE_OF_BIRTH_LOCALE)}
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            {AGE_LABEL}
          </Col>
          <Col span={12}>
            {GET_AGE_STRING(getAgeFromDateString(userBirthday.toString()))}
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            {GENDER_LABEL}
          </Col>
          <Col span={12}>
            {userSex}
          </Col>
        </Row>
      </Col>
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
}

export default showPhysicsModal;
