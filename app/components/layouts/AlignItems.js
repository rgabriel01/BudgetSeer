import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class AlignItems extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={[styles.appIconContainer, styles.headerItem]}>
              <Text style={[styles.white]}>ICON</Text>
            </View>
            <View style={[styles.appNameContainer, styles.headerItem]}>
              <Text style={[styles.white]}>Budget Seer</Text>
            </View>
            <View style={[styles.closeIconContainer, styles.headerItem]}>
              <Text  style={[styles.white]}>X</Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text>content!</Text>
          </View>
          <View style={styles.footer}>
            <Text style={[styles.footerText]}>
              Budget Seer 2016. All rights reserved.
              BUDGET SEER® is a registered trademark of Orange Labs PH
            </Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ade5e5',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    flex: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#255e5e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  appNameContainer: {
    flex: 7,
    backgroundColor: '#255e5e',
  },
  appIconContainer: {
    flex:1,
    backgroundColor: '#255e5e',
  },
  closeIconContainer: {
    flex: 1,
    backgroundColor: '#255e5e'
  },
  white: {
    color: '#ffffff',
    fontWeight: '900',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 6
  }
})
