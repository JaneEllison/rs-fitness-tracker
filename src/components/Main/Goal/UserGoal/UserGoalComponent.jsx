import React, { useState, useEffect } from 'react';
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

const MINIMUM_CALORIES = {
  male: 1500,
  female: 1200,
};

const isLessThanSafe = (cal, sex) => cal < MINIMUM_CALORIES[sex];

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
  const [goalCalories, setGoalCalories] = useState(userGoals.goalCalories || null);

  const getCalories = () => {
    const key = weightPlan === 'maintain' ? weightPlan : `${intensityLevel}${weightPlan}`;
    return getWeightChangeParameters({
      weight,
      height,
      gender,
      age,
    }, activityLevel)[key];
  };

  useEffect(() => {
    setGoalCalories(getCalories());
  }, [activityLevel, intensityLevel, weightPlan]);

  const showModal = () => {
    if (isLessThanSafe(goalCalories, gender)) {
      Modal.error({
        title: 'Confirm new user parameters',
        content: (
          <div style={{ color: 'red' }}>
            Warning! Losing weight at
            {' '}
            {goalCalories}
            {' '}
            kCal per day is not safe for
            {' '}
            {`${gender}s`}
            {' '}
            .
            Minimum daily caloric rate is
            {' '}
            {MINIMUM_CALORIES[gender]}
            .
            <p>Please consult your physician</p>
          </div>
        ),
      });
    } else {
      Modal.confirm({
        title: 'Confirm new user parameters',
        content: (
          <div>
            Update goal to:
            {' '}
            {goalCalories}
            {' '}
            kCal?
          </div>
        ),
        onOk: () => {
          updateUserGoalsData({
            activityLevel,
            intensityLevel,
            weightPlan,
            goalCalories,
          }, firebase);
        },
      });
    }
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
          onChange={(event) => {
            setWeightPlan(event.target.value);
          }}
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
          {goalCalories ? `${goalCalories} kCal` : null}
        </Col>
      </Row>
      <Row className={style.userGoalField}>
        <Button
          type="primary"
          onClick={showModal}
          disabled={!goalCalories}
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
  }).isRequired,
  userGoals: PropTypes.object.isRequired,
};

export default UserGoalComponent;
