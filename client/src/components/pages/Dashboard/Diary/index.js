import React from 'react';
import DiaryForm from '../../../../components/pages/Dashboard/Diary/DiaryForm';

const Diary = props => (
  <div>
    <h1>Diary</h1>
    <DiaryForm
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
  </div>
);

export default Diary;
