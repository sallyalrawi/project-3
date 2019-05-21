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
      console.log(this.state.diary, "hello");
    } catch (error) {
      throw error;
    }
  }
  render() {
    return (
      <div>
      <h1>Diary</h1>
      {this.state.diary.map(entry => <div><p>{entry.meal}</p><p>{entry.description}</p><p>{entry.calories}</p></div>)}
      <DiaryForm userId ={this.props.userId} />
      <Diary/>
      </div>
      
      )
  }
}

export default Diary;