const initialLocation = {
  latitude: 43.5432,
  longitude: 16.49314
}

const deltas = {
  longitudeDelta: 0.1,
  latitudeDelta: 0.1
}

const initialState = {
  map: {
    ...initialLocation,
    ...deltas
  },
  markerPosition: {
    ...initialLocation,
    ...deltas
  }
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_LOCATION':
        return  {
          map: {

          }
        };
      case 'SET_MARKER':
        return  {
          map: {
            
          }
        };
      default:
        return state;
  }
};

export default mapReducer;