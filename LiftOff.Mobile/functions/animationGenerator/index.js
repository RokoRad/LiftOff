import * as Animatable from 'react-native-animatable';

Animatable.initializeRegistryWithDefinitions({
  green: {
    from: {
      rotate: '-1deg'
    },
    to: {
      rotation: '1deg'
    }    
  },
  orange: {
    from: {
      rotation: '-2deg'
    },
    to: {
      rotation: '2deg'
    }    
  },
  red: {
    from: {
      rotation: '-3deg'
    },
    to: {
      rotation: '3deg'
    }    
  }
});

const animationGenerator = (value) => (value);

export default animationGenerator;