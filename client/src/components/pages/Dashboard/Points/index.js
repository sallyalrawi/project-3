import React from 'react';
import './style.css';

const Points = props => (
  <div className="rewardCardWrapper container-fluid">
    <h1>Points Balance: {props.points} </h1>
  </div>
);

export default Points;
