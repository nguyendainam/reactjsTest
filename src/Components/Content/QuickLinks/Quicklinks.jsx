import React, { Component } from "react";
import "./Quicklinks.css";
import imgObject from "../../../Base/Image";

class Quicklinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { icon: imgObject.icon, name: "Training" },
        { icon: imgObject.icon_1, name: "Organization" },
        { icon: imgObject.icon_2, name: "Task" },
        { icon: imgObject.icon_3, name: "Global Sales" },
        { icon: imgObject.icon_4, name: "Birthday" },
        { icon: imgObject.icon_5, name: "Health" },
        { icon: imgObject.icon_6, name: "Service Desk" },
        { icon: imgObject.icon_7, name: "Truck" },
        { icon: imgObject.icon_8, name: "Idea" },
        { icon: imgObject.icon_8, name: "Service Desk" },
        { icon: imgObject.icon_8, name: "Truck" },
        { icon: imgObject.icon_8, name: "Idea" },
      ],
      viewMore: true,
      firstData: [],
    };
  }

  componentDidMount() {
    this.setState({
      firstData: this.state.data.slice(0, 9),
    });
  }

  handleViewMore = (viewMore) => {
    let { data, firstData } = this.state;
    let OtherData = data.slice(9);
    let newData = firstData.concat(OtherData);

    if (viewMore === true) {
      this.setState({
        firstData: newData,
        viewMore: false,
      });
    } else if (viewMore === false) {
      let hideData = newData.slice(0, 9);
      this.setState({
        firstData: hideData,
        viewMore: true,
      });
    }
  };

  render() {
    let { firstData, viewMore } = this.state;
    return (
      <div className="main-quick">
        <h4>Quick Links</h4>
        <div className="all-items">
          {firstData.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img src={item.icon} className="image_items" />
                <span> {item.name} </span>
              </div>
            );
          })}
        </div>

        <div
          className="bottom-Announ"
          onClick={() => this.handleViewMore(viewMore)}
        >
          <text className="link">
            {viewMore === false ? `Hide >>` : `Views More >>`}{" "}
          </text>
        </div>
      </div>
    );
  }
}

export default Quicklinks;
