const initialState = {
  drone: 'DJI Spark'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DRONE':
      return {
        drone: action.payload
      };

    default:
      return state;
  }
};
