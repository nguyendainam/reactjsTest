import React from "react";
import "./Navigation.css";
import imgObject from "../../Base/Image";
import {
  TbLayoutSidebarRightExpandFilled,
  TbLayoutSidebarLeftExpandFilled,
} from "react-icons/tb";
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        { name: "About" },
        { name: "Services" },
        { name: "Products" },
        { name: "List" },
        { name: "Support" },
      ],

      openSidebar: true,
    };
  }

  handleCloseSideBar = () => {
    this.setState({
      openSidebar: !this.state.openSidebar,
    });
  };

  render() {
    let { nav, openSidebar } = this.state;
    return (
      <>
        <div className="nav">
          <div className="nav-bars">
            <img src={imgObject.bars} className="icon-bars" />
          </div>
          <div className="nav-logo">
            <img src={imgObject.logo} alt="logo" className="icon-logo" />
          </div>
          <div className="nav-items">
            {this.state.nav.map((item, index) => {
              return (
                <div key={index} className="nav-item">
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="nav-list">
          <div className="nav-items">
            {this.state.nav.map((item, index) => {
              return (
                <div key={index} className="nav-item">
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="sideBar" id={openSidebar === true ? "Active" : "Close"}>
          <div className="top-bars">
            <div className="nav-logo">
              <img src={imgObject.logo} alt="logo" className="icon-logo" />
            </div>
            <div className="nav-close">
              <TbLayoutSidebarRightExpandFilled
                size={"20px"}
                onClick={() => this.handleCloseSideBar()}
              />
            </div>
          </div>

          <div className="items-sidebar">
            {nav.map((item, index) => {
              return (
                <div className="item" key={index}>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="nav-items-mobile">
          <div className="open-sidebar">
            <TbLayoutSidebarLeftExpandFilled
              size={"20px"}
              onClick={() => this.handleCloseSideBar()}
            />
          </div>

          <div className="nav-logo">
            <img src={imgObject.logo} alt="logo" className="icon-logo" />
          </div>
        </div>
      </>
    );
  }
}
