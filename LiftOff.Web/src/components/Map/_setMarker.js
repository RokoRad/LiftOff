import store from '../../store';
import { setMarker, tooltipStatus } from '../../actions';

export default event => {
  store.dispatch(
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    })
  );

  store.dispatch(tooltipStatus((store.getState().mapReducer.tooltipStatus = true)));
};
