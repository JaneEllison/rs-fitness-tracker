import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Radio,
  Select,
  Button,
  Divider,
} from 'antd';
import { useFirebase } from 'react-redux-firebase';
import showGoalModal from './showGoalModal';
import showRemoveGoalModal from './showRemoveGoalModal';
import { getGoalCalories } from '../../../../utils/getGoalCalories';
import {
  ACTIVITIES,
  GOALS,
  INTENSITIES,
  ACTIVITY_DESCRIPTIONS,
  INTENSITY_DESCRIPTIONS,
} from '../../../../config/goalSettingsConfig';
import goalComponentConstants from '../../../../constants/goalComponentConstants';
import antdPropConstants from '../../../../constants/antdPropConstants';
import style from '../Goal.module.css';

const { Option } = Select;

const {
  SHOW_CALORIES,
  GOAL: {
    GOAL_HEADING,
    CURRENT_CALORIES_LABEL,
    WEIGHT_PLAN_LABEL,
    INTENSITY_LABEL,
    ACTIVITY_LABEL,
    NEW_GOAL_HEADING,
    BUTTON_TEXT,
  },
} = goalComponentConstants;

const {
  GOAL: {
    USER_GOAL: {
      BUTTON_TYPE,
      SELECT_OPTION_FILTER_PROP,
      DESCRIPTION_JUSTIFY,
    },
  },
} = antdPropConstants;

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
  const [
    activityDescription,
    setActivityDescription,
  ] = useState(ACTIVITY_DESCRIPTIONS[activityLevel]);
  const [intensityLevel, setIntensityLevel] = useState(userGoals.intensityLevel);
  const [
    intensityDescription,
    setIntensityDescription,
  ] = useState(INTENSITY_DESCRIPTIONS[intensityLevel]);
  const [weightPlan, setWeightPlan] = useState(userGoals.weightPlan);
  const [goalCalories, setGoalCalories] = useState(userGoals.goalCalories || null);

  useEffect(() => {
    setGoalCalories(getGoalCalories({
      weightPlan,
      intensityLevel,
      weight,
      height,
      gender,
      age,
      activityLevel,
    }));
  }, [
    weightPlan,
    intensityLevel,
    weight,
    height,
    gender,
    age,
    activityLevel,
  ]);

  return (
    <Col>
      <Row className={style.userGoalField}>
        <h3>{GOAL_HEADING}</h3>
      </Row>
      <Row className={style.userGoalField}>
        <Col span={8}>
          {CURRENT_CALORIES_LABEL}
        </Col>
        <Col span={16}>
          {SHOW_CALORIES(userGoals.goalCalories)}
        </Col>
      </Row>
      <Row>
        <Button
          danger
          disabled={!userGoals.goalCalories}
          onClick={() => { showRemoveGoalModal({ firebase }); }}
        >
          Clear current goal
        </Button>
      </Row>
      <Divider />
      <Row className={style.userGoalField}>
        <Col span={8}>
          {WEIGHT_PLAN_LABEL}
        </Col>
        <Col span={16}>
          <Radio.Group
            className={style.goalRadioButtons}
            options={GOALS}
            value={weightPlan}
            onChange={(event) => { setWeightPlan(event.target.value); }}
          />
        </Col>
      </Row>
      <Divider />
      <Row className={style.userGoalField}>
        <Col span={8}>
          {INTENSITY_LABEL}
        </Col>
        <Col span={16}>
          <Select
            showSearch
            optionFilterProp={SELECT_OPTION_FILTER_PROP}
            disabled={weightPlan === GOALS[0].value}
            value={intensityLevel}
            onChange={(value) => {
              setIntensityLevel(value);
              setIntensityDescription(INTENSITY_DESCRIPTIONS[value]);
            }}
            className={style.goalInputField}
          >
            {
              INTENSITIES.map(({ value, label }, index) => {
                const keyProp = `intensity${index}`;
                return (
                  <Option key={keyProp} value={value}>{label}</Option>
                );
              })
            }
          </Select>
        </Col>
      </Row>
      <Row justify={DESCRIPTION_JUSTIFY}>{intensityDescription}</Row>
      <Divider />
      <Row className={style.userGoalField}>
        <Col span={8}>
          {ACTIVITY_LABEL}
        </Col>
        <Col span={16}>
          <Select
            showSearch
            optionFilterProp={SELECT_OPTION_FILTER_PROP}
            value={activityLevel}
            onChange={(value) => {
              setActivityLevel(value);
              setActivityDescription(ACTIVITY_DESCRIPTIONS[value]);
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
      <Row justify={DESCRIPTION_JUSTIFY}>{activityDescription}</Row>
      <Divider />
      <Row className={style.userNewGoalCaloriesField}>
        <Col span={8}>
          <h3 className={style.userGoalHeading}>{NEW_GOAL_HEADING}</h3>
        </Col>
        <Col span={16}>
          {SHOW_CALORIES(goalCalories)}
        </Col>
      </Row>
      <Row className={style.userGoalField}>
        <Button
          type={BUTTON_TYPE}
          onClick={() => {
            showGoalModal({
              gender,
              weightPlan,
              activityLevel,
              intensityLevel,
              goalCalories,
              firebase,
            });
          }}
          disabled={!goalCalories}
          className={style.userGoalButton}
        >
          {BUTTON_TEXT}
        </Button>
      </Row>
    </Col>
  );
}

UserGoalComponent.propTypes = {
  summary: PropTypes.shape({
    weight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    age: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
  userGoals: PropTypes.object.isRequired,
};

export default UserGoalComponent;
