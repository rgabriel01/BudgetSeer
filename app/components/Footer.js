import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>© Budget Seer 2017. All rights reserved. BUDGET SEER® is a registered trademark of Budget Seer.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#255e5e',
  },
  text: {
    color: '#ffffff',
    fontSize: 8
  }
})
