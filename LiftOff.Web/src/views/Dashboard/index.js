import React from 'react';
import token from '../../functions/token';
import Navigation from '../../components/Navigation';
import DashboardContent from '../../components/DashboardContent';
import './style.css';

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    if (!token.get()) {
      window.location.href = "/";
      token.remove();
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Navigation />
        <div className="dashboard__content">
          <DashboardContent />
        </div>
      </div>
    );
  }
}

export default Dashboard;
