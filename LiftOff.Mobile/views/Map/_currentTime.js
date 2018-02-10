// za trenutno vrijeme, funckija vraća vrijeme u HH:mm formatu
export default () => {
  let now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes();

  if (hours < 10) {
    // ako su sati 0-10, npr: 5:33, vraća 05:33
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    // ako su minute 0-10, npr: 15:3, vraća 15:03
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
};
