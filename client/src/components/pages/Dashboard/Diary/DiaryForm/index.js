import React, { Fragment } from 'react';
import DiarySearchModal from './DiarySearchModal'
import { Card, Button, Modal, Container } from "react-bootstrap"
import ModalSearchbar from "./DiarySearchModal/ModalSearchbar/index"


const DiaryForm = props => (
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

    
    <form onSubmit={props.handleDiarySubmit}>
      <label htmlFor="meal">Meal</label>
      <input
        onChange={props.handleChange}
        type="text"
        name="meal"
        value={props.meal}
      />
      <label htmlFor="description">Description</label>
      <input
        onChange={props.handleChange}
        type="text"
        name="description"
        value={props.description}
      />
      <label htmlFor="calories">Calories</label>
      <input
        onChange={props.handleChange}
        type="text"
        name="calories"
        value={props.calories}
      />
      <button type="submit">Submit</button>
    </form>
  </Fragment>
);

export default DiaryForm;
