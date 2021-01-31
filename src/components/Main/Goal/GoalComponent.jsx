import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Row, 
  Col,   
} from 'antd';
import { 
  userSummarySelector,
  userGoalSelector
} from './../../../store/Selectors/userSelector';
import UserPhysicsComponent from './UserPhysics/UserPhysicsComponent'
import UserGoalComponent from './UserGoal/UserGoalComponent';

function GoalComponent() {
  const summary = useSelector(userSummarySelector);
  const goal = useSelector(userGoalSelector);

  return (
    <Row gutter={8}>
      <Col span={8}>
        <UserPhysicsComponent summary={summary} />
      </Col>
      <Col span={8}>
        <UserGoalComponent goal={goal} summary={summary} />
      </Col>
    </Row>
  );
}

export default GoalComponent;