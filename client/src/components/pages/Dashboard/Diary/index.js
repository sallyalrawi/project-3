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
    />
  </div>
);

export default Diary;