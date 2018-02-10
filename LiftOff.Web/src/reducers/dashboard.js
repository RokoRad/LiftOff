const initialState = {
  menu: false,
  graph: [0, 0, 0, 0, 0]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_MENU':
      return {
        ...state,
        menu: !state.menu
      };
    case 'UPDATE_GRAPH':
      return {
        graph: action.payload
      };
    default:
      return state;
  }
};
