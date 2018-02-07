// brojač vremena u letu

export default (minutes, seconds) => {
  if (minutes > 0) {
    return minutes * 60 + seconds;
  } else {
    return seconds;
  }
};
