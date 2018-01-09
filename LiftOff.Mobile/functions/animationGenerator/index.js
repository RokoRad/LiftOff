import * as Animatable from 'react-native-animatable';

Animatable.initializeRegistryWithDefinitions({
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
  orange: {
    0: {
      rotate: '-2deg',
      translateX: 7,
      translateY: -3
    },
    0.5: {
      rotate: '0deg',
      translateX: 0,
      translateY: 0
    },
    1: {
      rotate: '2deg',
      translateX: -7,
      translateY: 3
    }    
  },
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
  }
});

const animationGenerator = (value) => (value);

export default animationGenerator;