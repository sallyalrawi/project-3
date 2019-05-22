import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';

const Points = props => (
  <div className="row">
    <div className="col">
      <div className="currentWeight">{props.points}</div>
      <div className="currentText">REWARDS BALANCE</div>
    </div>
    <div className="col">
      <div className="input-group-append float-right">
        <Button className="redeemrewards" variant="danger" href="/rewards">
          Redeem Rewards
        </Button>
      </div>
    </div>
  </div>
);

export default Points;
