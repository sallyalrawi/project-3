import React from 'react'
import './style.css'

const DiaryForm = ({ handleChange, handleSubmit, value }) => {
  return (
    <div className="main">
      <form onChangeCapture={handleSubmit} onSubmit={handleSubmit}>
        <label htmlFor="searchBar">Search by Food Name</label>
        <input onChange={handleChange} type="text"
          name="foodKeyword" value={value} />
        <button>Search</button>
      </form>


    </div>
  );
}

export default DiaryForm;