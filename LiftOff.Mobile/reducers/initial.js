import { AsyncStorage } from 'react-native';

const initialState = {
  loading: false
};

export default (state = initialState) => {
  switch (action.type) {
    case 'CHANGE_LOADING':
      return {
        loading: !this.state.loading
      };
    default:
      return state;
  }
};