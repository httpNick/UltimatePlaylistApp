import React, {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

class Artists extends React.Component {

  constructor(props) {
    super(props);
    this.images = props.message.artists.items[0].images;
  }

  render() {
    return (
      <View>
        {this.images.map(this.createImage)}
      </View>
    );
  }

  createImage(image, i) {
    console.log('got into create image');
    if (image.url !== undefined) {
      return (
        <Artist
          key={i}
          uri={image.url}
        />
      )
    }
  }

}

class Artist extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
      <Image
        style={styles.image}
        source={{uri:this.props.uri}}
      />
    </View>
  )
  }
}

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection : 'row'
  },

  image: {
    width: 64,
    height: 64
  }

});

module.exports = Artists;