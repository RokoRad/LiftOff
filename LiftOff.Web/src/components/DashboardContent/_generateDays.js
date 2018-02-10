import language from '../../languages';

export default () => {
  const today = new Date().getDay();

  const numbers = [

  ]

  let date = today;
  numbers.push(language.Days[new Date().getDay()]);

  for (let i = today; i < today + 4; i++) {
    date += 1;
    if (date === 7) {
      date = 0;
    }
    numbers.push(language.Days[date]);
  }

  return numbers
}