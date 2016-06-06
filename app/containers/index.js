var secrets = require('../../secrets.json');
import React, {
  Component,
  Linking,
  Text
} from 'react-native';

export default class App extends Component {

  componentDidMount() {
    Linking.addEventListener('url', (event) => {
      console.log(event.url);
    })
  }

  render() {
    return (
      <Text>{spotifyAuth()}</Text>
    )
  }

}
var spotifyAuth = () => {
  Linking.openURL([
    'https://accounts.spotify.com/authorize/',
    '?client_id=' + secrets.id,
    '&response_type=code',
    '&redirect_uri=ultimateplaylist://foo'
    ].join('')
  );
};