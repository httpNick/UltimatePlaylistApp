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

import SpotifyWebApi from 'spotify-web-api-js';
var spotify = new SpotifyWebApi();

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
        onSubmit = {(text) => {
          spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
            if (err) console.error(err);
            else console.log('Artist albums', data);
          });
        }}
      />
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
