import React, { Component } from "react";
import CapitalItem from "./capital_item";
import moment from "moment"
import axios from 'axios'

class CapitalList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    
        axios({
            method: "get",
            url: "/acct/transfers",
            headers:{
                Authorization : "Token 80252444c56b709e0d576fca2c59001e401f7dbc"
            }
        }).then(function (response) {
        // Finished OK.
        if (response.status === 200) {
            console.log("read server side data: ", response);
        } else {
          console.log("read server side data error!", response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    render() {
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
        return (
            data.map(item => {
                return (
                    <React.Fragment key={item.order+item.desc}>
                        <CapitalItem data={item}></CapitalItem>
                    </React.Fragment>
                )
            })
        )
    }
}

export default CapitalList
