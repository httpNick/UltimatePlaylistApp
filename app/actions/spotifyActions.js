import types from './actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';
import q from 'q';


spotify = new SpotifyWebApi();
spotify.setPromiseImplementation(q);

module.exports = {

  searchArtist : (term) => {

    return queryForArtist(term, 5).then(res => {
      return {
        type: types.ARTIST_SEARCH,
        res
      }
    });

  }


};

queryForArtist = (term, limit) => {

  spotify.searchArtists(
    term,
    { limit : limit }
  ).then((data) => {
    return data;
  }, (err) => {
    return err;
  }).then((res) => {
    return res;
  });
  
};