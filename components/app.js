import React, {
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import SpotifyWebApi from 'spotify-web-api-js';

var spotify = new SpotifyWebApi();

import Search from './Search';

var App = React.createClass({
  renderScene: function(route, nav) {
    switch (route.id) {

      default:
        return (
          <Search
            onSubmit = {(text) => {
              spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
                if (err) console.error(err);
                else console.log('Artist albums', data);
              });
            }}
            message={route.message}
            navigator={nav}
          />
        );

    }
  },

  render: function() {
    return (

        <Navigator
          sceneStyle={styles.container}
          initialRoute={{ message: 'Search', }}
          renderScene={this.renderScene}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromBottom;
          }}
        />

    );
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection : 'row'
  }
});


App.external = true;

module.exports = App;