import React, { Component } from 'react';
import Weight from '../../../components/pages/Dashboard/Weight';
import Diary from '../../../components/pages/Dashboard/Diary';
import Points from '../../../components/pages/Dashboard/Points';
import Navigation from '../../../components/features/Navigation';
// import Footer from '../../../components/features/Footer';
import './style.css';

class Dashboard extends Component {
  state = {};

  render() {
    return (
          <div className="dashBodyContent">
            <div className="row">

              <div className="col-md-6">
              <div className="row">
                  <div className="col">
                  <div className="card cardLook">
                      <div className="card-body">
                    <h1>current</h1>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                      <div className="card cardLook">
                      <div className="card-body">
                        <Weight userId={this.props.userId} />
                        </div>
                        </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                  <div className="card cardLook">
                      <div className="card-body">
                        <Points userId={this.props.userId} />
                        </div>
                        </div>
                  </div>
                </div>

            </div>
            <div className="col-md-6">
            <div className="card cardLook">
                      <div className="card-body">
                  <Diary userId={this.props.userId} /> 
                  </div>
                  </div>
            </div>
      
            </div>
        </div>
    );
  }
}

export default Dashboard;
