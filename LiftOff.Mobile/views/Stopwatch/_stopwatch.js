import { toggleStopwatch, setStarttime, updateSeconds, updateMinutes, addLog } from '../../actions';
import store from '../../store';
import removeToken from '../../functions/removeToken';
import _timeFlown from './_timeFlown.js';
import headers from '../../functions/headers';

export default (history, drone) => {
  let state = store.getState().stopwatchReducer.stopwatch,
    home = store.getState().homeReducer.home,
    flightSpot = home.weatherData.City,
    flySafeScore = home.TotalRating;

  if (state.active) {
    store.dispatch(
      addLog({
        location: flightSpot,
        rating: flySafeScore,
        timeFlown: _timeFlown(state.minutes, state.seconds)
      })
    );

    store.dispatch(setStarttime(''));
    store.dispatch(updateSeconds((state.seconds = 0)));
    store.dispatch(updateMinutes((state.minutes = 0)));
    clearInterval(this.stopwatch);
  } else {
    store.dispatch(setStarttime((state.startTime = new Date().toISOString())));
    this.stopwatch = setInterval(() => {
      if (state.seconds === 59) {
        store.dispatch(updateSeconds((state.seconds = 0)));
        store.dispatch(updateMinutes((state.minutes += 1)));
      } else {
        store.dispatch(updateSeconds((state.seconds += 1)));
      }
    }, 1000);
  }
  store.dispatch(toggleStopwatch((state.active = !state.active)));
};
