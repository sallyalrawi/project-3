<<<<<<< HEAD
import React, { Component, Fragment } from 'react';
import { postDiary } from '../../../../../api';
import DiarySearchModal from './DiarySearchModal'
=======
import React, { Fragment } from 'react';
>>>>>>> 34f77f49e31a9fa6fb412b980bf13ea9b5cea542

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

<<<<<<< HEAD
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    postDiary(this.props.userId, this.state);
    this.setState({ meal: '', description: '', calories: '' });
  
  }

  modalSubmit = (data) => {
   
    postDiary(this.props.userId, data);
      
  }

  render() {
    return (
      <Fragment>
        <DiarySearchModal  
        modalSubmit={this.modalSubmit}
        />
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
=======
export default DiaryForm;
>>>>>>> 34f77f49e31a9fa6fb412b980bf13ea9b5cea542
