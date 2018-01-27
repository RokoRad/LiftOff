export default (time) => {
  let temp = time;
      temp = new Date(time).toString();

  console.log(temp.getUTCHours())
}