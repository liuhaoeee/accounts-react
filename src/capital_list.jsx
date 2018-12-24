import React, { Component } from "react";
import CapitalItem from "./capital_item";
import moment from "moment"

class CapitalList extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const self_component = this
        const data = this.props.data.map(item => {
            let new_item = {
                amount: item.amount,
                time: moment(new Date(item.time)).format("YYYY-MM-DD HH:mm:ss"),
                order: item.order
            }
            switch(item.type) {
                case "gain":
                    new_item["amount"] = "+" + item.amount
                    new_item["desc"] = "收益"
                    break 
                case "buy":
                    new_item["amount"] = "-" + item.amount
                    new_item["desc"] = "支出"
                    break
                case "recharge":
                    new_item["amount"] = "+" + item.amount
                    new_item["desc"] = "充值"
                    break 
                case "withdraw":
                    new_item["amount"] = "-" + item.amount
                    new_item["desc"] = "提现"
                    break     
                case "follower":
                    new_item["amount"] = "+" + item.amount
                    new_item["desc"] = "领投费"
                    break 
                case "followed":
                    new_item["amount"] = "-" + item.amount
                    new_item["desc"] = "跟投费"
                    break      
                case "early_return":
                    new_item["amount"] = "+" + item.amount
                    new_item["desc"] = "提前返还"
                    break 
                case "buy_fee":
                    new_item["amount"] = "-" + item.amount
                    new_item["desc"] = "服务费"
                    break                             
                default:
                    break
            }
            return new_item
        })
        const noMoreTip = self_component.props.hasMore ? "" : <div><p align="middle">没有更多了~</p></div>
        return (
            data.map((item, index) => {
                if (!self_component.props.hasMore && index === data.length-1) {
                    return (
                        <React.Fragment key={item.order+item.desc}>
                            <CapitalItem data={item}></CapitalItem>
                             {noMoreTip}
                        </React.Fragment>
                    )
                } else {
                    return (
                        <React.Fragment key={item.order+item.desc}>
                            <CapitalItem data={item}></CapitalItem>
                        </React.Fragment>
                    )
                }
                
            })
        )
    }
}

export default CapitalList
