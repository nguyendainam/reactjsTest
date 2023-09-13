import React, { Component } from "react";
import "./index.css";
import imgObject from "../../../Base/Image";
import { AiOutlinePlayCircle } from "react-icons/ai";
export default class VideoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { image: imgObject.video },
        { image: imgObject.video_1 },
        { image: imgObject.video_2 },
        { image: imgObject.video_3 },
        { image: imgObject.image_gallery_1 },
        { image: imgObject.image_gallery_2 },
        { image: imgObject.image_gallery_4 },
      ],
      viewMore: true,
      firstData: [],
    };
  }
  componentDidMount() {
    this.setState({
      firstData: this.state.data.slice(0, 4),
    });
  }

  handleViewMore = (viewMore) => {
    let { data, firstData } = this.state;
    let OtherData = data.slice(4);
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
                className="form-video"
                key={index}
                id={viewMore === false ? "Active" : "False"}
              >
                <img className="video-child" src={item.image} />
                <AiOutlinePlayCircle
                  className="button-play"
                  style={{
                    fontSize: "60px",
                    color: "white",
                  }}
                />
              </div>
            );
          })}
        </div>
        <div
          className="bottom-items"
          onClick={() => this.handleViewMore(viewMore)}
        >
          <text className="link">
            {viewMore === false ? `Hide >>` : `Views More >>`}{" "}
          </text>
        </div>
      </>
    );
  }
}
