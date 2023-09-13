import React from "react";
import "./layout.css";
import Navigation from "../Components/Navigation/Navigation";
import AnnouAndNew from "../Components/Content/AnnounAndNews/index";
import ImageAndVideo from "../Components/Content/ImgCadelyandVideo/index";
import Quicklinks from "../Components/Content/QuickLinks/Quicklinks";
import Envent from "../Components/Content/Event/Envent";
import HowDoI from "../Components/Content/Questions/Questions";
import Document from "../Components/Content/Document/index";
export default class Layout extends React.Component {
  render() {
    return (
      <div className="portal-homepage">
        <div className="wrap">
          <div className="header">
            <Navigation />
          </div>
          <div className="content">
            <div className="left-content">
              <AnnouAndNew />
              <ImageAndVideo />
              <Document />
            </div>

            <div className="right-content">
              <Quicklinks />
              <Envent />
              <HowDoI />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
