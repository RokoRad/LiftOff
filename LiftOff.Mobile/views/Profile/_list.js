import React from 'react';
import AccountItem from '../../components/AccountItem';
import language from '../../languages';

export default (object) => {
  console.log(object)
  Object.entries(object).forEach(([key, value]) => (
    <AccountItem title={language[key]} content={value} />
  ));
};