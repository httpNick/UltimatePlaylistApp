import types from './../actions/actionTypes';

const ultplaylist = (state, action) => {

  switch(action.type) {

    case types.ARTIST_SEARCH :
      return {
        res: action.res
      }

  }

};

export default ultplaylist;