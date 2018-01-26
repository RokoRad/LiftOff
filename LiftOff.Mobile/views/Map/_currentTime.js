export default () => {
  let now = new Date(),
      hours = now.getHours(),
      minutes = now.getMinutes();

  if(hours < 10) {
    hours = `0${hours}`
  } else if (minutes < 10) {
    minutes = `0${hours}`
  }

  return `${hours}:${minutes}`
}