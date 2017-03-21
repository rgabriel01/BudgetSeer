import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image
} from 'react-native'
import moment from 'moment'
import Header from './Header';
import Footer from './Footer';

const icon = require('../images/money.png');

export default class ExpenseList extends Component {
  constructor(props) {
    super(props)
  }

  renderList() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    return (
      <ListView
        style={styles.listView}
        dataSource={ds.cloneWithRows(this.props.expenses)}
        renderRow={renderRow}
      />
    )

    function renderRow(rowData) {
      return (
        <View style={styles.listViewRowContainer}>
          <View style={styles.iconColumn}>
            <Image style={styles.icon} source={icon} />
          </View>
          <View style={styles.rowColumn}>
            <Text style={styles.rowItemText}>{rowData.description}</Text>
          </View>
          <View style={styles.rowColumn}>
            <Text style={styles.rowItemText}>{rowData.amount}</Text>
          </View>
        </View>
      )
    }

  }

  computeTotal() {
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
          <Text style={styles.date}>{moment().format('MMMM Do YYYY')}</Text>
          <Text style={styles.total}>Total Expense: {this.computeTotal()}</Text>
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
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  listView: {
    flex: 1
  },
  listViewRowContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dcdcdc',
  },
  rowColumn: {
    flex: 1,
  },
  iconColumn: {
    flex: .1
  },
  rowItemText: {
    fontSize: 11
  },
  total: {
    marginBottom: 10,
    fontWeight: '900',
    fontSize: 11
  },
  date: {
    fontWeight: '900',
    color: '#255e5e'
  },
  icon: {
    height: 13,
    width: 13
  }
});
