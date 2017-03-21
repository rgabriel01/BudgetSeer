import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class StackAutoComputeHeight extends Component {
  render() {
    return(
      <View style={styles.container} >
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    flex:1 //if set to one , automatically calculate height
  },
  box1: {
    flex: 1,
    backgroundColor:'#9669FE'
  },
  box2: {
    flex: 5,
    backgroundColor:'#B89AFE',
  },
  box3: {
    flex: 1,
    backgroundColor:'#D0BCFE'
  }
});
