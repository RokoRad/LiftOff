import React from 'react';
import AccountItem from '../../components/AccountItem';
import language from '../../languages';

export default (object) => {
  let key = Object.keys(object);
  let value = Object.values(object);
  for(let i = 0; i < key.length; i++) {
    return <AccountItem title={key[i]} content={value[i]} />
  }
  // console.log(object)
  // console.log(Object.keys(object)[1])
  // console.log(object[1])
  // object.map((item) => {
  //   console.log(item)
  // })
  //console.log(object)
  // Object.keys(object).map((item) => {
  //   console.log(item, item[item])
  // });
  // Object.entries(object).forEach(([key, value]) => {
  //   console.log(key, value);
  //   <AccountItem title={language[key]} content={value} />
  // });
};