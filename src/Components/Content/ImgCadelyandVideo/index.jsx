import React, { Component } from "react";
import "./index.css";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";

class Index extends Component {
  render() {
    return (
      <div className="main-ImgandVid">
        <h3>Image Gallery</h3>
        <ImageGallery />
        <h3> Video Gallery</h3>
        <VideoGallery />
      </div>
    );
  }
}

export default Index;
