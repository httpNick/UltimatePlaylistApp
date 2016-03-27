import React, {
  TextInput,
  Text,
  View
} from 'react-native';

class Search extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      text : '',
      textDisplayed : ''
    };

  }

  render() {

    return(
        <TextInput
          style={{height: 40, borderColor: 'green', borderWidth: 1, flex: 1}}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
          onSubmitEditing={(event) => {

          this.setState({textDisplayed : event.nativeEvent.text});
          this.props.onSubmit(event.nativeEvent.text);

          }}
        />

    );

  }

}

module.exports = Search;
