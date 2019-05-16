import React from 'react';

const Card = ({ reward, handlePurchase }) => (
  <div className="card">
    <img src={reward.image} className="card-img-top" alt={reward.title} />
    <div className="card-body">
      <h5 className="card-title">{reward.title}</h5>
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
        data-points={reward.points}
        onClick={handlePurchase}
      >
        Buy
      </button>
    </div>
  </div>
);

export default Card;
