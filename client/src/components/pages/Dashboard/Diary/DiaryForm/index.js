import React, { Fragment } from 'react';

const DiaryForm = props => (
  <Fragment>
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
