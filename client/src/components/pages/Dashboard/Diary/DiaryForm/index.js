import React, { Fragment } from 'react';
import { Card, Button, Modal, Container } from "react-bootstrap"
import ModalSearchbar from "./ModalSearchbar/index"


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

    <div>{props.diary.map(entry => {
            console.log(entry)
            return (

              
                <div className= "row" key={entry.id}>

                <div className="col-sm" >
                  <p>{entry.meal}</p>
                </div>
                <div className="col-sm">
                  <p>{entry.description}</p>
                </div>
                <div className="col-sm">
                  <p>{entry.calories}</p>
                </div>
                {/* ""{entry.description}""{entry.calories}Calories</p> */}
                <Button  id={entry.id} variant="primary">delete this food</Button>
                </div>
              
               )
              })}
              
</div>
  </Fragment>
);

export default DiaryForm;
