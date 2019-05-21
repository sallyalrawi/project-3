/* eslint-disable import/no-duplicates */
import React, { Component, Fragment } from 'react'
// import { postDiary } from '../../../../../api';
import ModalSearchbar from './ModalSearchbar'
import axios from "axios";
import { Card, Button, Modal, Container } from "react-bootstrap"

//https://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=DEMO_KEY


const DiarySearchModal = props => {
  // constructor(props, context) {
  //   super(props, context);

  // this.handleShow = this.handleShow.bind(this);
  // this.handleClose = this.handleClose.bind(this);

  // this.state = {
  //   foodKeyword: "",
  //   foodsList: [],
  //   cardHeader: "",
  //   calories: null,
  //   unit: "",
  //   servingQty: null,
  //   servingUnit: "",
  //   show: false,
  //   foodClicked:"",
  //   description:""
  // };

  // }








  // const { meal, description, calories, unit, servingQty, servingUnit, foodKeyword, foodsList, cardHeader } = this.state;
  return (
    <Fragment>

      <Button variant="primary" onClick={props.handleShow}>
        Search for a food
        </Button>
      <h3> or manually enter the food information below</h3>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Food Search</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ 'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto' }}>
          <Container>
            <ModalSearchbar
              handleChange={props.handleSearchChange}
              handleSubmit={props.handleSearchSubmit}
              // handleClick={this.handleClick}
              value={props.foodKeyword}
            />
          </Container>
          <Card.Title><b>Searched:{props.cardHeader}</b></Card.Title>

          {props.foodsList.map(foodItem => {
            // console.log(foodItem)
            return (

              <Card key={foodItem.id} style={{ width: '18rem' }}>


                <Card.Text  >{foodItem.name}</Card.Text>
                <Button onClick={props.handleSearchClick} id={foodItem.id} variant="primary">Select this food</Button>

              </Card>

            )
          })}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
            </Button>

        </Modal.Footer>
      </Modal>

    </Fragment>
    //   )
  )
}


export default DiarySearchModal;
