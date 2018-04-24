import React from "react";
import PropTypes from "prop-types";
import { Arrow } from "./Arrow";
import { Close } from "./Close";

export const ViewMode = ({ image, onBack, onForward, onCloseImage }) => (
  <div className="view">
    <Arrow direction="left" onClick={onBack} />
    <div className="view__wrapper">
      <div className="wrapper_img" onClick={onForward}>
        <img src={image} alt={image} />
      </div>
      <Close onClose={onCloseImage} />
    </div>
    <Arrow direction="right" onClick={onForward} />
  </div>
);

ViewMode.propTypes = {
  image: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  onForward: PropTypes.func.isRequired,
  onCloseImage: PropTypes.func.isRequired
};
