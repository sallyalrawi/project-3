import React, { Component } from 'react';
import Card from './Card';
import { getRewards, purchaseReward, getUser } from '../../api';

const renderCards = (rewards, handlePurchase) =>
  rewards.map(reward => (
    <Card key={reward.id} reward={reward} handlePurchase={handlePurchase} />
  ));

class Rewards extends Component {
  state = {
    rewards: []
  };

  componentDidMount() {
    this.loadRewards(this.props.userId);
  }

  async loadRewards() {
    try {
      const response = await getRewards();
      this.setState({ rewards: response.data });
    } catch (error) {
      throw error;
    }
  }

  handlePurchase = async e => {
    const { points } = e.target.dataset;
    try {
      purchaseReward(this.props.userId, { points });
      const response = await getUser(this.props.userId);
      console.log(response.data);
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <div className="card-group">
        {renderCards(this.state.rewards, this.handlePurchase)}
      </div>
    );
  }
}

export default Rewards;
