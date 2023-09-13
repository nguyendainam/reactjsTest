import React, { Component } from "react";
import "./Questions.css";
import { CiSearch } from "react-icons/ci";
import { BsFillPlusCircleFill } from "react-icons/bs";
class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idActive: "",
      data: [
        {
          title: "Lorem ipsum dolor sit amet",
          descips: `Descritption 1 
      .`,
        },
        {
          title: "Lorem ipsum dolor sit amet",
          descips: `Descritption 2 
      .`,
        },
        {
          title: "Lorem ipsum dolor sit amet",
          descips: `Descritption 3
      .`,
        },
        {
          title: "Lorem ipsum dolor sit amet",
          descips: `Sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisiut aliquip ex ea commodo consequat. Duis
      uis nostrud exercitation ullamco laboris nisiut aliquip ex uis
      nostrud exercitation ullamco laboris nisiut aliqubore et
      .`,
        },
        {
          title: "Lorem ipsum dolor sit amet",
          descips: `ABOUT 1
      .`,
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

  handleOnchangeItems = (id) => {
    console.log(id);
    if (id === this.state.idActive) {
      console.log("Id click is", id);

      console.log("active is", this.state.idActive);

      this.setState({
        idActive: null,
      });
    } else {
      this.setState({
        idActive: id,
      });
    }
  };

  handleSearch = (event) => {
    let keyword = event.target.value;
    if (keyword !== null || keyword) {
      let { data } = this.state;

      const getdata = data.filter((item) =>
        item.descips.toLowerCase().includes(keyword.toLowerCase())
      );
      if (getdata.length > 0) {
        this.setState({
          firstData: getdata,
        });
      } else if (getdata.length === 0) {
        this.setState({
          firstData: [],
        });
      }
    }
  };

  render() {
    let { idActive, firstData, viewMore } = this.state;
    return (
      <div className="main-views-Hows">
        <h3>How Do I</h3>

        <div className="list-views-Hows">
          <div className="form-search">
            <CiSearch
              style={{
                paddingLeft: "3%",
              }}
            />
            <input
              typeof="text"
              className="search"
              onChange={(event) => this.handleSearch(event)}
            />
          </div>
          <div className="all-items">
            {firstData &&
              firstData.length > 0 &&
              firstData.map((item, index) => {
                return (
                  <div className="list-items" key={index}>
                    <div
                      className="items"
                      onClick={() => this.handleOnchangeItems(index)}
                      id={index === idActive ? "Active" : ""}
                    >
                      <BsFillPlusCircleFill
                        style={{
                          color: "white",
                          paddingLeft: "2%",
                          paddingRight: "1%",
                        }}
                      />
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>

                    <div
                      className="content-item"
                      key={index}
                      id={index === idActive ? "Active" : ""}
                    >
                      <text
                        style={{
                          paddingLeft: "2%",
                        }}
                        className="about-text"
                      >
                        {item.descips}
                      </text>
                    </div>
                  </div>
                );
              })}

            {firstData.length === 0 ? (
              <span
                style={{
                  color: "red",
                }}
              >
                {" "}
                No Data Returned
              </span>
            ) : (
              ""
            )}
          </div>
          {firstData.length > 0 ? (
            <div
              className="bottom-Announ"
              onClick={() => this.handleViewMore(viewMore)}
            >
              <text className="link">
                {viewMore === false ? `Hide >>` : `View More >>`}
              </text>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Questions;
