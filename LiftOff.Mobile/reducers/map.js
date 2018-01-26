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
  },
  tooltipStatus: false,
  tooltip: {
    city: '/',
    time: '/',
    rating: '/'
  }
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_LOCATION':
        return  {
          ...state,
          map: {
            ...deltas,
            ...action.payload
          }
        };
      case 'TOOLTIP_STATUS':
        return  {
          ...state,
          tooltipStatus: action.payload
        };
      case 'SET_MARKER':
        return  {
          ...state,
          markerPosition: {
            ...deltas,
            ...action.payload
          }
        };
      case 'UPDATE_TOOLTIP':
        return  {
          ...state,
          tooltip: {
            ...action.payload
          }
        };
      default:
        return state;
  }
};

export default mapReducer;