import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';



const Points = props => (
              <div className="dashPoints container-fluid">
              <h1 className="pointsText">Rewards Balance: <strong className="pointsTotal">{props.points}</strong></h1>
              </div>
        );
    
 export default Points;