import React, { Fragment } from 'react';
import DiarySearchModal from './DiarySearchModal'



const DiaryForm = props => (
  <Fragment>
    <DiarySearchModal
      meal={props.meal}
      description={props.description}
      calories={props.calories}
      handleChange={props.handleChange}
      handleDiarySubmit={props.handleDiarySubmit}
      modalSubmit={props.modalSubmit}
      getFacts={props.getFacts}
      getFood={props.getFood}
      handleClose={props.handleClose}
      handleSearchChange={props.handleSearchChange}
      handleSearchClick={props.handleSearchClick}
      handleSearchSubmit={props.handleSearchSubmit}
      handleShow={props.handleShow}
      foodKeyword={props.foodKeyword}
      foodsList={props.foodsList}
      cardHeader={props.cardHeader}
      show={props.show}
    />
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
