import language from '../../languages';

let days = [],
  reset;

const today = reset = new Date().getDay();

for (let i = today; i < today + 5; i++) {
  reset++;
  if (reset === 7) {
    // reset = 1;
  }
  console.log("i", reset);
}