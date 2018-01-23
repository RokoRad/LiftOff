import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import Marker from '../../components/Marker';
import Dock from '../../components/Dock';
import Tooltip from '../../components/Tooltip';
import Search from '../../components/Search';
import styles from './styles.js';
import style from '../../functions/mapStyle';
import removeToken from '../../functions/removeToken';
import holderEditor from './holderEditor';
import { connect } from 'react-redux';
import { MapView, PROVIDER_GOOGLE } from 'expo';
import _getCurrentLocation from './_getCurrentLocation.js';
import _changeCenter from './_changeCenter.js';

import headers from '../../functions/headers';

const holder = {
  city: '/',
  time: '/',
  rating: '/'
}, deltas = {
  longitudeDelta: 0.1,
  latitudeDelta: 0.1
}, inital = {
  latitude: 43.5432,
  longitude: 16.49314,
  ...deltas
};

class Map extends Component {
  constructor(props) {
     super(props);
     this.state = {
       location: inital,
       center: inital,
       markerPosition: inital,
       pressed: false,
       render: false,
       selected: false,
       calibration: false
     };
  };

  componentWillMount() {
    AsyncStorage.getItem('@location').then((response) => {
      if(response) {
        const parsed = JSON.parse(response);

        const object = {
          latitude: parsed.latitude,
          longitude: parsed.longitude,
          ...deltas
        }

        this.setState({
          location: object,
          markerPosition: object
        })
      }
    });

    if(!this.state.render) {
      _getCurrentLocation();
    }
  }

  componentWillUnmount() {
    // AsyncStorage.getItem('@picker').then((timeValue) => {
    //   console.log("timeValue", timeValue)
    //   AsyncStorage.setItem('@timeLocation', JSON.stringify({
    //     location: this.state.markerPosition,
    //     time: timeValue
    //   }));
    // });
  }

  setMarker = (value) => {
    value.persist();
    AsyncStorage.getItem('@token').then((data) => {
      fetch('http://liftoffapi.azurewebsites.net/api/weather/getScore', {
        method: 'POST',
        headers: headers(data),
        body: JSON.stringify({
            location: value.nativeEvent.coordinate,
            time: new Date().toISOString()
          })
      }).then((response) => {
        if(response.status === 200) {
          const parsed = JSON.parse(response._bodyInit);
          holder = holderEditor(parsed.weatherData.city, parsed.totalRating);
        } else if (response.status === 401) {
          removeToken();
          this.props.history.push('/');
        }}).catch((error) => console.log(error))
    });
    if(this.state.selected === false) {
      this.setState({
        selected: true
      })
    }

    this.setState({
      markerPosition: value.nativeEvent.coordinate,
      pressed: true,      
      calibration: false
    });

    holder = {
      city: '/',
      time: '/',
      rating: '/'
    }

    AsyncStorage.setItem('@location', JSON.stringify(value.nativeEvent.coordinate)).then();
  }

  selected = () => {
    this.setState({
      selected: false
    });
  }

  render() {
    // console.log(this.props.map)
    // console.log(this.props.markerPosition)
    console.log(this.props.timeLocationReducer)
      return (
        <Screen current={this.props.location}>
          <Search pass={this.map} />
          <Tooltip displayed={this.state.selected} />
          <Dock history={this.props.history} selected={this.selected} />
          <MapView ref={(map) => this.map = map} style={styles.wrapper} provider={PROVIDER_GOOGLE} customMapStyle={style} 
                   showsUserLocation={true} region={this.state.location} onRegionChangeComplete={(value) => _changeCenter(value)} 
                   onPress={(value) => this.setMarker(value)} cacheEnabled={true} showsCompass={false} showsScale={false}>
            <Marker display={this.state.pressed} location={this.state.markerPosition} calibration={this.state.calibration} city={holder.city} time={holder.time} rating={holder.rating} />
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