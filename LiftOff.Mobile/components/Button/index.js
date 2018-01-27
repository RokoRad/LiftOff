import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles.js';
import { connect } from 'react-redux';
import _loading from './_loading.js';
import _default from './_default.js';

class Button extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    console.log(props)
    return (
        <TouchableOpacity onPress={this.props.onPress} opacity={0.8} style={styles.outer}>
          <View style={styles.buttonWrapper}>
          {(this.props.loading)
          ? _loading()
          : _default(this.props.type)
          }
          </View>
        </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  ...state.initialReducer
});

export default connect(mapStateToProps)(Home);