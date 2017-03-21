import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

const icon = require('../images/diagram.png');

import Header from './Header';
import Footer from './Footer';
import Body from './Body';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body
          postHandler={this.props.postHandler}
          transitionHandler={this.props.transitionHandler}
        />
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
});
