import React from 'react';
import Graph from '../Graph';
import Map from '../Map';
import Home from '../Home';
import Links from '../Links';
import { connect } from 'react-redux';
import { _start, _stop } from '../../functions/realtime';
import './style.css';

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    _start(this.props.timeLocation, this.props.home.weatherData.Units);
  }

  componentWillUnmount() {
    _stop();
  }

  render() {
    console.log(this.props.home.weatherData.Units)
    return (
      <div className="grid">
        <div className="grid__left">
          <Home
            list={this.props.home}
            time={this.props.timeLocation.Time}
            rating={this.props.home.TotalRating}
          />
        </div>
        <div className="grid__right">
          <Map
            location={this.props.map}
            marker={this.props.markerPosition}
            tooltip={this.props.tooltip}
            tooltipStatus={this.props.tooltipStatus}
          />

          <div className="grid-right__bottom">
            <Graph
              days={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
              scores={[5, 3, 5, 3, 2, 4, 5]}
            />
            <Links />
          </div>
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
