import headers from '../../functions/headers';
import removeToken from '../../functions/removeToken';
import updateZones from '../../actions';
import store from '../../store';
import token from '../../functions/token'

export default (history) => {
    fetch('http://liftoffinfokup.azurewebsites.net/api/nofly/get-nofly-zones', {
      method: 'GET',
      headers: headers(token.get('@token'))
    }).then((response) => {
      if (response.status === 200) {
        store.dispatch(updateZones(store.getState().mapReducer.zones = JSON.parse(response._bodyInit)));
      } else if (response.status === 401) {
        removeToken(history);
      }
    })
  )
};