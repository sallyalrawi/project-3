/* eslint-disable import/no-duplicates */
import React, { Component, Fragment } from 'react'
// eslint-disable-next-line no-unused-vars
import DiaryForm from "../../../../components/DiaryForm/"
// import Foods from "../../components/Foods/"
import axios from "axios";
import { Card, Button } from "react-bootstrap"

//https://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=DEMO_KEY


class DiarySearch extends Component {
  state = {
    foodKeyword: "",
    foodsList: [],
    cardHeader: ""
  };

  getFood = (foodKeyword) => {
    axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${foodKeyword}&sort=n&max=25&offset=0&api_key=6fDIrXqchfLy0iPmxZD8eSYlduVoCjOxkGhaUsoH`, {

    })
      .then((res) => {
        let foodsListData = res.data.list.item;
        // NOTE here we have an array of objects 
        const foodsArray = foodsListData.map(function (data) {

          return { name: data.name, id: data.ndbno }
        });

        console.log(foodsListData);
        this.setState({ foodsList: foodsArray })
      }).catch(error => {
        console.error(error);
        alert("Please Enter A Valid Food Name")
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { foodKeyword, value } = this.state;
    if (foodKeyword === '') {
      return alert('Please Enter A Valid Food Name');
    }
    this.searchFoods(foodKeyword);

    this.setState({ cardHeader: foodKeyword, foodKeyword: "" });
  };

  async searchFoods(foodKeyword) {
    try {
      const response = await this.getFood(foodKeyword);

    } catch (error) {
      throw error;
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    this.setState({ [name]: value })
  }

  handleClick = (event) => {
    console.log(event.target.id)
  }

  // saveFood = e => {
  //     const {index} = e.target.dataset;
  //     const {foodsList} = this.state;
  //     // postFood(foodsList[index]);
  // };


  render() {
    const { foodKeyword, foodsList, cardHeader } = this.state;
    return (
      <Fragment>
        <DiaryForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          // handleClick={this.handleClick}
          value={foodKeyword}
        />

        <Card.Title><b>Searched:{cardHeader}</b></Card.Title>

        {foodsList.map(foodItem => {
          console.log(foodItem)
          return (

            <Card key={foodItem.id} style={{ width: '18rem' }}>
              <Card.Body>

                <Card.Text  >{foodItem.name}</Card.Text>
                <Button onClick={this.handleClick} id={foodItem.id} variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          )
        })}

        {/* <Foods
        foodslist={this.state.foodsList}
        handleFoodsList={this.saveFood}
        /> */}
      </Fragment>
    );
  }
}

export default DiarySearch;
