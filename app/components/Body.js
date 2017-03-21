import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native'

export default class Body extends Component {

  constructor(props) {
    super(props)
    this.state = {
      description: '', amount: 0
    }
    this.descriptionOnChangeHandler = this.descriptionOnChangeHandler.bind(this)
    this.amountOnChangeHandler = this.amountOnChangeHandler.bind(this)
    this.post = this.post.bind(this)
  }

  descriptionOnChangeHandler(event) {
    this.setState(
      {
        description: event.nativeEvent.text
      }
    )
  }

  amountOnChangeHandler(event) {
    this.setState(
      {
        amount: parseFloat(event.nativeEvent.text)
      }
    )
  }

  post() {
    let data = {description: this.state.description, amount: this.state.amount}
    this.props.postHandler(data)
    this.props.transitionHandler({name: 'ExpenseList'})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View><Text>Expense</Text></View>
          <View style={styles.textInputContainer}>
            <TextInput
              onChange={this.descriptionOnChangeHandler}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View><Text>Amount</Text></View>
          <View style={styles.textInputContainer}>
            <TextInput
              onChange={this.amountOnChangeHandler}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.post}
              title='Post'
              color='#255e5e'
            />
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 17,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50
  },
  textInputContainer: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    marginTop: 30,
  }
})
