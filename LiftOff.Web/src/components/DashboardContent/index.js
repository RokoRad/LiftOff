import React from 'react';
import Graph from '../Graph';
import Map from '../Map';
import Home from '../Home';
import { connect } from 'react-redux';
import './style.css';

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid">
        <div className="grid__left">
          <Home list={this.props.home} time={this.props.timeLocation.time} string={this.props.home.AdvisoryRating} rating={this.props.home.TotalRating}/>
        </div>
        <div className="grid__right">
          <Map location={this.props.map} marker={this.props.markerPosition} tooltip={this.props.tooltip} tooltipStatus={this.props.tooltipStatus} />
          <Graph
            days={['Monday', 'Monday', 'Monday', 'Monday', 'Monday']}
            scores={[1.7, 2.3, 4.6, 4.2, 1.5]}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.mapReducer,
  ...state.homeReducer,
  ...state.timeLocationReducer
});

export default connect(mapStateToProps)(DashboardContent);

