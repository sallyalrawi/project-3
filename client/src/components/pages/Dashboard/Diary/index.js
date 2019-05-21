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

<<<<<<< HEAD
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
=======
export default Diary;
>>>>>>> 34f77f49e31a9fa6fb412b980bf13ea9b5cea542
