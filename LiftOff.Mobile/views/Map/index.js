import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import Marker from '../../components/Marker';
import Circle from '../../components/Circle';
import Dock from '../../components/Dock';
import Tooltip from '../../components/Tooltip';
import Search from '../../components/Search';
import styles from './styles.js';
import style from '../../functions/mapStyle';
import { connect } from 'react-redux';
import { MapView, PROVIDER_GOOGLE } from 'expo';
import _getCurrentLocation from './_getCurrentLocation.js';
import _changeCenter from './_changeCenter.js';
import _setMarker from './_setMarker.js';
import _currentTime from './_currentTime.js';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  // prilikom prvog renderiranje pokreće se funckija za gettanje trenutne gps lokacije
  componentWillMount() {
    _getCurrentLocation();
  }

  render() {
    // prikaz mape i svih komponenti koje se prikazuju
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
        >
          <Circle
            location={{
              latitude: 43.523102,
              longitude: 16.425945
            }}
            radius={500}
          />

          <Marker
            location={this.props.markerPosition}
            city={this.props.tooltip.city}
            time={_currentTime()}
            rating={this.props.tooltip.rating}
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
