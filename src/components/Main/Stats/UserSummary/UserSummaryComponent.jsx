import React from 'react';

function UserSummaryComponent ({
  summary: {
    age,
    sex,
    height,
    weight,
  },
  goalWeight
}) {  
  return (
    <ul>
      <li key={'userSummaryAge'}>
        Age: { age } years
      </li>
      <li key={'userSummarySex'}>
        Sex: { sex }
      </li>
      <li key={'userSummaryHeight'}>
        Height: { height } cm
      </li>
      <li key={'userSummaryWeight'}>
        Weight: { weight } kg
      </li>
      <li key={'userSummaryGoal'}>
        Goal: { goalWeight ? `${goalWeight} kg` : "none" }
      </li>
    </ul>
  )
}

export default UserSummaryComponent;