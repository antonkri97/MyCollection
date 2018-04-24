import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { imageRequest } from "../actions/images";
import { Images } from "../components/Images";

class ImagesContainer extends Component {
  state = {
    selectedImage: -1
  };

  static propTypes = {
    omImageLoad: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.omImageLoad();
  }

  onSelectImage = index => () =>
    this.setState({
      selectedImage: index
    });

  onCloseImage = () =>
    this.setState({
      selectedImage: -1
    });

  render() {
    const { images } = this.props;
    const { onCloseImage, onSelectImage } = this;
    const { selectedImage } = this.state;
    const image = images[selectedImage] || "";
    return (
      <Images
        images={images}
        image={image}
        onSelectImage={onSelectImage}
        onCloseImage={onCloseImage}
      />
    );
  }
}

const mapStateToProps = state => ({
  images: state.images
});
const mapDispatchToProps = dispatch => ({
  omImageLoad: () => imageRequest(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer);
