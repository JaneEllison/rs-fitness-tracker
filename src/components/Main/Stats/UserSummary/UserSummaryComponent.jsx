import React from 'react';
import style from './../StatsComponent.module.css';

function UserSummaryComponent ({
  summary: {
    age,
    sex,
    height,
    weight,
  },
  goal: {
    goalWeight,
    goalCalories
  }
}) {
  return (
    <ul className={style.statsUserSummaryComponent}>
      <li key={'userSummaryAge'}>
        <h3>Age:</h3>
        <h3>{ age } years</h3>
      </li>
      <li key={'userSummarySex'}>
        <h3>Sex:</h3>
        <h3>{ sex }</h3>
      </li>
      <li key={'userSummaryHeight'}>
        <h3>Height:</h3>
        <h3>{ height } cm</h3>
      </li>
      <li key={'userSummaryWeight'}>
        <h3>Weight:</h3>
        <h3>{ weight } kg</h3>
      </li>
      <li key={'userSummaryGoalWeight'}>
        <h3>Goal weight:</h3>
        <h3>{ goalWeight === false ? "none" : `${goalWeight} kg` }</h3>
      </li>
      <li key={'userSummaryGoalCalories'}>
        <h3>Goal kcal:</h3>
        <h3>{ goalCalories === false ? "none" : `${goalCalories} / day` }</h3>
      </li>
    </ul>
  )
}

export default UserSummaryComponent;