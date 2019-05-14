/* eslint-disable import/no-duplicates */
import React, { Component, Fragment } from 'react'
// eslint-disable-next-line no-unused-vars
import DiaryForm from "../../components/DiaryForm/"
import Foods from "../../components/Foods/"


//https://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=DEMO_KEY


class App extends Component {
  state = {
    foodKeyword: null,
    foodsList:[]
  };

  getFood = (event) => {
    event.preventDefault();
    const {foodKeyword} = this.state;
    if(foodKeyword === '') {
      return alert ('Please Enter A Valid Food Name');
    }
    this.searchFoods(foodKeyword);
    this.setState({foodKeyword:'', foodsList:[]});
  };
  
  async searchFoods(foodKeyword) {
    try{
      const response = await getFood(foodKeyword);
      this.setState({
        foodsList:formatAPIResults(response.data.list.items)
      });
    } catch(error) {
      throw error;
    }
  }

  saveFood = e => {
      const {index} = e.target.dataset;
      const {foodsList} = this.state;
      postFood(foodsList[index]);
  };

  render() {
    return (
      <Fragment>
        <DiaryForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        value={this.state.foodKeyword} />

        <Foods
        foodslist={this.state.foodsList}
        handleFoodsList={this.saveFood}
        />
      </Fragment>
    );
  }
}

export default App
