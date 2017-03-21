//flex column with manually computed height
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

let { height } = Dimensions.get('window');
let boxCount = 3;
let boxHeight = height / boxCount;

export default class Stack extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={[styles.box1, styles.boxHeight]} />
        <View style={[styles.box2, styles.boxHeight]} />
        <View style={[styles.box3, styles.boxHeight]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  boxHeight: {
    height: boxHeight
  },
  box1: {
    backgroundColor:'#9669FE'
  },
  box2: {
    backgroundColor:'#B89AFE',
    height: 250
  },
  box3: {
    backgroundColor:'#D0BCFE'
  }
})
