import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  head: {
    borderBottomColor: '#9fb7d3',
    borderBottomWidth: 1,
    paddingBottom: 3,
    display: 'flex',
    flexDirection: 'row'
  },
  left: {
    width: '20%',
    textAlign: 'center'
  },
  middle: {
    width: '60%',
    textAlign: 'center'
  },
  right: {
    width: '20%',
    textAlign: 'center'
  }
});

export default styles;

{/* <View style={styles.wrapper}>
<View style={styles.head}>
  <Text style={styles.left}>Log</Text>
  <Text style={styles.middle}>Location</Text>
  <Text style={styles.right}>Time</Text>
</View>
<StopwatchLog />
<StopwatchLog />
<StopwatchLog />
<StopwatchLog />
</View> */}