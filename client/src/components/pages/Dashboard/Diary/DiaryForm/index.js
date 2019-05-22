import React, { Fragment } from 'react';
import { Card, Button, Modal, Container } from 'react-bootstrap';
import ModalSearchbar from './ModalSearchbar';
import { formatDate } from '../../../../../helpers';
import './style.css';

const renderDiary = diary =>
  diary.map(entry => {
    const today = formatDate(new Date(Date.now()).toString());
    const diaryDate = formatDate(new Date(entry.createdAt).toString());
    if (diaryDate === today) {
      return (
        <div className="row diaryBody" key={entry.id}>
          <div className="col-sm meal">
            <p>{entry.meal}</p>
          </div>
          <div className="col-sm descr">
            <p>{entry.description}</p>
          </div>
          <div className="col-sm cal">
            <p>{entry.calories}</p>
          </div>
          <div>
            <Button id={entry.id} variant="primary">
              delete this food
            </Button>
          </div>
        </div>
      );
    }
  });

const DiaryForm = props => (
  <Fragment>
    <Button variant="danger btn-block searchbutton" onClick={props.handleShow}>
      Search for a food
    </Button>
    <div className="directionstext">
      {' '}
      or manually enter the food information below
    </div>
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Food Search</Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}
      >
        <Container>
          <ModalSearchbar
            handleChange={props.handleSearchChange}
            handleSubmit={props.handleSearchSubmit}
            value={props.foodKeyword}
          />
        </Container>
        <Card.Title>
          <b>Searched:{props.cardHeader}</b>
        </Card.Title>

        {props.foodsList.map(foodItem => (
          <Card key={foodItem.id} style={{ width: '18rem' }}>
            <Card.Text>{foodItem.name}</Card.Text>
            <Button
              onClick={props.handleSearchClick}
              id={foodItem.id}
              variant="primary"
            >
              Select this food
            </Button>
          </Card>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

    <form className="mealForm" onSubmit={props.handleDiarySubmit}>
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

    <div className="row diaryRowHeader">
      <div className="col-md-3 headerMeal">Meal</div>
      <div className="col-md-3 headerDescr">Description</div>
      <div className="col headerCal">Calories</div>
    </div>

    <div>
      {renderDiary(props.diary)}
      {/* {props.diary.map(entry => {
        return (
          <div className="row diaryBody" key={entry.id}>
            <div className="col-sm meal">
              <p>{entry.meal}</p>
            </div>
            <div className="col-sm descr">
              <p>{entry.description}</p>
            </div>
            <div className="col-sm cal">
              <p>{entry.calories}</p>
            </div>
            <div>
              <Button id={entry.id} variant="primary">
                delete this food
              </Button>
            </div>
          </div>
        );
      })} */}
    </div>
  </Fragment>
);

export default DiaryForm;
