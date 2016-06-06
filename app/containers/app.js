import React, {
  Component
  StyleSheet,
  Text,
} from 'react-native';

import { connect } from 'react-redux';


class UltimatePlaylistApp extends Component {


  render() {

    return (
      <View>
        <Text>Hello world</Text>
      </View>
    );

  }

};

const styles = StyleSheet.create({ });

export default connect(state => {
    state : state
  }
)(UltimatePlaylistApp);