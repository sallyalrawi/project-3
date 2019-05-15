import React, { Component } from "react";
import Weight from '../../../components/pages/Dashboard/Weight';
import Diary from '../../../components/pages/Dashboard/Diary';
import Navigation from '../../../components/features/Navigation';
import Footer from '../../../components/features/Footer';
class Dashboard extends Component {
        state = {

        };

    render() {
        return (
          <div className="body">
          <div className="bodyContent">
          <Navigation />
        <Weight userId ={this.props.userId}/>
        <Diary userId ={this.props.userId} />
        </div>
        <Footer />
        </div>
        );
    }
}

export default Dashboard;