import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
  Row, 
  Col,   
  InputNumber, 
  Select,
  Button,
  Modal
} from 'antd';
import style from './../GoalComponent.module.css';
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
    maxSafeWeight,
    minSafeWeight,
   },
}) {
  const dispatch = useDispatch();
  const [goalEndWeight, setGoalEndWeight] = useState(goalWeight);
  const [activityLevel, setActivityLevel] = useState('sedentary');

  const showModal = () => {
    Modal.confirm({
      title: 'New goal parameters',
      content: (
        <div>
          nigger
        </div>
      ),
    })
  }

  return (
    <Col>
      <Row>
        <h3>Set goal weight:</h3>
      </Row>
      <Row>
        Current weight: {weight} kg
      </Row>
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
        <Col span={12}>
          New goal weight:
        </Col>
        <Col span={12}>
          <InputNumber 
            value={goalEndWeight} 
            onChange={setGoalEndWeight} 
            min={minSafeWeight}
            max={maxSafeWeight}
            className={style.goalInputField} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          Activity level: 
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
        <Button
          type='primary'
          onClick={showModal}>
            Calculate goal
        </Button>
        <Button  
          danger={true}
          onClick={() => {
            setGoalEndWeight(weight);
            setActivityLevel('sedentary');
          }}>
            Reset
        </Button>
      </Row>
    </Col>
  )
}

export default UserGoalComponent;