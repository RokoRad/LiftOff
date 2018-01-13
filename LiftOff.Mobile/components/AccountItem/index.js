import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from '../../external/react-native-modal-dropdown';
import { language } from '../../config/settings.js';
import styles from './styles.js';

import lang from 'react-native-i18n';
// za enn-US i en-GB postavlja en kao default
lang.fallbacks = true;
// instnciranje lokalizacije
// lang.translations = {
//   en: {
//     username: "Username",
//     email: "Email",
//     favoriteFlyingSpot: "Favorite flying spot",
//     averageFlightTime: "Average flight time",
//     totalFlights: "Total flights",
//     averageFlySafeScore: "Average FlySafe Score",
//     totalTimeFlown: "Total time flown"
//   },
//   hr: {
//     username: "Korisničko ime",
//     email: "Email",
//     favoriteFlyingSpot: "Najčešće mjesto letenja",
//     averageFlightTime: "Prosječno trajanje leta",
//     totalFlights: "Ukupno letova",
//     averageFlySafeScore: "Prosječna FlySafe ocijena",
//     totalTimeFlown: "Ukupno vrijeme letenja"
//   }
// }
lang.translations = {
  en: {
    moreThan: "More than",
    flewHere: "flew here"
  },
  hr: {
    moreThan: "Više od",
    flewHere: "je letjelo ovdije"
  }
}

class AccountItem extends React.Component {
  constructor(props) {
    super(props);
  }
//lang.t(this.props.title)
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.string}>{lang.t('moreThan')}</Text>
        <Text style={[styles.string, styles.bold]}>{this.props.content}</Text>
      </View>
    )
  }
}

// const AccountItem = ({title, content}) => (
//   <View style={styles.wrapper}>
//     <Text style={styles.string}>{lang.t(title)}</Text>
//     <Text style={[styles.string, styles.bold]}>{content}</Text>
//   </View>
// );

export default AccountItem;