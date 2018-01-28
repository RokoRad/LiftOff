export default (time) => {
  const parsed = new Date(time);
  return `${parsed.getHours()}:${parsed.getMinutes()}`;
}