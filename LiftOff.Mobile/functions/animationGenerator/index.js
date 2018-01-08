import * as Animatable from 'react-native-animatable';

Animatable.initializeRegistryWithDefinitions({
  green: {
    from: {
      rotate: '-1deg',
      translateX: 3
    },
    to: {
      rotate: '1deg',
      translateX: -3
    }    
  },
  orange: {
    from: {
      rotate: '-2deg',
      translateX: 5
    },
    to: {
      rotate: '2deg',
      translateX: -5
    }    
  },
  red: {
    from: {
      rotate: '-3deg',
      translateX: 8
    },
    to: {
      rotate: '3deg',
      translateX: -8
    }    
  }
});

const animationGenerator = (value) => (value);

export default animationGenerator;