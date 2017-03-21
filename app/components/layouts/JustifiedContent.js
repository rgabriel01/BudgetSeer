import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export default class JustifiedContent extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    )
  }
}

// justifyContent:
//   flex-start
//   flex-end
//   center
//   space-around
//   space-between

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  box1: {
    height: 40,
    backgroundColor: '#9669FE'
  },
  box2: {
    height: 40,
    backgroundColor: '#B89AFE'
  },
  box3: {
    height: 40,
    backgroundColor: '#D0BCFE'
  }
});
