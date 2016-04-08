import React, {Component} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store = store

        />
    )
  }
}