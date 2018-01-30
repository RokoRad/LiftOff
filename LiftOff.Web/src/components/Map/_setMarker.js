import store from '../../store';
import { setMarker, tooltipStatus, updateLocation } from '../../actions';
import { _updateTimeLocation } from '../../functions/realtime';

export default event => {
  store.dispatch(
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    })
  );

  store.dispatch(
    updateLocation({
      latitude: event.latLng.lat(),
      longitude: event.latLng.lng()
    })
  );

  // _updateTimeLocation({
  //   latitude: event.latLng.lat(),
  //   longitude: event.latLng.lng()
  // });

  store.dispatch(tooltipStatus((store.getState().mapReducer.tooltipStatus = true)));
};
