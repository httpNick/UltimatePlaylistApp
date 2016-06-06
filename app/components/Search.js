import React, {
  TextInput,
  Text,
  View
} from 'react-native';

import SpotifyWebApi from 'spotify-web-api-js';
import q from 'q';

let spotify;

class Search extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      text : '',
      textDisplayed : ''
    };

    spotify = new SpotifyWebApi();
    spotify.setPromiseImplementation(q);

  }
  
  onSubmit(text) {

  }

  render() {

    return(
        <TextInput
          style={{height: 40, borderColor: 'green', borderWidth: 1, flex: 1}}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
          onSubmitEditing={(event) => {
            this.setState({textDisplayed : event.nativeEvent.text});
            this.onSubmit(event.nativeEvent.text);
          }}
        />

    );

  }

}

module.exports = Search;
