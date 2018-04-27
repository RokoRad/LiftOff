const initialLocation = {
  lat: 45.8157778,
  lng: 16.0091944
};

// 45°48'56.8"N 16°00'33.1"E

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
