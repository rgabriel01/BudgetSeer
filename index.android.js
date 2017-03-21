/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import StartScreen from './app/components/StartScreen';
import MainScreen from './app/components/MainScreen';
import ExpenseList from './app/components/ExpenseList';

export default class BudgetSeer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {description: 'Bus Fare', amount: 40},
        {description: 'MRT Fare', amount: 20},
        {description: 'Breakfast', amount: 100}
      ]
    }
    this.postHandler = this.postHandler.bind(this)
  }

  postHandler(data) {
    this.setState({
      expenses: this.state.expenses.concat([data])
    })
  }

  render() {
    let _this = this
    return (
      <Navigator
        initialRoute= {{ name: 'StartScreen' }}
        renderScene= {(route, navigator) => {
          switch (route.name) {
            case 'StartScreen':
              return (
                <StartScreen
                  onStartHandler={() => navigator.push({name: 'MainScreen'})}
                />
              )
            case 'MainScreen':
              return (
                <MainScreen
                  expenses={_this.state.expenses}
                  postHandler={_this.postHandler}
                  transitionHandler={(_route) => navigator.push(_route)}
                />
              )
            case 'ExpenseList':
              return (
                <ExpenseList
                  expenses={_this.state.expenses}
                />
              )
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('BudgetSeer', () => BudgetSeer);
