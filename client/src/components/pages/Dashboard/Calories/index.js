import React, { Fragment } from 'react';
import './style.css';

const Calories = props => (
  <Fragment>
    <div className="row">
      <div className="col">
        <div className="currentWeight">{props.userCalories}</div>
        <div className="currentText">DAILY CALORIES REMAINING</div>
      </div>
      <div className="col diarybutton">
        <div className="input-group-append float-right" />
      </div>
    </div>
  </Fragment>
);

export default Calories;
