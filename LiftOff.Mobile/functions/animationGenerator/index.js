//dohvaćanje funkcije za animiranje
import * as Animatable from 'react-native-animatable';

// kreiranje animacija
Animatable.initializeRegistryWithDefinitions({
  // za dobru ocjenu, dron ima male pokrete
  green: {
    0: {
      rotate: '-1deg',
      translateX: 2,
      translateY: -1
    },
    0.5: {
      rotate: '0deg',
      translateX: 0,
      translateY: 0
    },
    1: {
      rotate: '1deg',
      translateX: -2,
      translateY: -1
    }
  },
  // za srednju razinu, dron ima usmjerene pokrete
  orange: {
    0: {
      rotate: '-2deg',
      translateX: 5,
      translateY: -3
    },
    0.5: {
      rotate: '0deg',
      translateX: 0,
      translateY: 0
    },
    1: {
      rotate: '2deg',
      translateX: -5,
      translateY: -3
    }
  },
  // za lošu ocjenu, dron ima velike pokrete
  red: {
    0: {
      rotate: '-3deg',
      translateX: -15,
      translateY: -5
    },
    0.5: {
      rotate: '0deg',
      translateX: 0,
      translateY: 0
    },
    1: {
      rotate: '3deg',
      translateX: 15,
      translateY: -5
    }
  },
  // animacija za tooltip nad dateChooserom
  picker: {
    0: {
      opacity: 0,
      right: -30
    },
    1: {
      opacity: 1,
      right: 60
    }
  }
});

// funkcija koja za primljeni parametar vraća istoimeni objekt
export default (value) => value;
