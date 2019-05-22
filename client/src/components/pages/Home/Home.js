import React, { Fragment } from 'react';
import SignUp from '../../../components/pages/Home/SignUp';
import Login from '../../../components/pages/Home/Login';
import './style.css'
import Footer from '../../../components/features/Footer'
import { Tabs, Tab } from 'react-bootstrap';

const Home = () => (
  <div className="homeBodyContent">
    <Fragment>
      <div className="jumbotron text-center">
        <img alt="logo" className="logoLg" max-width="100%" src="./images/cashcalLg.png" />
        <h4 className="intro-text">Please login or sign up to get started!</h4>
      </div>
      <div className="home-container container col-lg-7 col-md-9 col-sm-12">

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-9 col-sm-12 tab-col">

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
      <Footer />
    </Fragment>
  </div>
);
export default Home;