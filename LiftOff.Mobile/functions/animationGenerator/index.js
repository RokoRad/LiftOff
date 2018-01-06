import * as Animatable from 'react-native-animatable';

Animatable.initializeRegistryWithDefinitions({
  green: {
    from: {
      rotation: -1
    },
    to: {
      rotation: 1
    }    
  },
  orange: {
    from: {
      rotation: -2
    },
    to: {
      rotation: 2
    }    
  },
  red: {
    from: {
      rotation: -3
    },
    to: {
      rotation: 3
    }    
  }
});

const animationGenerator = (value) => (value);

export default animationGenerator;