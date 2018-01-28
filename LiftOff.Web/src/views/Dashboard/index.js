import React from 'react';
import token from '../../functions/token';
import Navigation from '../../components/Navigation';
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
      <div className="dashboard">
        <Navigation />
        <div className="dashboard__content">
          dashboard
        </div>
      </div>
    );
  }
}


export default Dashboard;