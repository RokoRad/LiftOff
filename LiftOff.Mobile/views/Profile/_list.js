import React from 'react';
import AccountItem from '../../components/AccountItem';
import language from '../../languages';
import round from '../../functions/round';

export default (object) => {
  let result = [],
      key = Object.keys(object),
      value = Object.values(object);

  for(let i = 1; i < key.length; i++) {
    if(key[i] === 'totalTimeFlown') {
      const totalTimeFlown = (value['totalTimeFlown'] / value['totalFlights']);
      console.log(totalTimeFlown)
      console.log(round(totalTimeFlown))
      result.push(<AccountItem title={language[key[i]]} content={totalTimeFlown} />);
    } 
    
    else if (key[i] === 'totalFlySafeScore') {

      result.push(<AccountItem title={language[key[i]]} content={round(value[i])} />);
    } 
    
    else {
      result.push(<AccountItem title={language[key[i]]} content={value[i]} />);
    }
  }

  return result;
};