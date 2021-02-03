import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Radio,
  Select,
  Button,
  Modal,
} from 'antd';
import { useFirebase } from 'react-redux-firebase';
import style from '../GoalComponent.module.css';
import getWeightChangeParameters from '../../../../utils/getWeightChangeParameters';
import { updateUserGoalsData } from '../../Account/updateProfileData';
import {
  ACTIVITIES,
  GOALS,
  INTENSITIES,
  ACTIVITY_DESCRIPTIONS,
  INTENSITY_DESCRIPTIONS,
} from '../../../../config/goalSettingsConfig';

const { Option } = Select;

function UserGoalComponent({
  summary: {
    weight,
    height,
    gender,
    age,
  },
  userGoals,
}) {
  const firebase = useFirebase();
  const [activityLevel, setActivityLevel] = useState(userGoals.activityLevel);
  const [activityDesc, setActivityDesc] = useState(ACTIVITY_DESCRIPTIONS[activityLevel]);
  const [intensityLevel, setIntensityLevel] = useState(userGoals.intensityLevel);
  const [intensityDesc, setIntensityDesc] = useState(INTENSITY_DESCRIPTIONS[intensityLevel]);
  const [weightPlan, setWeightPlan] = useState(userGoals.weightPlan);

  const getCalories = () => {
    const key = weightPlan === 'maintain' ? weightPlan : `${intensityLevel}${weightPlan}`;
    return getWeightChangeParameters({
      weight,
      height,
      gender,
      age,
    }, activityLevel)[key];
  };

  const showModal = () => {
    Modal.confirm({
      title: 'Confirm new user parameters',
      content: (
        <div>
          Are you sure you want to update goal to:
          {' '}
          {getCalories()}
          {' '}
          kcal?
        </div>
      ),
      onOk: () => {
        const key = weightPlan === 'maintain' ? weightPlan : `${intensityLevel}${weightPlan}`;
        const goalCalories = getWeightChangeParameters({
          weight,
          gender,
          height,
          age,
        }, activityLevel)[key];
        updateUserGoalsData({
          activityLevel,
          intensityLevel,
          weightPlan,
          goalCalories,
        }, firebase);
      },
    });
  };

  return (
    <Col>
      <Row className={style.userGoalField}>
        <h3>Goal settings</h3>
      </Row>
      <Row className={style.userGoalField}>
        Current goal calories:
        {' '}
        {userGoals.goalCalories ? userGoals.goalCalories : 2000}
        {' '}
        kcal
      </Row>
      <Row className={style.userGoalField}>
        <Radio.Group
          className={style.goalRadioButtons}
          options={GOALS}
          value={weightPlan}
          onChange={(event) => setWeightPlan(event.target.value)}
        />
      </Row>
      <Row className={style.userGoalField}>
        <Col span={12}>
          How intensely:
        </Col>
        <Col span={12}>
          <Select
            disabled={weightPlan === 'maintain'}
            value={intensityLevel}
            onChange={(value) => {
              setIntensityLevel(value);
              setIntensityDesc(INTENSITY_DESCRIPTIONS[value]);
            }}
            className={style.goalInputField}
          >
            {
              INTENSITIES.map(({ value, label }, index) => {
                const keyProp = `activity${index}`;
                return (
                  <Option key={keyProp} value={value}>{label}</Option>
                );
              })
            }
          </Select>
        </Col>
      </Row>
      <Row>{intensityDesc}</Row>
      <Row className={style.userGoalField}>
        <Col span={12}>
          My activity level:
        </Col>
        <Col span={12}>
          <Select
            value={activityLevel}
            onChange={(value) => {
              setActivityLevel(value);
              setActivityDesc(ACTIVITY_DESCRIPTIONS[value]);
            }}
            className={style.goalInputField}
          >
            {
              ACTIVITIES.map(({ value, label }, index) => {
                const keyProp = `activity${index}`;
                return (
                  <Option key={keyProp} value={value}>{label}</Option>
                );
              })
            }
          </Select>
        </Col>
      </Row>
      <Row>
        {activityDesc}
      </Row>
      <Row className={style.userGoalField} style={{ marginTop: 40 }}>
        <Col span={12}>
          <h3>New goal calories:</h3>
        </Col>
        <Col>
          {getCalories() || null}
          {' '}
          kcal
        </Col>
      </Row>
      <Row className={style.userGoalField}>
        <Button
          type="primary"
          onClick={showModal}
          disabled={!(getCalories())}
        >
          Set new goal
        </Button>
      </Row>
    </Col>
  );
}

UserGoalComponent.propTypes = {
  summary: PropTypes.shape({
    weight: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    goal: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.bool,
    ]).isRequired,
  }).isRequired,
  userGoals: PropTypes.shape({
    activityLevel: PropTypes.string.isRequired,
    goalCalories: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    intensityLevel: PropTypes.string.isRequired,
    weightPlan: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserGoalComponent;
