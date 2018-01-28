export default (time) => {
  const parsed = new Date(time);
  let hours = parsed.getHours(),
      minutes = parsed.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  } 
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}