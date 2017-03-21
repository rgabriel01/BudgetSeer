import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


const startButton = require('../images/chart.png');

export default class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.props.onStartHandler}>
            <Image style={styles.startButton} source={startButton} />
          </TouchableOpacity>
          <Text style={styles.startCaption}>START!</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#255e5e'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    height: 100,
    width: 100
  },
  startCaption: {
    color: '#dcdcdc'
  }
})
