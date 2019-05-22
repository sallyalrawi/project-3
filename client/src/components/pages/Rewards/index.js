import React, { Component } from 'react';
import './style.css';
import Card from './Card';
import { getRewards, purchaseReward, getUser } from '../../../api';

const renderCards = (rewards, handlePurchase) =>
  rewards.map(reward => (
    <Card key={reward.id} reward={reward} handlePurchase={handlePurchase} />
  ));

class Rewards extends Component {
  state = {
    rewards: [],
    user_name: '',
    points: 0,
    message: ''
  };

  componentDidMount() {
    this.loadRewards();
    this.loadUser(this.props.currentUser.uid);
  }

  componentDidUpdate() {
    this.loadUser(this.props.currentUser.uid);
  }

  async loadRewards() {
    try {
      const response = await getRewards();
      this.setState({ rewards: response.data });
    } catch (error) {
      throw error;
    }
  }

  loadUser = async userId => {
    try {
      const response = await getUser(userId);
      const { user_name, points } = response.data[0];
      this.setState({
        user_name,
        points
      });
    } catch (error) {
      throw error;
    }
  };

  handlePurchase = async e => {
    const { uid } = this.props.currentUser;
    const { cost } = e.target.dataset;
    const { points } = this.state;
    const total = points - cost;
    if (total >= 0) {
      try {
        purchaseReward(uid, { points: total });
        const response = await getUser(uid);
        const { points } = response.data[0];
        this.setState({ points, message: 'Purchase Successful!' });
      } catch (error) {
        throw error;
      }
    } else {
      this.setState({ message: 'Not enough points!' });
    }
  };

  render() {
    return (
      <div className="rewardbody">
        <div className="rewardBodyContent">
          <div className="title">
            <h1>
              {this.state.user_name}'s CashCal Rewards Balance:{' '}
              <strong className="pointsTotal">{this.state.points}</strong>{' '}
              {this.state.message}
            </h1>
          </div>
          <div className="rewardCardWrapper container-fluid">
            <div className="card-group">
              {renderCards(this.state.rewards, this.handlePurchase)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Rewards;
