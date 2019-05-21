import React, { Fragment } from 'react';

const Calories = props => (
  <Fragment>
    <h1>Daily Calories Remaining: {props.userCalories}</h1>
  </Fragment>
);

export default Calories;
