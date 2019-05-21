import React, { Component } from 'react';
import { getUser } from '../../../../api';
import './style.css';



class Points extends Component {
    state = {
      rewards: [],
      user_name: '',
      points: 0,
      message: ''
    };

    componentDidMount() {
        this.loadUser(this.props.userId);
      }
    

      loadUser = async userId => {
        try {
          const response = await getUser(userId);
          const { user_name, points } = response.data[0];
          this.setState({
            user_name,
            points
          });
        } catch (error) {
          throw error;
        }
      };
    

      render() {
        return (
              <div className="rewardCardWrapper container-fluid">
              <h1>
                Points Balance: {this.state.points}{' '}
              </h1>
              </div>
        );
      }
    }
    
    export default Points;