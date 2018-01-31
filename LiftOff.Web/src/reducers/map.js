const initialLocation = {
  lat: 43.5432,
  lng: 16.49314
};

const initialState = {
  map: {
    ...initialLocation
  },
  markerPosition: {
    ...initialLocation
  },
  tooltipStatus: false,
  tooltip: {
    city: '/',
    time: '/',
    rating: '/'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return {
        ...state,
        map: {
          ...action.payload
        }
      };
    case 'TOOLTIP_STATUS':
      return {
        ...state,
        tooltipStatus: action.payload
      };
    case 'SET_MARKER':
      return {
        ...state,
        markerPosition: {
          ...action.payload
        }
      };
    case 'UPDATE_TOOLTIP':
      return {
        ...state,
        tooltip: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};
