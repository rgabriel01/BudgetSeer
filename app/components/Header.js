import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const icon = require('../images/diagram.png');

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View><Image style={styles.icon} source={icon} /></View>
        <View><Text style={styles.text}>  BudgetSeer!</Text></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#255e5e'
  },
  icon: {
    height: 15,
    width: 15
  },
  text: {
    color: '#ffffff',
    fontWeight: '700'
  }
})
