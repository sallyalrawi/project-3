/* eslint-disable import/no-duplicates */
import React, { Component } from 'react'
// import DiaryForm from "./components/DiaryForm/"
import DiarySearch from './pages/dashboard/Diary/DiarySearch';
class App extends Component {
  render() {
    return (
      <div>
        <DiarySearch />
      </div>
    );
  }
}

export default App
