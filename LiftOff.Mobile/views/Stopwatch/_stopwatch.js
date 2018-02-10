// dohvaćanje akcija potrebnih za rad štoperice
import { toggleStopwatch, setStarttime, updateSeconds, updateMinutes, addLog } from '../../actions';
import store from '../../store';
// dovhaćanje globalnih funckcija
import removeToken from '../../functions/removeToken';
import _timeFlown from './_timeFlown.js';
import headers from '../../functions/headers';

// poziv  koji se izvršava na pritisak botuna
export default (history, drone) => {
  // dohvaćanje vrijednosti storea
  let state = store.getState().stopwatchReducer.stopwatch,
    home = store.getState().homeReducer.home,
    flightSpot = home.WeatherData.City,
    flySafeScore = home.TotalRating;

  // case koji se izvršava ako je štoperica trenutno aktivna
  if (state.active) {
    // dodaje novi log za vrijednosti
    store.dispatch(
      addLog({
        location: flightSpot,
        rating: flySafeScore,
        timeFlown: _timeFlown(state.minutes, state.seconds)
      })
    );

    // restartira vrijednosti
    store.dispatch(setStarttime(''));
    store.dispatch(updateSeconds((state.seconds = 0)));
    store.dispatch(updateMinutes((state.minutes = 0)));
    clearInterval(this.stopwatch);
  } else {
    // započinje brojati, te pruzima currentTime
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
  // mijenja stanje štoperice
  store.dispatch(toggleStopwatch((state.active = !state.active)));
};
