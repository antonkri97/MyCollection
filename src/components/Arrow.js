import React from "react";
import PropTypes from "prop-types";

export const Arrow = ({ direction, onClick }) => (
  <div className={`button_${direction}`} onClick={onClick}>
    <img src={`../${direction}-arrow.svg`} alt="direction" />
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  onClick: PropTypes.func.isRequired
};
