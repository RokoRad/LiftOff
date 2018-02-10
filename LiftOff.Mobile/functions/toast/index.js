import { ToastAndroid } from 'react-native';

// pirkaz toasta sa zadanim stringom na android udrđajima
export default string => {
  ToastAndroid.show(string, ToastAndroid.SHORT);
};
