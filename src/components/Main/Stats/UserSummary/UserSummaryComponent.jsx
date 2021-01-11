import React from 'react';

export default function (props) {
  const {
    age,
    sex,
    height,
    weight,
    goalWeight
  } = props.userData;
  
  return (
    <ul>
      <li>Age: { age }</li>
      <li>Sex: { sex }</li>
      <li>Height: { height }</li>
      <li>Weight: { weight }</li>
      <li>Goal Weight: { goalWeight }</li>
    </ul>
  )
}
