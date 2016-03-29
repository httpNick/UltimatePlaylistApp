import React, {
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import Search from './Search';

var App = React.createClass({
  renderScene: function(route, nav) {
    switch (route.id) {

      case 'AlbumList' :
        return (
          <Artists
            message={route.message}
            navigator={nav}
          />
        );

      default:
        return (
          <Search
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
          initialRoute={{ message: 'Search' }}
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