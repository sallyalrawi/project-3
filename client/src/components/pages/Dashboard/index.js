import React, { Component } from 'react';
import Weight from '../../../components/pages/Dashboard/Weight';
import Diary from '../../../components/pages/Dashboard/Diary';
import Navigation from '../../../components/features/Navigation';
import Footer from '../../../components/features/Footer';
import './style.css';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div className="dashbody">
        <div className="dashBodyContent">
          <Navigation />
          <div className="dashInnerContainer container-fluid">
            <Weight userId={this.props.userId} />
            <Diary userId={this.props.userId} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
