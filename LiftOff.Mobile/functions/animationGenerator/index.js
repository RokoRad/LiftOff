import * as Animatable from 'react-native-animatable';

Animatable.initializeRegistryWithDefinitions({
  green: {
    from: {
      rotate: '-1deg',
      translateX: 2
    },
    to: {
      rotate: '1deg',
      translateX: -2
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
  },
  fire: {
    from: {
      translateY: -10
    },
    to: {
      translateY: 10
    }
  }
});

const animationGenerator = (value) => (value);

export default animationGenerator;