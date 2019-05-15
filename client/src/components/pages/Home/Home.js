import React, { Fragment } from 'react';
import SignUp from '../../../components/pages/Home/SignUp';
import Login from '../../../components/pages/Home/Login';
import './style.css'
// import Navigation from '../../../features/Navigation'
import { Tabs, Tab, Nav, Row, Col, } from 'react-bootstrap';

const Home = () => (
  <div className="body">
    <Fragment>
      <div className="jumbotron text-center">
        <img alt="logo" className="logoLg" max-width="100%" src="./images/cashcalLg.png" />
        <h4 className="intro-text">Please login or sign up to get started!</h4>
      </div>
      <div className="home-container container col-lg-6 col-md-8 col-sm-12">

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 tab-col">

              <Tabs defaultActiveKey="login" id="tab-container">
                <Tab eventKey="login" title="Login">
                  <Login />
                </Tab>
                <Tab eventKey="signup" title="Sign Up">
                  <SignUp />
                </Tab>
              </Tabs>


            </div>
          </div>
        </div>

      </div>
    </Fragment>
  </div>
);
export default Home;