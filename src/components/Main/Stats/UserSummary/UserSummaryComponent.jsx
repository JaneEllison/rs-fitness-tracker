import React from 'react';
import PropTypes from 'prop-types';
import statsComponentConstants from '../../../../constants/statsComponentConstants';
import style from '../StatsComponent.module.css';

const {
  GET_STRING,
  AGE_HEADING,
  AGE_UNIT,
  GENDER_HEADING,
  GENDER_UNIT,
  HEIGHT_HEADING,
  HEIGHT_UNIT,
  WEIGHT_HEADING,
  WEIGHT_UNIT,
  GOAL_HEADING,
  GOAL_UNIT,
} = statsComponentConstants;

function UserSummaryComponent({
  summary: {
    age,
    gender,
    height,
    weight,
    goal,
  },
}) {
  return (
    <ul className={style.statsUserSummaryComponent}>
      <li key="userSummaryAge">
        <h3>{AGE_HEADING}</h3>
        <h3>{GET_STRING(age, AGE_UNIT)}</h3>
      </li>
      <li key="userSummarySex">
        <h3>{GENDER_HEADING}</h3>
        <h3>{GET_STRING(gender, GENDER_UNIT)}</h3>
      </li>
      <li key="userSummaryHeight">
        <h3>{HEIGHT_HEADING}</h3>
        <h3>{GET_STRING(height, HEIGHT_UNIT)}</h3>
      </li>
      <li key="userSummaryWeight">
        <h3>{WEIGHT_HEADING}</h3>
        <h3>{GET_STRING(weight, WEIGHT_UNIT)}</h3>
      </li>
      <li key="userSummaryGoalCalories">
        <h3>{GOAL_HEADING}</h3>
        <h3>{GET_STRING(goal, GOAL_UNIT)}</h3>
      </li>
    </ul>
  );
}

UserSummaryComponent.defaultProps = {
  gender: undefined,
  age: undefined,
  height: undefined,
  weight: undefined,
  goal: undefined,
};

UserSummaryComponent.propTypes = {
  summary: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  gender: PropTypes.string,
  age: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  weight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  goal: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default UserSummaryComponent;
