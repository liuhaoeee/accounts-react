import React, { Component } from "react";
import {Row, Col, Divider} from "antd";

class CapitalDetail extends Component {
    constructor(props) {
        super(props)
    }
    scrollToTop = () => { // run this method to execute scrolling. 
        window.scrollTo(0, 0)
    }
    componentDidMount() {
        this.scrollToTop();
    }
    render() {
        const data = JSON.parse(this.props.match.params.data);
        const div_style = {
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "15px",
        }
        const divider_style = {
            marginTop: "2px",
            marginBottom: "5px",
            height: "1px"
        }
        return (
            <div style={div_style} ref={this.myRef}>
                <Row type="flex" align="middle">
                    <Col xs={12} sm={12} lg={12}>
                        <div><p align="left">{data.desc}金额</p></div>
                    </Col>
                    <Col xs={12} sm={12} lg={12}>
                        <div><p align="right">{data.amount}</p></div>
                    </Col>
                    <Divider style={divider_style}></Divider>
                </Row>
                <Row gutter={4}>
                    <Col xs={12} sm={12} lg={12}>
                        <div><p align="left">类型</p></div>
                    </Col>
                    <Col xs={12} sm={12} lg={12}>
                        <div><p align="right">{data.desc}</p></div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} lg={12}>
                        <div><p align="left">时间</p></div>
                    </Col>
                    <Col xs={12} sm={12} lg={12}>
                        <div><p align="right">{data.time}</p></div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8} sm={8} lg={8}>
                        <div><p align="left">交易单号</p></div>
                    </Col>
                    <Col xs={16} sm={16} lg={16}>
                        <div><p align="right">{data.order}</p></div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CapitalDetail