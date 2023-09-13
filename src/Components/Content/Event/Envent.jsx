import React, { Component } from "react";
import "./Envent.css";
import { AiOutlineClockCircle } from "react-icons/ai";
export default class Envent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          date: "01",
          month: "Jan",
          title: "Register Portal",
          time: "09:00 AM - 09:30 AM",
        },
        {
          date: "02",
          month: "Jan",
          title: "IT Maintenance",
          time: "09:00 AM - 09:30 AM",
        },
        {
          date: "03",
          month: "Jan",
          title: "IT Maintenance",
          time: "09:00 AM - 09:30 AM",
        },
        {
          date: "04",
          month: "Jan",
          title: "IT Maintenance",
          time: "09:00 AM - 09:30 AM",
        },
        {
          date: "05",
          month: "Jan",
          title: "IT Maintenance 2",
          time: "09:00 AM - 09:30 AM",
        },

        {
          date: "06",
          month: "Jan",
          title: "IT Maintenance 3",
          time: "09:00 AM - 09:30 AM",
        },

        {
          date: "07",
          month: "Jan",
          title: "IT Maintenance 4 ",
          time: "09:00 AM - 09:30 AM",
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
      <div className="main-views-Envent">
        <h3>Events</h3>

        <div className="list-event-items">
          {firstData.map((item, index) => {
            return (
              <div className="form-list" key={index}>
                <div className="schedule-left">
                  <text className="date">{item.date}</text>
                  <text className="month">{item.month}</text>
                </div>
                <div className="information-right ">
                  <text className="title-event">{item.title}</text>
                  <div className="infor-time">
                    <AiOutlineClockCircle
                      style={{
                        color: "gray",
                        paddingRight: "1%",
                      }}
                    />
                    {item.time}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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
