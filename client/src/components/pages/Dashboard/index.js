import React, { Component } from "react";
import Weight from '../../../components/pages/Dashboard/Weight';
import Diary from '../../../components/pages/Dashboard/Diary';

class Dashboard extends Component {
        state = {

        };

    render() {
        return (
        <div className="body">
        <Weight userId ={this.props.userId}/>
        <Diary userId ={this.props.userId} />


      </div>
        );
    }
}

export default Dashboard;