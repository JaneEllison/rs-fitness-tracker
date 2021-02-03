import React from 'react';
import { useSelector } from 'react-redux';
import {
  Row,
  Col,
} from 'antd';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';
import UserPhysicsComponent from './UserPhysics/UserPhysicsComponent';
import UserGoalComponent from './UserGoal/UserGoalComponent';
import profileSelector from '../../../store/Selectors/profileSelector';
import calculateTotalCaloriesForDay from '../../../utils/calculateTotalCaloriesForDay';

function GoalComponent() {
  const profile = useSelector(profileSelector);

  if (!isLoaded(profile)) {
    return <div>Loading...</div>;
  }
  if (isEmpty(profile)) {
    return <div>You have to sign up</div>;
  }
  if (isLoaded(profile) && !isEmpty(profile)) {
    const currentDate = moment(moment.now()).format('DD.MM.YYYY');
    const {
      userPhysics, userGoals, userMenus, userHistory,
    } = profile;
    return (
      <Row gutter={8}>
        <Col span={8}>
          <UserPhysicsComponent
            summary={userPhysics}
            userHistory={userHistory}
            dailyCalories={calculateTotalCaloriesForDay(userMenus[currentDate])}
          />
        </Col>
        <Col span={8}>
          <UserGoalComponent
            summary={userPhysics}
            userGoals={userGoals}
          />
        </Col>
      </Row>
    );
  }
}

export default GoalComponent;
