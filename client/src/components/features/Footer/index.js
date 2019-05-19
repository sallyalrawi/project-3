import React from 'react';
import './style.css';

const Footer = () => {
    return (
      <div className="footer">
      <form action="https://github.com/sallyalrawi/project-3" >
        <button type="submit" value="GitHub Repo" className="btn btn-sm repo"><i className="fa fa-code" aria-hidden="true"></i> Github Repo</button>
        </form>
      </div>
    ); 
  }

export default Footer;


