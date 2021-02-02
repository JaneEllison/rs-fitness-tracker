/* eslint-disable react/prop-types */
import React from 'react';
import style from '../StatsComponent.module.css';

function UserSummaryComponent({
  summary: {
    age,
    sex,
    height,
    weight,
    goal,
  },
}) {
  return (
    <ul className={style.statsUserSummaryComponent}>
      <li key="userSummaryAge">
        <h3>Age:</h3>
        <h3>
          { age }
          {' '}
          years
        </h3>
      </li>
      <li key="userSummarySex">
        <h3>Sex:</h3>
        <h3>{ sex }</h3>
      </li>
      <li key="userSummaryHeight">
        <h3>Height:</h3>
        <h3>
          { height }
          {' '}
          cm
        </h3>
      </li>
      <li key="userSummaryWeight">
        <h3>Weight:</h3>
        <h3>
          { weight }
          {' '}
          kg
        </h3>
      </li>
      <li key="userSummaryGoalCalories">
        <h3>Goal calories:</h3>
        <h3>{ goal === undefined ? 'none' : `${goal} / day` }</h3>
      </li>
    </ul>
  );
}

export default UserSummaryComponent;
