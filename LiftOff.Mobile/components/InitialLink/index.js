// ukljucivanje elemenata potrebnih za kreiranje InitalLogoa
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import styles from './styles.js';
import language from '../../languages';

const ToRegister = () => (
  <Text>
    {language.ToRegister} <Text style={styles.messageBold}>{language.ToRegisterBold}</Text>
  </Text>
);

const ToLogin = () => (
  <Text>
    {language.ToLogin} <Text style={styles.messageBold}>{language.ToLoginBold}</Text>
  </Text>
);

// kreiranje komponente sa pripadajucima parametrima
const InitalLink = ({onPress, type, to}) => (
  <Link component={TouchableOpacity} activeOpacity={1} to={to}>
    <View style={styles.wrapper}>
      <Text style={styles.message}>
        {(type ? 'login')
        ? <ToRegister />
        : <ToLogin />
        }
        </Text>
      </Text>
    </View>
  </Link>
)

export default InitalLink;