import { AsyncStorage } from 'react-native';

const initialState = {
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOADING':
      return {
        loading: !state.loading
      };
    default:
      return state;
  }
};
