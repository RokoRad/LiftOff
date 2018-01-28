import { AsyncStorage } from 'react-native';

const initialState = {
  menu: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_MENU':
      return {
        menu: !state.menu
      };
    default:
      return state;
  }
};
