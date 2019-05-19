import React, { Component } from 'react';
import './style.css';
import Card from './Card';
import Navigation from '../../../components/features/Navigation';
import Footer from '../../../components/features/Footer';
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
    this.loadUser(this.props.currentUser.email);
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
    const { email } = this.props.currentUser;
    const { cost } = e.target.dataset;
    const { points } = this.state;
    const total = points - cost;
    if (total >= 0) {
      try {
        purchaseReward(email, { points: total });
        const response = await getUser(email);
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
          <Navigation />
          <h1>
            Name: {this.state.user_name} Points: {this.state.points}{' '}
            {this.state.message}
          </h1>
          <div className="card-group">
            {renderCards(this.state.rewards, this.handlePurchase)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Rewards;
