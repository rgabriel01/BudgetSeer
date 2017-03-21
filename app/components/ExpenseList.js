import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native'

import Header from './Header';
import Footer from './Footer';

export default class ExpenseList extends Component {
  constructor(props) {
    super(props)
  }

  renderList() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    function renderRow(rowData) {
      return (
        <View style={styles.listViewContainer}>
          <Text style={styles.expenseDescription}>{rowData.description}</Text>
          <Text>{rowData.amount}</Text>
        </View>
      )
    }

    return (
      <ListView
        dataSource={ds.cloneWithRows(this.props.expenses)}
        renderRow={renderRow}
      />
    )
  }

  computeTotal() {
    console.log('mon was here')
    let total = this.props.expenses.map( function(expense) {
      return expense.amount
    }).reduce(function(acc, val) {
      return acc + val
    })
    return total
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.list}>
          <Text style={styles.totalExpense}>Total Expense for today: {this.computeTotal()}</Text>
          {this.renderList()}
        </View>
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    flex: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  listViewContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  expenseDescription: {
    marginRight: 10,
    marginBottom: 10
  },
  totalExpense: {
    marginBottom: 10,
    fontWeight: '900'
  }
});
