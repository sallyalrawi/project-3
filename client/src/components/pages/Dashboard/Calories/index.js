import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';

const Calories = props => (
  <Fragment>
    {/* <h1>Daily Calories Remaining: {props.userCalories}</h1> */}

    <div className="row">
    <div className="col">
  <div className="currentWeight">{props.userCalories}</div>
  <div className="currentText">DAILY CALORIES REMAINING</div>
  </div>
  <div className="col diarybutton">
    <div className="input-group-append float-right">
    {/* <Button 
    href="/rewards"
    className="float-right"
    >
    Add to Diary</Button> */}
  </div>
  </div>
  </div>


  </Fragment>
);

export default Calories;
