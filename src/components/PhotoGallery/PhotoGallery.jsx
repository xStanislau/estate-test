import React, { Component } from "react";
import * as imgConfig from "../../config/images";
import ReactBnbGallery from "react-bnb-gallery";
import ImageGalleryPreview from "./ImageGalleryPreview/ImageGalleryPreview";
import PreviewImgList from "../PreviewImgList/PreviewImgList";
import PhotoBadge from "./PhotoBadge/PhotoBadge";
import "./PhotoGallery.scss";

class PhotoGallery extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      galleryOpened: false,
      currentPhotoId: 0
    };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  setCurrentPhotoId = id => {
    this.setState({
      currentPhotoId: id
    });
  };

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  handleTnumbnailClick = id => () => {
    this.setCurrentPhotoId(id);
    this.toggleGallery();
  };

  render() {
    const { item, className } = this.props;
    const { currentPhotoId } = this.state;
    const photos =
      item.images &&
      item.images
        .filter(element => {
          return element.isPublic;
        })
        .map(element => {
          const { PREFIXES, URL } = imgConfig;
          const imgSrcSmall = `${URL}/${element.id}-thumbnail-${PREFIXES[256]}`;
          const imgSrc = `${URL}/${element.id}-jqestate-${PREFIXES[1024]}`;
          return {
            photo: imgSrc,
            thumbnail: imgSrcSmall
          };
        });

    return (
      <div className={className}>
        <ImageGalleryPreview className="img-gallery-preview">
          <PhotoBadge text="Фото" number={photos && photos.length} />
          <PreviewImgList
            className="preview-image"
            photos={photos}
            onClick={this.handleTnumbnailClick}
          />
        </ImageGalleryPreview>

        <ReactBnbGallery
          show={this.state.galleryOpened}
          photos={photos && photos}
          onClose={this.toggleGallery}
          activePhotoIndex={currentPhotoId}
        />
      </div>
    );
  }
}

export default PhotoGallery;
