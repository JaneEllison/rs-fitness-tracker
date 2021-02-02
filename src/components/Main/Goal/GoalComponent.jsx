import React from 'react';
import { useSelector } from 'react-redux';
import {
  Row,
  Col,
} from 'antd';
import UserPhysicsComponent from './UserPhysics/UserPhysicsComponent'
import UserGoalComponent from './UserGoal/UserGoalComponent';
import profileSelector from '../../../store/Selectors/profileSelector';
import {isLoaded, isEmpty} from 'react-redux-firebase';

function GoalComponent() {

  const profile = useSelector(profileSelector);

  if (!isLoaded(profile)) {
    return <div>Loading...</div>
  }
  if (isEmpty(profile)) {
    return <div>You have to sign up</div>
  }
  if (isLoaded(profile) && !isEmpty(profile)) {
    const {userPhysics, userGoals, userHistory} = profile;
    return (
      <Row gutter={8}>
        <Col span={8}>
          <UserPhysicsComponent
            summary={userPhysics}
            userGoals={userGoals}
            userHistory={userHistory}
          />
        </Col>
        <Col span={8} >
          <UserGoalComponent
            summary={userPhysics}
            userGoals={userGoals}
            userHistory={userHistory}
          />
        </Col>
      </Row>
    );
  }
}

export default GoalComponent;
