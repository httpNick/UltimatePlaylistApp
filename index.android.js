/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Search from './components/Search';

class UltimatePlaylistApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text : ""
    };
  }

  render() {
    return (
      <Search
        onSubmit = {(text) => {console.log(text)}}/>
    );
  }
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('UltimatePlaylistApp', () => UltimatePlaylistApp);
