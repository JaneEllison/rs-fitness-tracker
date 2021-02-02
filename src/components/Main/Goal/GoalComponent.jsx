import React from 'react';
import { useSelector } from 'react-redux';
import {
  Row,
  Col,
} from 'antd';
import {
  userSummarySelector,
} from './../../../store/Selectors/userSelector';
import UserPhysicsComponent from './UserPhysics/UserPhysicsComponent'
import UserGoalComponent from './UserGoal/UserGoalComponent';
import profileSelector from '../../../store/Selectors/profileSelector';
import {isLoaded, isEmpty} from 'react-redux-firebase';

function GoalComponent() {

  const profile = useSelector(profileSelector);
  const summary = useSelector(userSummarySelector);
  if (!isLoaded(profile)) {
    return <div>Loading...</div>
  }
  if (isEmpty(profile)) {
    return <div>You have to sign up</div>
  }
  if (isLoaded(profile) && !isEmpty(profile)) {

    return (
      <Row gutter={8}>
        <Col span={8}>
          <UserPhysicsComponent summary={profile.userPhysics} />
        </Col>
        <Col span={8}>
          <UserGoalComponent
            summary={profile.userPhysics}
            userGoals={profile.userGoals}
          />
        </Col>
      </Row>
    );
  }
}

export default GoalComponent;
