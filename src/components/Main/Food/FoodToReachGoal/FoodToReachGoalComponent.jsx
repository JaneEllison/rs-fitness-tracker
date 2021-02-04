import React from 'react';
import {
  Card, Col, Progress, Row, Tooltip,
} from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import style from './FoodToReachGoal.module.css';
// import authSelector from '../../../../store/Selectors/authSelector';
import profileSelector from '../../../../store/Selectors/profileSelector';

const FoodToReachGoalComponent = ({ foodName }) => {
  // const auth = useSelector(authSelector);
  const profile = useSelector(profileSelector);
  const { Meta } = Card;
  const { goalCalories } = profile.userGoals;
  const totalCaloriesForToday = profile.userHistory[profile.userHistory.length - 1]
    .caloriesConsumed;
  // const [percentage, setPercentage] = useState();
  const percentage = Math.round(totalCaloriesForToday / (goalCalories / 100));
  return (
    <Card>
      <Meta
        title={`${foodName} to reach goal calories for today`}
      />
      <Tooltip title={`${totalCaloriesForToday} of ${goalCalories}`}>
        <Row
          className={style.circleBar}
          justify="center"
        >
          <Col>
            <Progress type="circle" percent={percentage} />
          </Col>
        </Row>
      </Tooltip>
    </Card>
  );
};

FoodToReachGoalComponent.propTypes = {
  foodName: PropTypes.number.isRequired,
};

export default FoodToReachGoalComponent;
