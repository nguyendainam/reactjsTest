import React, { Component } from "react";
import "./index.css";
import imgObject from "../../../Base/Image";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_left: [
        {
          name: "Policy",
          data_child: [
            { name: "Policy 1", img: imgObject.word },
            { name: "Policy 2", img: imgObject.word },
            { name: "Policy 3", img: imgObject.word },
            { name: "Policy 4", img: imgObject.word },
          ],
        },

        {
          name: "CorporateTemplate",
          data_child: [
            { name: "Policy 1", img: imgObject.word },
            { name: "Policy 2", img: imgObject.word },
            { name: "Policy 3", img: imgObject.word },
            { name: "Policy 4", img: imgObject.word },
          ],
        },

        {
          name: "Slider",
          data_child: [
            { name: "Policy 1", img: imgObject.powerpoint },
            { name: "Policy 2", img: imgObject.powerpoint },
            { name: "Policy 3", img: imgObject.powerpoint },
          ],
        },
      ],

      data_right: [
        {
          name: "SOP",
          data_child: [
            { name: "Policy 1", img: imgObject.word },
            { name: "Policy 2", img: imgObject.word },
            { name: "Policy 3", img: imgObject.word },
            { name: "Policy 4", img: imgObject.word },
          ],
        },
        {
          name: "Report",
          data_child: [
            { name: "Policy 1", img: imgObject.vsdx },
            { name: "Policy 2", img: imgObject.vsdx },
            { name: "Policy 3", img: imgObject.vsdx },
            { name: "Policy 4", img: imgObject.vsdx },
          ],
        },
      ],
    };
  }

  render() {
    let { data_left, data_right } = this.state;
    return (
      <div className="main-view-document">
        <h3>Document Gallery</h3>

        <div className="form-all-items">
          <div className="form-left">
            {data_left.map((item, index) => {
              return (
                <div className="items" key={index} id={index}>
                  <h4>{item.name}</h4>
                  <ul>
                    {item.data_child.map((item1, index1) => {
                      return (
                        <li key={index1} id={index1}>
                          <img src={item1.img} /> {item1.name}
                        </li>
                      );
                    })}
                  </ul>

                  <text className="link">{`Views More >>`}</text>
                </div>
              );
            })}
          </div>

          <div className="form-right">
            {data_right.map((item, index) => {
              console.log("item is...", index);
              return (
                <div className="items" key={index} id={index}>
                  <h4>{item.name}</h4>
                  <ul>
                    {item.data_child.map((item1, index1) => {
                      return (
                        <>
                          <li key={index1} id={index1}>
                            <img src={item1.img} /> {item1.name}
                          </li>
                        </>
                      );
                    })}
                  </ul>

                  <text className="link">{`Views More >>`}</text>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
