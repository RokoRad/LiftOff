import React from 'react';
import AccountItem from '../../components/AccountItem';
import language from '../../languages';
import round from '../../functions/round';

/// funckija za mapairanje podatkaa statistika, ovisno o vrsti dijeli ih kako bi se prikazili pravi
export default object => {
  let result = [],
    // definiranje ključa i vrijednosti
    key = Object.keys(object),
    value = Object.values(object);

  // za svaki kjluč vrši provjeru
  for (let i = 1; i < key.length; i++) {
    if (key[i] === 'totalFlySafeScore') {
      const flyScore = round(object['totalFlySafeScore'] / object['totalFlights']);
      result.push(<AccountItem title={language[key[i]]} content={flyScore} key={i} />);
    } else {
      result.push(<AccountItem title={language[key[i]]} content={value[i]} key={i} />);
    }
  }

  return result;
};
