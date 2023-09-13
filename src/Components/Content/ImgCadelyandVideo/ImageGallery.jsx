import React, { Component } from "react";
import "./index.css";
import imgObject from "../../../Base/Image";
export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataImage: [
        { image: imgObject.image_gallery },
        { image: imgObject.image_gallery_1 },
        { image: imgObject.image_gallery_2 },
        { image: imgObject.image_gallery_3 },
        { image: imgObject.image_gallery_1 },
        { image: imgObject.image_gallery_1 },
        { image: imgObject.image_gallery_2 },
        { image: imgObject.image_gallery_3 },
      ],
      firstData: [],
      viewMore: true,
    };
  }
  componentDidMount() {
    console.log(this.state.viewMore, "AAAAAAAAA@@");
    this.setState({
      firstData: this.state.dataImage.slice(0, 4),
    });
  }

  handleViewMore = (viewMore) => {
    let { dataImage, firstData } = this.state;
    let OtherData = dataImage.slice(4);
    let newData = firstData.concat(OtherData);

    if (viewMore === true) {
      this.setState({
        firstData: newData,
        viewMore: false,
      });
    } else if (viewMore === false) {
      let hideData = newData.slice(0, 4);
      this.setState({
        firstData: hideData,
        viewMore: true,
      });
    }
  };

  render() {
    let { firstData, viewMore } = this.state;
    return (
      <>
        <div className="form-list-views">
          {firstData.map((item, index) => {
            return (
              <div
                className="form-image"
                key={index}
                id={viewMore === false ? "Active" : "False"}
              >
                <img className="image-child" src={item.image} />
              </div>
            );
          })}
        </div>
        <div
          className="bottom-items"
          onClick={() => this.handleViewMore(viewMore)}
        >
          <text className="link">
            {viewMore === false ? `Hide >>` : `Views More >>`}
          </text>
        </div>
      </>
    );
  }
}
