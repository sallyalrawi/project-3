import React, { Component, Fragment } from 'react';
import { postDiary } from '../../../../../api';

class DiaryForm extends Component {
  state = { meal: '', description: '', calories: '' };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    postDiary(this.props.userId, this.state);
    this.setState({ meal: '', description: '', calories: '' });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="meal">Meal</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="meal"
            value={this.state.meal}
          />
          <label htmlFor="description">Description</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            value={this.state.description}
          />
          <label htmlFor="calories">Calories</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="calories"
            value={this.state.calories}
          />
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default DiaryForm;