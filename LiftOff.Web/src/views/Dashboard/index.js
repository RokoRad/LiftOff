import React from 'react';
import token from '../../functions/token';
import './style.css';

class Dashboard extends React.Component {
  // constructor() {
  //   super();
  // }

  componentWillMount() {
    // if(!token.get()) {
    //   window.location.href = "/";
    // }
  }

  render() {
    return (
      <div>
        dashboard
      </div>
    );
  }
}


export default Dashboard;