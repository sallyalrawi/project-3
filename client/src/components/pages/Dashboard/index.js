import React, { Component } from 'react';
import Calories from '../../../components/pages/Dashboard/Calories';
import Weight from '../../../components/pages/Dashboard/Weight';
import Diary from '../../../components/pages/Dashboard/Diary';
import Points from '../../../components/pages/Dashboard/Points';
// import Navigation from '../../../components/features/Navigation';
// import Footer from '../../../components/features/Footer';
import {
  getUser,
  getWeight,
  postWeight,
  getDiary,
  postDiary
} from '../../../api';
import './style.css';

const caloriesMale = user =>
  66 + 6.2 * user.currentWeight + 12.7 * user.height - 6.76 * user.age;

const caloriesFemale = user =>
  655.1 + 4.35 * user.currentWeight + 4.7 * user.height - 4.7 * user.age;

const currentWeight = weights => {
  const index = weights.length;
  return weights[index - 1].weight;
};

class Dashboard extends Component {
  state = {
    userId: this.props.userId,
    user_name: '',
    gender: '',
    age: 0,
    height: 0,
    points: 0,
    currentWeight: 0,
    previousWeights: [],
    userCalories: 0,
    weight: '',
    diary: [],
    meal: '',
    description: '',
    calories: ''
  };

  componentDidMount() {
    this.loadUser(this.state.userId);
    this.loadWeight(this.state.userId);
    this.loadDiary(this.state.userId);
  }

  loadUser = async userId => {
    try {
      const response = await getUser(userId);
      const { user_name, gender, age, height, points } = response.data[0];
      this.setState({
        user_name,
        gender,
        age: parseInt(age),
        height: parseInt(height),
        points: parseInt(points)
      });
    } catch (error) {
      throw error;
    }
  };

  loadWeight = async userId => {
    try {
      const response = await getWeight(userId);
      this.setState({
        currentWeight: currentWeight(response.data),
        previousWeights: response.data
      });
      this.calculateCalories(this.state);
    } catch (error) {
      throw error;
    }
  };

  async loadDiary(userId) {
    try {
      const response = await getDiary(userId);
      this.setState({ diary: response.data });
    } catch (error) {
      throw error;
    }
  }

  calculateCalories = user =>
    user.gender === 'male'
      ? this.setState({ userCalories: Math.round(caloriesMale(user)) })
      : this.setState({ userCalories: Math.round(caloriesFemale(user)) });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleWeightSubmit = e => {
    e.preventDefault();
    const { userId, weight } = this.state;
    postWeight(userId, { weight });
    this.setState({ weight: '' });
    this.loadWeight(userId);
    getWeight(userId).then(response =>
      this.setState({
        currentWeight: currentWeight(response.data),
        previousWeights: response.data
      })
    );
  };

  handleDiarySubmit = e => {
    e.preventDefault();
    const { userId } = this.state;
    postDiary(userId, this.state);
    this.setState({ meal: '', description: '', calories: '' });
    getDiary(userId).then(response => this.setState({ diary: response.data }));
  };

  render() {
    return (
      <div className="dashBodyContent">
        <div className="row">
          <Calories userCalories={this.state.userCalories} />
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <div className="card cardLook">
                  <div className="card-body">
                    <h1>current</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card cardLook">
                  <div className="card-body">
                    <Weight
                      handleWeightSubmit={this.handleWeightSubmit}
                      handleChange={this.handleChange}
                      weight={this.state.weight}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card cardLook">
                  <div className="card-body">
                    <Points points={this.state.points} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card cardLook">
              <div className="card-body">
                <Diary
                  handleChange={this.handleChange}
                  handleDiarySubmit={this.handleDiarySubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
