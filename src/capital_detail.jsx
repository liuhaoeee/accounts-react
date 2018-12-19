import React, { Component } from "react";
import {Row, Col, Divider} from "antd";

class CapitalDetail extends Component {
    render() {
        console.log("====>" + this.props)
        const data = JSON.parse(this.props.match.params.data);
        const divider_style = {
            marginTop: "2px",
            marginBottom: "0",
            height: "1px"
        };
        return (
            <div>
                <Row type="flex" align="middle">
                    <Col>
                        <div><p align="left">{data.desc}金额</p></div>
                    </Col>
                    <Col>
                        <div><p align="right">{data.amount}</p></div>
                    </Col>
                    <Divider style={divider_style}></Divider>
                </Row>
                <Row>
                    <Col>
                        <div><p align="left">类型</p></div>
                    </Col>
                    <Col>
                        <div><p align="right">{data.desc}</p></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div><p align="left">时间</p></div>
                    </Col>
                    <Col>
                        <div><p align="right">{data.time}</p></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div><p align="left">交易单号</p></div>
                    </Col>
                    <Col>
                        <div><p align="right">{data.order}</p></div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CapitalDetail