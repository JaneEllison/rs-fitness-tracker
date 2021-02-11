import React from 'react';
import {
  Card, Col, Progress, Row, Tooltip,
} from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import style from './FoodToReachGoal.module.css';
import profileSelector from '../../../../store/Selectors/profileSelector';
import checkIfTodayCaloriesExceedingGoal, { checkIfTodayCaloriesReachingGoal } from '../../../../utils/checkIfTodayCaloriesExceedingGoal';

const FoodToReachGoalComponent = ({ foodName }) => {
  const profile = useSelector(profileSelector);
  const { Meta } = Card;
  const { goalCalories } = profile.userGoals;
  const totalCaloriesForToday = profile.userHistory[profile.userHistory.length - 1]
    .caloriesConsumed;
  const isReachedGoal = checkIfTodayCaloriesReachingGoal(totalCaloriesForToday, goalCalories);
  const isExceedingGoal = checkIfTodayCaloriesExceedingGoal(totalCaloriesForToday, goalCalories);
  let tooltipMessage = '';
  const currentPercentage = Math.round(totalCaloriesForToday / (goalCalories / 100));

  if (!isReachedGoal) {
    tooltipMessage = `Consumed ${totalCaloriesForToday} of ${goalCalories} kCal. \n
             Need to get ${(goalCalories - totalCaloriesForToday).toFixed(2)} kCal more`;
  }
  if (isReachedGoal && !isExceedingGoal) {
    tooltipMessage = `Consumed ${totalCaloriesForToday} of ${goalCalories} kCal.`;
  }
  if (isExceedingGoal) {
    tooltipMessage = `You are consuming too much calories! \n
               ${totalCaloriesForToday} of ${goalCalories} kCal`;
  }

  return (
    <Card
      style={{ width: 300 }}
    >
      <Meta
        title={`${foodName} to reach goal calories for today`}
      />

      <Tooltip
        title={tooltipMessage}
      >
        <Row
          className={style.circleBar}
          justify="center"
        >
          <Col>
            {
              isExceedingGoal ? (
                <Progress
                  type="dashboard"
                  percent={currentPercentage}
                  status="exception"
                  color="red"
                />
              )
                : (
                  <Progress
                    type="dashboard"
                    percent={currentPercentage}
                  />
                )
            }
          </Col>
        </Row>
      </Tooltip>
    </Card>
  );
};

FoodToReachGoalComponent.propTypes = {
  foodName: PropTypes.string.isRequired,
};

export default FoodToReachGoalComponent;
