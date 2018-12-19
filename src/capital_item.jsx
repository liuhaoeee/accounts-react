import React, { Component } from "react";
import {Row, Col} from 'antd'

class CapitalItem extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const _style = {
            background: "green",
            width: "900px",
            hight: "400px"
        };
        const _style2 = {
          background: "red"
        };
        return (
          <div style={_style}>
            <Row style={_style}>
              <Col xs={21} sm={21} lg={21} style={_style2}>
                <div><p>+166.66</p></div>
              </Col>
              <Col xs={3} sm={3} lg={3} style={_style2}>
                <div><p>+188.88</p></div>
              </Col>
            </Row>
          </div>
        );
    }
}

export default CapitalItem