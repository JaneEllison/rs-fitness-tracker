import React from 'react';
import {
  Card, Col, Progress, Row, Tooltip,
} from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import style from './FoodToReachGoal.module.css';
import profileSelector from '../../../../store/Selectors/profileSelector';
import checkIfTodayCaloriesExceedingGoal from '../../../../utils/checkIfTodayCaloriesExceedingGoal';

const FoodToReachGoalComponent = ({ foodName, foodData }) => {
  const profile = useSelector(profileSelector);
  const { Meta } = Card;
  const { goalCalories } = profile.userGoals;
  const totalCaloriesForToday = profile.userHistory[profile.userHistory.length - 1]
    .caloriesConsumed;
  const isExceedingGoal = checkIfTodayCaloriesExceedingGoal(totalCaloriesForToday, goalCalories);
  const searchedFoodPercentage = Math.round(foodData.nf_calories / (goalCalories / 100));
  const currentPercentage = Math.round(totalCaloriesForToday / (goalCalories / 100));
  const totalPercentage = searchedFoodPercentage + currentPercentage;

  return (
    <Card
      style={{ width: 300 }}
    >
      <Meta
        title={`${foodName} to reach goal calories for today`}
      />

      <Tooltip
        title={isExceedingGoal ? `You are consuming too much calories! \n
               ${totalCaloriesForToday} of ${goalCalories} kCal`
          : `Consumed ${totalCaloriesForToday} of ${goalCalories} kCal. \n
             Need to get ${(goalCalories - totalCaloriesForToday).toFixed(2)} kCal more`}
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
                  success={{ percent: 1, strokeColor: 'white' }}
                  status="exception"
                  color="red"
                />
              )
                : (
                  <Progress
                    type="dashboard"
                    success={{ percent: currentPercentage }}
                    percent={totalPercentage}
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
  foodData: PropTypes.shape({
    nf_calories: PropTypes.number.isRequired,
  }).isRequired,
};

export default FoodToReachGoalComponent;
