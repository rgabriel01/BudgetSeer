import React, { Component } from 'react';
import {
  View
} from 'react-native';

export default class FlexRow extends Component {
  render() {
    return (
      // flex direction row; renders stuff in a straigh line
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor:'#9669FE'}} />
        <View style={{width: 50, height: 50, backgroundColor:'#B89AFE'}} />
        <View style={{width: 50, height: 50, backgroundColor:'#D0BCFE'}} />
      </View>
    )
  }
}
