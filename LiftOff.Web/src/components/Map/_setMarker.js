import store from '../../store';
import { setMarker, tooltipStatus, updateTimeLocation } from '../../actions';
import { _start, _stop } from '../../functions/realtime';

export default event => {
  _stop();

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

  let holder = {
    location: {
      latitude: event.latLng.lat(),
      longitude: event.latLng.lat()
    },
    time: store.getState().timeLocationReducer.timeLocation.time
  };

  _start(holder, 'metric');

  store.dispatch(tooltipStatus((store.getState().mapReducer.tooltipStatus = true)));
};
