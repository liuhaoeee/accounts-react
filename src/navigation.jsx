import React, {Component, memo} from "react"
import {Row, Col, Select} from "antd"

class Navigation extends Component {
    constructor(props) {
        super(props)
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        const wrap_style = {
            overflow: "hidden",
            background: "rgb(249,249,249)"
        }
        const div_style = {
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "10px"
        }
        
        const Option = Select.Option;
        const menu = this.props.showMenu ? (
            <div style={{width: 90, overflow: "hidden", marginTop: -12, float: "right"}}>
            <Select defaultValue="lucy" style={{ width: 100, margin: -5}} onChange={this.handleChange}>
            <Option value="jack">全部</Option>
            <Option value="lucy">充值</Option>
            <Option value="disabled">提取</Option>
            <Option value="Yiminghe">提前返还</Option>
            </Select>  
            </div>                              
          ) : ""
        return(
            <div style={wrap_style}>
                <div style={div_style}>
                <Row type="flex" align="middle">
                    <Col xs={8} sm={8} lg={8}>
                        <p align="left"><span className='arrow-left'/><a>返回</a></p>
                    </Col>
                    <Col xs={8} sm={8} lg={8}>
                        <p align="middle"><strong>资金明细</strong></p>
                    </Col>
                    <Col xs={8} sm={8} lg={8}>
                        {menu}
                    </Col>
                </Row>
            </div>
            </div>
        )
    }
}

export default Navigation