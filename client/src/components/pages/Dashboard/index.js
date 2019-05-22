import React, { Component } from 'react';
import Calories from '../../../components/pages/Dashboard/Calories';
import Weight from '../../../components/pages/Dashboard/Weight';
import Diary from '../../../components/pages/Dashboard/Diary';
import Points from '../../../components/pages/Dashboard/Points';
import axios from 'axios';

import {
  getUser,
  updateUser,
  getWeight,
  postWeight,
  getDiary,
  postDiary
} from '../../../api';
import {
  caloriesMale,
  caloriesFemale,
  currentWeight,
  formatDate
} from '../../../helpers';
import './style.css';

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

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
    calories: 0,
    foodKeyword: '',
    cardHeader: '',
    foodsList: [],
    show: false
  };

  componentDidMount() {
    this.loadUser(this.props.userId);
    this.loadWeight(this.props.userId);
    this.loadDiary(this.props.userId);
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
      const { diary } = this.state;
      let { userCalories } = this.state;
      this.updateCalories(diary, userCalories);
      diary.forEach(entry => {
        const today = formatDate(new Date(Date.now()).toString());
        const diaryDate = formatDate(new Date(entry.createdAt).toString());
        if (diaryDate === today) {
          userCalories -= entry.calories;
        }
      });
      this.setState({ userCalories });
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
    let { points } = this.state;
    postWeight(userId, { weight });
    this.setState({ weight: '' });
    this.loadWeight(userId);
    getWeight(userId).then(response => {
      this.setState({
        currentWeight: currentWeight(response.data),
        previousWeights: response.data
      });
      this.calculateCalories(this.state);
    });
    points += 25;
    updateUser(userId, { points }).then(res =>
      getUser(userId).then(response => {
        const { points } = response.data[0];
        this.setState({ points });
      })
    );
  };

  handleDiarySubmit = e => {
    e.preventDefault();
    const { userId } = this.state;
    let { points, userCalories } = this.state;
    postDiary(userId, this.state);
    this.setState({ meal: '', description: '', calories: '' });
    points += 5;
    updateUser(userId, { points }).then(res => {
      getUser(userId).then(response => {
        let { points } = response.data[0];
        this.setState({ points });
      });
      getDiary(userId).then(response => {
        const diary = response.data;
        const newEntry = diary.length - 1;
        userCalories -= diary[newEntry].calories;
        this.setState({ diary, userCalories });
      });
    });
  };

  updateCalories = (diary, userCalories) => {
    diary.forEach(entry => {
      const today = formatDate(new Date(Date.now()).toString());
      const diaryDate = formatDate(new Date(entry.createdAt).toString());
      if (diaryDate === today) {
        userCalories -= entry.calories;
      }
    });
    this.setState({ userCalories });
  };

  getFood = async foodKeyword => {
    try {
      const response = await axios.get(
        `https://api.nal.usda.gov/ndb/search/?format=json&q=${foodKeyword}&sort=n&max=25&offset=0&api_key=6fDIrXqchfLy0iPmxZD8eSYlduVoCjOxkGhaUsoH`
      );

      const foodsListData = response.data.list.item;
      const foodsArray = foodsListData.map(function(data) {
        return { name: data.name, serving: data.unit, id: data.ndbno };
      });
      this.setState({ foodsList: foodsArray });
    } catch (error) {
      console.error(error);
    }
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    const { foodKeyword } = this.state;
    if (foodKeyword === '') {
      console.error('error invalid food name');
    }
    this.getFood(foodKeyword);

    this.setState({ cardHeader: foodKeyword, foodKeyword: '' });
  };

  handleSearchChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSearchClick = event => {
    const foodID = event.target.id;

    this.getFacts(foodID);
    alert('food added');
    this.setState({ meal: '', description: '', calories: '' });
  };

  getFacts = async foodID => {
    try {
      const response = await axios.get(
        `https://api.nal.usda.gov/ndb/V2/reports?ndbno=${foodID}&type=b&format=json&api_key=6fDIrXqchfLy0iPmxZD8eSYlduVoCjOxkGhaUsoH`
      );
      const nutrientList = response.data.foods[0].food.nutrients;
      const foodClicked = response.data.foods[0].food.desc.name;
      const caloriesArr = nutrientList.filter(function(el) {
        return el.name === 'Energy' && el.unit === 'kcal';
      });
      const calories = caloriesArr[0].value;
      const servingUnit = caloriesArr[0].measures[0].label;
      const servingQty = caloriesArr[0].measures[0].qty;
      const description = servingQty + servingUnit;

      // this.props.modalSubmit({ meal: foodClicked, description: description, calories: calories })
      // postDiary(this.props.userId, this.state);
      this.setState(
        { calories: calories, description: description, meal: foodClicked },
        () => {
          this.modalSubmit(this.state);
        }
      );
    } catch {
      console.error('error getting facts');
    }
  };

  modalSubmit = data => {
    const { userId } = this.state;
    let { points, userCalories } = this.state;
    postDiary(userId, data);
    this.setState({ meal: '', description: '', calories: '' });
    points += 5;
    updateUser(userId, { points }).then(res => {
      getUser(userId).then(response => {
        let { points } = response.data[0];
        this.setState({ points });
      });
      getDiary(userId).then(response => {
        const diary = response.data;
        const newEntry = diary.length - 1;
        userCalories -= diary[newEntry].calories;
        this.setState({ diary, userCalories });
      });
    });
  };

  render() {
    return (
      <div className="dashBodyContent">
        <div className="row dash-container container-fluid mx-0 px-0 mt-3">
          <div className="col-md-5 leftCol">
            <div className="row">
              <div className="col ">
                <div className="card cardLook">
                  <div className="card-body">
                    <Calories userCalories={this.state.userCalories} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="card cardLook">
                  <div className="card-body">
                    <Weight
                      handleWeightSubmit={this.handleWeightSubmit}
                      handleChange={this.handleChange}
                      weight={this.state.weight}
                      previousWeights={this.state.previousWeights}
                      currentWeight={this.state.currentWeight}
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
          <div className="col-md-7">
            <div className="card cardLook">
              <div className="card-body">
                <Diary
                  meal={this.state.meal}
                  description={this.state.description}
                  calories={this.state.calories}
                  handleChange={this.handleChange}
                  handleDiarySubmit={this.handleDiarySubmit}
                  modalSubmit={this.modalSubmit}
                  getFacts={this.getFacts}
                  getFood={this.getFood}
                  handleClose={this.handleClose}
                  handleSearchChange={this.handleSearchChange}
                  handleSearchClick={this.handleSearchClick}
                  handleSearchSubmit={this.handleSearchSubmit}
                  handleShow={this.handleShow}
                  foodKeyword={this.state.foodKeyword}
                  foodsList={this.state.foodsList}
                  cardHeader={this.state.cardHeader}
                  show={this.state.show}
                  diary={this.state.diary}
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
