import * as Animatable from 'react-native-animatable';

Animatable.initializeRegistryWithDefinitions({
  green: {
    from: {
      rotate: '-1deg'
    },
    to: {
      rotate: '1deg'
    }    
  },
  orange: {
    from: {
      rotate: '-2deg'
    },
    to: {
      rotate: '2deg'
    }    
  },
  red: {
    from: {
      rotate: '-3deg'
    },
    to: {
      rotate: '3deg'
    }    
  }
});

const animationGenerator = (value) => (value);

export default animationGenerator;