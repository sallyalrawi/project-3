import React, { Fragment } from 'react';

const Weight = props => (
  <Fragment>
    <h1>Weight</h1>
    <form onSubmit={props.handleWeightSubmit}>
      <label htmlFor="weight">Weight</label>
      <input
        type="text"
        name="weight"
        onChange={props.handleChange}
        value={props.weight}
      />
      <button type="submit">Submit</button>
    </form>
  </Fragment>
);

export default Weight;
