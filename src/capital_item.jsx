import React, { Component } from "react";
import {Row, Col, Divider} from 'antd'

class CapitalItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      const item = this.props.data;
      
      const div_style = {
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "5px"
      }
      const t_style = {
        marginBottom: "1px"
      }
      const b_style = {
        marginTop: "1px"
      }
      const divider_style = {
        marginTop: "2px",
        marginBottom: "0",
        height: "1px"
      };
      return (
        <div style={div_style}>
          <Row type="flex" align="middle">
            <Col xs={14} sm={14} lg={14}>
                  <div><p align="left" style={t_style}>{item.desc}</p></div>
                  <div><p align="left" style={b_style}>{item.time}</p></div>
            </Col>
            <Col xs={10} sm={10} lg={10}>
              <div><p align="right">{item.amount}</p></div>
            </Col>
            <Divider style={divider_style}></Divider>
          </Row>
        </div>
      );
    }
}

export default CapitalItem