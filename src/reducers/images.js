import * as imagesTypes from "../constants/images";

const initialState = {
  isFetching: false,
  images: [],
  error: null
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case imagesTypes.FETCH_IMAGES_REQUEST:
      return { ...state, isFetching: true };
    case imagesTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        images: action.images
      };
    case imagesTypes.FETCH_IMAGES_ERROR:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};
