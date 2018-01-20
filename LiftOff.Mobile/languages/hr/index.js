import Home from './Home';
import Initial from './Initial';
import Map from './Map';
import Navigation from './Navigation';
import Profile from './Profile';
import Settings from './Settings';
import Stopwatch from './Stopwatch';

const strings = {
  type: 'hr',
  ...Home,
  ...Initial,
  ...Map,
  ...Navigation,
  ...Profile,
  ...Settings,
  ...Stopwatch
};

export default strings;