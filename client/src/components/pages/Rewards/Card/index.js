import React from 'react';
import './style.css';

const Card = ({ reward, handlePurchase }) => (
  <div className="col-lg-3 col-sm-6 mb-3">
  <div className="card">
    <img src={reward.image} className="card-img-top cardimg" alt={reward.title} />
    <div className="card-body">
      <h5 className="card-title cardtitle">{reward.title}</h5>
      <p className="card-text">{reward.description}</p>
      <p className="card-text">{reward.points} Points</p>
      <a
        href={reward.link}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link
      </a>
      <button
        className="btn btn-success"
        data-cost={reward.points}
        onClick={handlePurchase}
      >
        Buy
      </button>
    </div>
  </div>
  </div>
);

export default Card;
