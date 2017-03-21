import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class ThreeWayLayout extends Component {
  render(){
    return(
      <View style={styles.mainContainer}>
        <View style={styles.box1}>
          <View style={[styles.innerBox, styles.i1]} />
          <View style={[styles.innerBox, styles.i2]} />
        </View>
        <View style={styles.box2}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#9669FE'
  },
  box2: {
    flex:1,
    backgroundColor: '#B89AFE'
  },
  innerBox: {
    flex:1,
  },
  i1: {
    backgroundColor: '#00008e'
  },
  i2: {
    backgroundColor: '#3232d6'
  }


});
