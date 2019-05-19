import React, { Component } from 'react';
import { getDiary } from '../../../../api';
import DiaryForm from '../../../../components/pages/Dashboard/Diary/DiaryForm';

class Diary extends Component {
  state = { diary: []};

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
    return (
      <div>
      <h1>Diary</h1>
      <DiaryForm userId ={this.props.userId} />
      </div>
      
      )
  }
}

export default Diary;