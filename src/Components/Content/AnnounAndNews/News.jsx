import moment from "moment";
import React, { Component } from "react";
import imgObject from "../../../Base/Image";
import "./Announcement.css";
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          nameTitle: "Tomorrow Healthy Check",
          description: `New Wellness Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum. gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet... consetetur sadip m ipsum dolor sit amet, consetetur sadim ipsum dolorsadi...`,
          date: "2021-01-5",

          image: imgObject.markgroup2,
        },
        {
          id: 1,
          nameTitle: "Air-conditioning is broken",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-01-5",
          image: imgObject.markgroup1,
        },
        {
          id: 2,
          nameTitle: "Keep Running",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-01-5",
          image: imgObject.markgroup_2,
        },
        {
          id: 3,
          nameTitle: "Temperature above 37.3℃ need to report",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-01-5",
          image: imgObject.markgroup_3,
        },
        {
          id: 4,
          nameTitle: "Temperature above 37.3℃ need to report",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-01-5",
          image: imgObject.image_gallery_4,
        },
        {
          id: 5,
          nameTitle: "Temperature above 37.3℃ need to report",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-01-5",
          image: imgObject.markgroup_3,
        },
        {
          id: 6,
          nameTitle: "Temperature above 37.3℃ need to report",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-01-5",
          image: imgObject.image_gallery_4,
        },
        {
          id: 7,
          nameTitle: "Temperature above 37.3℃ need to report",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-01-5",
          image: imgObject.image_gallery_5,
        },
        {
          id: 8,
          nameTitle: "Temperature above 37.3℃ need to report",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-01-5",
          image: imgObject.image_gallery_6,
        },
        {
          id: 9,
          nameTitle: "Temperature above 37.3℃ need to report",
          description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo`,
          date: "2021-01-5",
          image: imgObject.markgroup_3,
        },
      ],

      firstData: [],
      viewMore: true,
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
    let { data, firstData, viewMore } = this.state;
    return (
      <div className="views-Announcement">
        <h3>News</h3>
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
                  <text className="form-date">{date}</text>
                </div>
              </div>
            </div>
          );
        })}

        <div className="bottom-Announ">
          <text className="link" onClick={() => this.handleViewMore(viewMore)}>
            {viewMore === false ? `Hide >>` : `Views More >>`}
          </text>
        </div>
      </div>
    );
  }
}

export default News;
