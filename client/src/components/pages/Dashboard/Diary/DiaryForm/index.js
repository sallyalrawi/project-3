import React, { Fragment } from 'react';
import { Card, Button, Modal, Container } from 'react-bootstrap';
import ModalSearchbar from './ModalSearchbar';
import { formatDate } from '../../../../../helpers';
import './style.css';
import { Form } from 'react-bootstrap';

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
            <Button id={entry.id} variant="danger" className="deletefood">
              delete this food
            </Button>
          </div>
        </div>
      );
    }
    return false;
  });

const DiaryForm = props => (
  <Fragment>
    <Button variant="danger btn-block searchbutton" onClick={props.handleShow}>
      Search for a food
    </Button>
    <div className="directionstext">
      {' '}
      or manually enter the information below
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

    <div className="formWrapper">
      <div className="formContain">
        <Form className="mealForm" onSubmit={props.handleDiarySubmit}>
          <Form.Group className="logRow" controlId="meal">
            <Form.Label className="loglabel">Meal</Form.Label>
            <Form.Control
              required
              name="meal"
              type="text"
              value={props.meal}
              onChange={props.handleChange}
              placeholder="Meal"
            />
          </Form.Group>

          <Form.Group className="logRow" controlId="description">
            <Form.Label className="loglabel">Description</Form.Label>
            <Form.Control
              name="description"
              type="description"
              onChange={props.handleChange}
              value={props.description}
              placeholder="Description"
            />
          </Form.Group>

          <Form.Group className="logRow" controlId="calories">
            <Form.Label className="loglabel">Calories</Form.Label>
            <Form.Control
              name="calories"
              type="calories"
              onChange={props.handleChange}
              value={props.calories}
              placeholder="Calories"
            />
          </Form.Group>

          <Button
            variant="danger"
            className="mealSubmit btn btn-block"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>

    <div className="row diaryRowHeader">
      <div className="col-md-3 headerMeal">Meal</div>
      <div className="col-md-3 headerDescr">Description</div>
      <div className="col headerCal">Calories</div>
    </div>

    <div>{renderDiary(props.diary)}</div>
  </Fragment>
);

export default DiaryForm;
