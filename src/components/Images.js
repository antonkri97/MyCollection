import React from "react";
import PropTypes from "prop-types";
import { ViewMode } from "./ViewMode";

export const Images = ({ images, image, onSelectImage, onCloseImage }) =>
  image === "" ? (
    <div className="grid-container">
      {images.map((image, index) => (
        <div key={image} className="item" onClick={onSelectImage(index)}>
          <img src={image} alt={image} />
        </div>
      ))}
    </div>
  ) : (
    <ViewMode
      image={image}
      onBack={() => {}}
      onForward={() => {}}
      onCloseImage={onCloseImage}
    />
  );

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  image: PropTypes.string.isRequired,
  onSelectImage: PropTypes.func.isRequired,
  onCloseImage: PropTypes.func.isRequired
};
