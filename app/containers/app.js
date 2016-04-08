import React, {
  Navigator,
  Component
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import Search from './../components/Search';
import Artists from './../components/Artists';

class UltimatePlaylistApp extends Component {

  renderScene(route, nav) {
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
  }

  render() {
    return (

        <Navigator
          sceneStyle={styles.container}
          initialRoute={{ message: 'Search' }}
          renderScene={this.renderScene}
          /*configureScene={() => {
            return Navigator.SceneConfigs.FloatFromBottom;
          }}*/
        />

    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection : 'row'
  }
});

export default connect(state => ({
  
}))(UltimatePlaylistApp);