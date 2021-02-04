import React from 'react';
import PropTypes from 'prop-types';
import style from '../StatsComponent.module.css';

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
        <h3>Age:</h3>
        <h3>
          { age ? `${age} years` : 'not set' }
        </h3>
      </li>
      <li key="userSummarySex">
        <h3>Gender:</h3>
        <h3>{ gender ? `${gender}` : 'not set' }</h3>
      </li>
      <li key="userSummaryHeight">
        <h3>Height:</h3>
        <h3>
          { height ? `${height} cm` : 'not set' }
        </h3>
      </li>
      <li key="userSummaryWeight">
        <h3>Weight:</h3>
        <h3>
          { weight ? `${weight} kg` : 'not set' }
        </h3>
      </li>
      <li key="userSummaryGoalCalories">
        <h3>Goal calories:</h3>
        <h3>{ goal ? `${goal} / day` : 'not set' }</h3>
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
