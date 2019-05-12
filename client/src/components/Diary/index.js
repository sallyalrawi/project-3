import React, { Component } from 'react';
import { getDiary } from '../../api';

class Diary extends Component {
  state = { diary: [] };

  componentDidMount() {
    this.loadDiary(this.props.userId);
  }

  async loadDiary(userId) {
    try {
      const response = await getDiary(userId);
      this.setState({ diary: response.data });
      console.log(this.state.diary);
    } catch (error) {
      throw error;
    }
  }
  render() {
    return <h1>Diary</h1>;
  }
}

export default Diary;
