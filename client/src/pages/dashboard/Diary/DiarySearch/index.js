/* eslint-disable import/no-duplicates */
import React, { Component, Fragment } from 'react'
// eslint-disable-next-line no-unused-vars
import DiaryForm from "../../../../components/DiaryForm/"
// import Foods from "../../components/Foods/"
import axios from "axios";
import { Card, Button, Modal } from "react-bootstrap"

//https://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=DEMO_KEY


class DiarySearch extends Component {
  state = {
    foodKeyword: "",
    foodsList: [],
    cardHeader: "",
    calories: null,
    units: ""
  };

  getFood = async (foodKeyword) => {
    try {
      const response = await axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${foodKeyword}&sort=n&max=25&offset=0&api_key=6fDIrXqchfLy0iPmxZD8eSYlduVoCjOxkGhaUsoH`);

      const foodsListData = response.data.list.item;
      console.log(response)
      // NOTE here we have an array of objects 
      const foodsArray = foodsListData.map(function (data) {
        return { name: data.name, id: data.ndbno }
      });

      // console.log(foodsListData);
      this.setState({ foodsList: foodsArray })

    } catch (error) {
      alert('Please Enter A Valid Food Name')
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { foodKeyword } = this.state;
    if (foodKeyword === '') {
      return alert('Please Enter A Valid Food Name');
    }
    this.getFood(foodKeyword);

    this.setState({ cardHeader: foodKeyword, foodKeyword: "" });
  };


  handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value)
    this.setState({ [name]: value })
  }

  handleClick = (event) => {
    // console.log(event.target.id)
    const foodID = event.target.id;

    this.getFacts(foodID)
  }

  getFacts = async (foodID) => {
    try {
      const response = await axios.get(`https://api.nal.usda.gov/ndb/reports/?ndbno=${foodID}&type=b&format=json&api_key=6fDIrXqchfLy0iPmxZD8eSYlduVoCjOxkGhaUsoH`);
     console.log(response.data.report.food.nutrients)
      // const calories = (response.data.report.food.nutrients[0].value)
      // const units = (response.data.report.food.nutrients[0].unit)
      // // console.log(calories)
      // this.setState({ calories, units }, () => {
      //   console.log(this.state)
      // })
    } catch {
      console.error("error")
    }
  }
  render() {
    const { foodKeyword, foodsList, cardHeader } = this.state;
    return (
      <Fragment>
        <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Food Search</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <DiaryForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          // handleClick={this.handleClick}
          value={foodKeyword}
        />

        <Card.Title><b>Searched:{cardHeader}</b></Card.Title>

        {foodsList.map(foodItem => {
          // console.log(foodItem)
          return (

            <Card key={foodItem.id} style={{ width: '18rem' }}>
              <Card.Body>

                <Card.Text  >{foodItem.name}</Card.Text>
                <Button onClick={this.handleClick} id={foodItem.id} variant="primary">Select this food</Button>
              </Card.Body>
            </Card>

          )
        })}

  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>;
        
      </Fragment>
    );
  }
}

export default DiarySearch;
