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

import App from 'app/containers/app';

class UltimatePlaylistApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text : ""
    };
  }

  render() {
    return (
      <App />
    );
  }
  
  
}

AppRegistry.registerComponent('UltimatePlaylistApp', () => UltimatePlaylistApp);
