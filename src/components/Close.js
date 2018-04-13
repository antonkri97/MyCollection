import React from "react";
import PropTypes from "prop-types";

export const Close = ({ onClose }) => (
  <div className="close" onClick={onClose}>
    <img src="../error.svg" alt="" />
  </div>
);

Close.propTypes = {
  onClose: PropTypes.func.isRequired
};
