import React, {useContext} from 'react';
import './style.css';
import { AuthContext } from '../../../Auth';

const Footer = () => {

  const { currentUser } = useContext(AuthContext);
  const handleFooter = currentUser ? 'footer' : 'hideFooter';

    return (
      <div className={handleFooter}>
      <form action="https://github.com/sallyalrawi/project-3" >
        <button type="submit" value="GitHub Repo" className="btn btn-sm repo"><i className="fa fa-code" aria-hidden="true"></i> Github Repo</button>
        </form>
      </div>
    ); 
  }

export default Footer;

