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
  const [intensityLevel, setIntensityLevel] = useState(userGoals.intensityLevel);
  const [weightPlan, setWeightPlan] = useState(userGoals.weightPlan);
  const showModal = () => {
    Modal.confirm({
      title: 'Confirm new user parameters',
      content: (
        <div>
          Are you sure you want to update goal to:
          {' '}
          {(() => {
            const key = weightPlan === 'maintain' ? weightPlan : `${intensityLevel}${weightPlan}`;
            return getWeightChangeParameters({
              weight,
              height,
              gender,
              age,
            }, activityLevel)[key];
          })()}
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
      <Row>
        <h3>Goal settings</h3>
      </Row>
      <Row>
        Current goal calories:
        {' '}
        {userGoals.goalCalories ? userGoals.goalCalories : 2000}
        {' '}
        kcal
      </Row>
      <Row>
        <Radio.Group value={weightPlan} onChange={(event) => setWeightPlan(event.target.value)}>
          <Radio value="maintain">Maintain weight</Radio>
          <Radio value="Loss">Lose weight</Radio>
          <Radio value="Gain">Gain weight</Radio>
        </Radio.Group>
      </Row>
      <Row>
        <Col span={12}>
          My activity level:
        </Col>
        <Col span={12}>
          <Select
            value={activityLevel}
            onChange={setActivityLevel}
            className={style.goalInputField}
          >
            <Option value="sedentary">Sedentary</Option>
            <Option value="light">Light</Option>
            <Option value="moderate">Moderate</Option>
            <Option value="active">Active</Option>
            <Option value="veryActive">Very Active</Option>
            <Option value="extraActive">Extra Active</Option>
          </Select>
        </Col>
      </Row>
      <Row>
        <Select
          disabled={weightPlan === 'maintain'}
          value={intensityLevel}
          onChange={setIntensityLevel}
          className={style.goalInputField}
        >
          <Option value="mild">Slowly</Option>
          <Option value="normal">Normally</Option>
          <Option value="extreme">Fast</Option>
        </Select>
      </Row>
      <Row>
        <Col span={12}>
          New goal calories:
        </Col>
        <Col>
          {(() => {
            const key = weightPlan === 'maintain' ? weightPlan : `${intensityLevel}${weightPlan}`;
            return getWeightChangeParameters({
              weight,
              height,
              gender,
              age,
            }, activityLevel)[key];
          })()}
          {' '}
          kcal
        </Col>
      </Row>
      <Row>
        <Button type="primary" onClick={showModal}>Set new goal</Button>
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
