import React from 'react'
import './style.css'

const ModalSearchbar = ({ handleChange, handleSubmit, value }) => {
  return (
    <div>
      <form className="form-centered" onChangeCapture={handleSubmit} onSubmit={handleSubmit}>
        <label htmlFor="searchBar">Search by Food Name</label>
        <input onChange={handleChange} type="text"
          name="foodKeyword" value={value} />
        <button>Search</button>
      </form>


    </div>
  );
}

export default ModalSearchbar;