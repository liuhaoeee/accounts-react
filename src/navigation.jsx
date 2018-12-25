import React, {Component} from "react"
import {Row, Col, Select} from "antd"
import {withRouter} from "react-router-dom";
import { Picker, List, WhiteSpace } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css'

const seasons = [{
    "value": "341522",
    "label": "霍邱县",
    "children": []
}, {
    "value": "341525",
    "label": "霍山县",
    "children": []
}, {
    "value": "341502",
    "label": "金安区",
    "children": []
},{
    "value": "341522",
    "label": "霍邱县",
    "children": []
}, {
    "value": "341525",
    "label": "霍山县",
    "children": []
}, {
    "value": "341502",
    "label": "金安区",
    "children": []
}]


class Navigation extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    

    handleChange(value) {
        console.log(`selected ${value}`);
        this.setState({
            type: value
        })
        this.props.changeType(value)
    }
    handleClick(e) {
        const cur_url = this.props.location.pathname
        if (cur_url.indexOf('/app')===0) {
            window.location.href = "microoption://h5/exit"
        } else {
            this.props.history.goBack()
        }
    }
    render() {
        console.log("navigation height:" + this.props.height)
        const wrap_style = {
            overflow: "hidden",
            height: this.props.height ? this.props.height : "",
            background: "rgb(249,249,249)"
        }
        const div_style = {
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "10px"
        }
        
        const Option = Select.Option;

        const defaultType = this.props.type ? this.props.type : "all"
        const menu = this.props.showMenu ? (
            <div style={{width: 90, overflow: "hidden", marginTop: -12, float: "right"}}>
            <Select defaultValue={defaultType} style={{ width: 100, margin: -6}} onChange={this.handleChange.bind(this)}>
            <Option value="all">全部</Option>
            <Option value="recharge">充值</Option>
            <Option value="withdraw">提现</Option>
            <Option value="gain">收益</Option>
            <Option value="buy">支出</Option>
            <Option value="followed">跟投</Option>
            <Option value="follower">领投</Option>
            <Option value="buy_fee">服务费</Option>
            <Option value="early_return">提前返还</Option>
            </Select>  
            </div>                              
          ) : ""
        return(
            <div style={wrap_style}>
                <div style={div_style}>
                <Row type="flex" align="middle">
                    <Col xs={8} sm={8} lg={8}>
                        <p align="left" onClick={this.handleClick}><span className='arrow-left'/>返回</p>
                    </Col>
                    <Col xs={8} sm={8} lg={8}>
                        <p align="middle"><strong>资金明细</strong></p>
                    </Col>
                    <Col xs={8} sm={8} lg={8}>
                    <Picker data={seasons} cols={1} className="forss">
                        <List.Item arrow="up">Single</List.Item>
                    </Picker>
                        {/* {menu} */}
                    </Col>
                </Row>
            </div>
            </div>
        )
    }
}

export default withRouter(Navigation)