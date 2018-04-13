import * as imageTypes from "../constants/images";
import { fetchImages } from "../services/images";

export const fetchImagesRequest = () => ({
  type: imageTypes.FETCH_IMAGES_REQUEST
});

export const fetchImagesSuccess = images => ({
  type: imageTypes.FETCH_IMAGES_SUCCESS,
  images
});

export const fetchImagesError = error => ({
  type: imageTypes.FETCH_IMAGES_ERROR,
  error
});

export const imageRequest = async dispatch => {
  dispatch(fetchImagesRequest());

  const images = await fetchImages();

  dispatch(fetchImagesSuccess(images));
};
