import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import Marker from '../../components/Marker';
import Dock from '../../components/Dock';
import Tooltip from '../../components/Tooltip';
import Search from '../../components/Search';
import styles from './styles.js';
import style from '../../functions/mapStyle';
import { connect } from 'react-redux';
import { MapView, PROVIDER_GOOGLE, Polygon } from 'expo';
import _getCurrentLocation from './_getCurrentLocation.js';
import _changeCenter from './_changeCenter.js';
import _setMarker from './_setMarker.js';
import _currentTime from './_currentTime.js';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    _getCurrentLocation();
  }

  render() {
    return (
      <Screen current={this.props.location}>
        <Search />
        <Tooltip displayed={this.props.tooltipStatus} />
        <Dock history={this.props.history} />
        <MapView
          style={styles.wrapper}
          provider={PROVIDER_GOOGLE}
          customMapStyle={style}
          showsUserLocation={true}
          region={this.props.map}
          onRegionChangeComplete={value => _changeCenter(value)}
          onPress={value => _setMarker(value, this.props.history)}
          cacheEnabled={true}
          showsCompass={false}
          showsScale={false}
          ref={map => { this.map = map }}
        >
          {this.map.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: this.props.map,
            radius: 30
          })
          }
          {/* <Marker
            location={this.props.markerPosition}
            city={this.props.tooltip.city}
            time={_currentTime()}
            rating={this.props.tooltip.rating}
          /> */}
          <Marker
            location={this.props.markerPosition}
            city={this.props.tooltip.city}
            time={_currentTime()}
            rating={this.props.tooltip.rating}
            image={require('../../images/map/nofly.png')}
          />
        </MapView>
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  ...state.mapReducer,
  ...state.timeLocationReducer
});

export default connect(mapStateToProps)(Map);
