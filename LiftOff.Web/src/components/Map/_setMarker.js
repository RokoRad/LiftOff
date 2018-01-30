import store from '../../store';
import { setMarker, tooltipStatus, updateTimeLocation } from '../../actions';
import { _updateTimeLocation } from '../../functions/realtime';

export default event => {
  store.dispatch(
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    })
  );

  store.dispatch(
    updateTimeLocation({
      latitude: event.latLng.lat(),
      longitude: event.latLng.lng()
    })
  );

  // _updateTimeLocation({
  //   location: {
  //     latitude: event.latLng.lat(),
  //     longitude: event.latLng.lng()
  //   },
  //   //time: store.getState().timeLocationReducer.timeLocation.time
  //   time: new Date().toISOString()
  // });

  _updateTimeLocation({
    location: {
      latitude: 22,
      longitude: 33
    },
    time: new Date().toISOString()
  });

  store.dispatch(tooltipStatus((store.getState().mapReducer.tooltipStatus = true)));
};
