import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
  Row, 
  Col,   
  Radio,
  InputNumber, 
  Select,
  DatePicker,
  Modal
} from 'antd';
import style from './../GoalComponent.module.css';
import getWeightChangeParameters from './../../../../utils/getWeightChangeParameters';
import getGoalEndDate from './../../../../utils/getGoalEndDate';
import moment from 'moment';
import { updateUserSummaryAC } from './../../../../store/userReducer/userReducerActionCreators';

const { Option } = Select;

function UserGoalComponent({
  goal: { 
    goalWeight,
    goalCalories,
    goalEndDate,
  },
  summary: { 
    weight,
    sex,
    height,
    age,
    maxSafeWeight,
    minSafeWeight
  },
}) {
  const dispatch = useDispatch();
  const [goalEndWeight, setGoalEndWeight] = useState(goalWeight);
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [intensityLevel, setIntensityLevel] = useState('normal');
  const [weightGoal, setWeightGoal] = useState('maintain');
  const [newGoalEnd, setNewGoalEnd] = useState(moment());

  return (
    <Col>
      <Row>
        Current goal weight: {goalWeight} kg
      </Row>
      <Row>
        Current goal calories: {goalCalories} kcal
      </Row>
      <Row>
        Current goal end date: {goalEndDate}
      </Row>
      <Row>
        <h3>I want to:</h3>
      </Row>
      <Row>
        <Radio.Group value={weightGoal} onChange={(event) => setWeightGoal(event.target.value)}>
          <Radio value='maintain'>Maintain weight</Radio>
          <Radio value='Loss'>Lose weight</Radio>
          <Radio value='Gain'>Gain weight</Radio>
        </Radio.Group>
      </Row>
      <Row>
        <Col span={12}>
          Until: 
        </Col>
        <Col span={12}>
          <DatePicker
            disabled={weightGoal !== 'maintain'} 
            defaultValue={newGoalEnd} 
            onChange={setNewGoalEnd}
            className={style.goalInputField}
            disabledDate={(current) => current
              && (current < moment()
              || current >= moment().add(1, 'years')) } />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          My activity level: 
        </Col>
        <Col span={12}>
          <Select 
            value={activityLevel} 
            onChange={setActivityLevel} 
            className={style.goalInputField}>
            <Option value='sedentary'>Sedentary</Option>
            <Option value='light'>Light</Option>
            <Option value='moderate'>Moderate</Option>
            <Option value='active'>Active</Option>
            <Option value='veryActive'>Very Active</Option>
            <Option value='extraActive'>Extra Active</Option>
          </Select>
        </Col>
      </Row>
      <Row>
        <Select 
          disabled={weightGoal === 'maintain'}
          value={intensityLevel} 
          onChange={setIntensityLevel} 
          className={style.goalInputField}>
          <Option value='mild'>Slowly</Option>
          <Option value='normal'>Normally</Option>
          <Option value='extreme'>Fast</Option>
        </Select>
      </Row>
      <Row>
        <Col span={12}>
          My goal weight:
        </Col>
        <Col span={12}>
          <InputNumber
            disabled={weightGoal === 'maintain'}
            value={goalEndWeight} 
            onChange={setGoalEndWeight} 
            min={weightGoal === 'Gain' ? weight : minSafeWeight}
            max={weightGoal === 'Loss' ? weight : maxSafeWeight}
            className={style.goalInputField} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          Required daily calories: 
        </Col>
        <Col>
          {(() => {
            const key = weightGoal === 'maintain' ? weightGoal : `${intensityLevel}${weightGoal}`;
            return getWeightChangeParameters({
              weight,
              sex,
              height,
              age
            }, activityLevel)[key]
          })()} kcal
        </Col>
      </Row>
    </Col>
  )
}

export default UserGoalComponent;