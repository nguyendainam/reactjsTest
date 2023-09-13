import React, { Component } from "react";
import "./Announcement.css";
import imgObject from "../../../Base/Image";
import { AiFillSchedule } from "react-icons/ai";
import moment from "moment/moment";
class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          nameTitle: "New Learning System Is Live",
          description: `New Wellness Lorem ipsum dolor sit amet, consetetur sadipscing
            elitrinvidunt ut labore et dolore aaliquya erat, sed diam
            voluptuaaa vero eos et accusam et justo duo d ea rebum.
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet... consetetur sadip m ipsum
            dolor sit amet, consetetur sadim ipsum dolorsadi...`,
          date: "2023-09-12",
          position: "Human Resource",

          image: imgObject.image_gallery,
        },
        {
          id: 1,
          nameTitle: "IT Maintenance",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2023-09-12",
          position: "Human Resource",

          image: imgObject.image_gallery_1,
        },
        {
          id: 2,
          nameTitle: "IT Maintenance",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-08-17",
          position: "Human Resource",

          image: imgObject.image_gallery_2,
        },
        {
          id: 3,
          nameTitle: "IT Maintenance",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-08-17",
          position: "Human Resource",

          image: imgObject.image_gallery_3,
        },
        {
          id: 4,
          nameTitle: "IT Maintenance",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-08-17",
          position: "Human Resource",

          image: imgObject.image_gallery_4,
        },
        {
          id: 5,
          nameTitle: "IT Maintenance",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-08-17",
          position: "Human Resource",

          image: imgObject.image_gallery_5,
        },
        {
          id: 6,
          nameTitle: "IT Maintenance",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-08-17",
          position: "Human Resource",

          image: imgObject.image_gallery_6,
        },

        {
          id: 7,
          nameTitle: "IT Maintenance",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-08-17",
          position: "Human Resource",

          image: imgObject.image_gallery_3,
        },
        {
          id: 8,
          nameTitle: "IT Maintenance",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-08-17",
          position: "Human Resource",

          image: imgObject.image_gallery_1,
        },
        {
          id: 9,
          nameTitle: "IT Maintenance",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-08-17",
          position: "Human Resource",

          image: imgObject.image_gallery_2,
        },
      ],
      viewMore: true,
      firstData: [],
    };
  }

  componentDidMount() {
    let { data } = this.state;
    this.setState({
      firstData: data.slice(0, 4),
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
      <div className="views-Announcement">
        <h3>Announcement</h3>
        {firstData.map((item, index) => {
          let date = moment(item.date).format("DD/MMM/YYYY");

          return (
            <div className="form-document" key={index}>
              <div className="image-document">
                <img src={item.image} className="image" />
              </div>
              <div className="right-form">
                <div className="text-form">
                  <span className="title-childs">{item.nameTitle}</span>
                  <div className="content-childs">{item.description}</div>
                </div>
                <div className="bottom-childs">
                  <img src={imgObject.date} />
                  <span className="form-date">{date}</span>

                  <div className="form-position">{item.position}</div>
                </div>
              </div>
            </div>
          );
        })}

        <div
          className="bottom-Announ"
          onClick={() => this.handleViewMore(viewMore)}
        >
          <text className="link">
            {viewMore === false ? `Hide >>` : `View More >>`}{" "}
          </text>
        </div>
      </div>
    );
  }
}

export default Announcement;
