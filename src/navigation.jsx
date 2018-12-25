import React, {Component} from "react"
import {Row, Col, Select} from "antd"
import {withRouter} from "react-router-dom";
import { Picker } from 'antd-mobile';

// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
    <div
      onClick={props.onClick}
      style={{ width: '90px', float: 'right'}}
    >
      <div>
        <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
        <div style={{ color: '#888'}}><p align="middle" style={{float: 'left', width: '80%'}}><strong>{props.extra}</strong></p><span style={{float: 'right'}} className="arrow-down"/></div>
      </div>
    </div>
  );

const seasons = [{
    value: 0,
    label: "全部",
}, {
    value: 1,
    label: "充值",
}, {
    value: 2,
    label: "提现",
},{
    value: 3,
    label: "收益",
}, {
    value: 4,
    label: "支出",
}, {
    value: 5,
    label: "跟投",
}, {
    value: 6,
    label: "领投",
}, {
    value: 7,
    label: "服务费",
},{
    value: 8,
    label: "提前返还",
}]

const v2label = {0: "全部", 1: "充值", 2: "提现", 3: "收益", 4: "支出", 5: "跟投", 6: "领投", 7: "服务费", 8: "提前返还"}
const type2v = {"all": 0, "recharge": 1, "withdraw": 2, "gain": 3, "buy": 4, "followed": 5, "follower": 6, "buy_fee": 7, "early_return": 8}
const v2type = {0: "all", 1: "recharge", 2: "withdraw", 3: "gain", 4: "buy", 5: "followed", 6: "follower", 7: "buy_fee", 8: "early_return"}

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.type ? type2v[this.props.type] : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(value) {
        console.log("change type=>"+value)
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
        
        const picker = this.props.showMenu ? (
            <div>
                <Picker data={seasons} cols={1} title={"资金类型"} value={this.state.value} extra={v2label[this.state.value]}
                    // onOk={v => {console.log("onOK=>"+v);this.setState({ type: v })}}
                    onChange={v => {console.log("onOK=>"+v+" "+v2type[v]);this.handleChange(v2type[v]);this.setState({ value: v })}}
                >
                    <CustomChildren/>
                </Picker>
            </div>
        ) : ""

        return(
            <div style={wrap_style}>
                <div style={div_style}>
                <Row type="flex" align="top">
                    <Col xs={8} sm={8} lg={8}>
                        <p align="left" onClick={this.handleClick}><span className='arrow-left'/>返回</p>
                    </Col>
                    <Col xs={8} sm={8} lg={8}>
                        <p align="middle"><strong>资金明细</strong></p>
                    </Col>
                    <Col xs={8} sm={8} lg={8}>
                        {picker}
                    </Col>
                </Row>
            </div>
            </div>
        )
    }
}

export default withRouter(Navigation)