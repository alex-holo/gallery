import {GET_PICTURE, setPictureData} from './actions';
import {toJson} from 'unsplash-js/lib/unsplash';

const initialState = {
  data: [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PICTURE:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export const getPicture = () => (dispatch) => {
  const TOKEN = 'CrMrUJCx73SCmPwoZlxL9SyI4bcxSUdCbFbX_1SW_c0';
  const baseURL = 'https://api.unsplash.com/';
  fetch(`${baseURL}photos?client_id=${TOKEN}`)
    .then(toJson)
    .then((data) => dispatch(setPictureData(data)));
};

export default photoReducer;
