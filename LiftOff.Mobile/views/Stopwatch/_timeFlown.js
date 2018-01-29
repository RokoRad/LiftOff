const _timeFlow = (minutes, seconds) => {
  if(minutes > 0) {
    return ((minutes * 60) + seconds);
  } else {
    return seconds;
  }
}

export default _timeFlow;