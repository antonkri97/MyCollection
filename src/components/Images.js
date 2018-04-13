import React, { Component } from "react";
import { getImages } from "../services/images";
import { ViewMode } from "./ViewMode";
import fetch from "isomorphic-fetch";

import "../styles/style.css";
import { imageRequest } from "../actions/images";

export class Images extends Component {
  state = {
    images: [],
    iamgesUrl: "",
    selectedIndex: -1,
    viewMode: false
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      images: nextProps.images
    });
  }

  componentDidMount() {
    imageRequest(this.props.store.dispatch);
  }

  /**
   * @param {string} path - image path
   */

  toggleViewMode = (index, imagesUrl) => () =>
    this.setState(prevState => ({
      selectedIndex: index,
      imagesUrl: imagesUrl
    }));

  changeImageBack = (imagesLength, images, imagesUrl) => () =>
    this.setState(prevState => ({
      selectedIndex:
        prevState.imagesUrl === 0 ? -1 : prevState.images[imagesUrl - 1],
      imagesUrl: imagesUrl - 1
    }));

  changeImage = (imagesLength, images, imagesUrl) => () =>
    this.setState(prevState => ({
      selectedIndex:
        prevState.imagesUrl + 1 === imagesLength
          ? -1
          : prevState.images[imagesUrl + 1],
      imagesUrl: imagesUrl + 1
    }));

  onClose = () =>
    this.setState({
      selectedIndex: -1
    });

  render() {
    const { images, selectedIndex, imagesUrl } = this.state;
    const { toggleViewMode, changeImage, changeImageBack, onClose } = this;
    const imagesLength = images.length;
    return selectedIndex === -1 ? (
      <div className="grid-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="item"
            src={image}
            onClick={toggleViewMode(image, index)}
          >
            <img src={image} key={index} alt={image} />
          </div>
        ))}
      </div>
    ) : (
      <ViewMode
        image={selectedIndex}
        onBack={changeImageBack(imagesLength, images, imagesUrl)}
        onForward={changeImage(imagesLength, images, imagesUrl)}
        onClose={onClose}
      />
    );
  }
}
