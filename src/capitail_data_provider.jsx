import React, {Component} from 'react';
import axios from 'axios';
import CapitalList from "./capital_list"
import HeaderTip from "./header_tip"

class CapitalDataProvider extends Component {

constructor(props) {
    super(props);
    this.state = {
        data:[],
        total: "",
        message: ""
    };
}

componentDidMount() {
    const self_component = this;

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
        self_component.setState({
            data: response.data.data,
            total: response.data.total,
            message: response.data.message
        });
    } else {
        console.log("read server side data error!", response);
    }
    })
    .catch(function (error) {
        console.log(error);
    });
}


render() {
    console.log("capital_data_provider===>"+this.state.data)
    console.log("capital_data_provider===>"+this.state.message)
    console.log("capital_data_provider===>"+this.state.total)
    return ( 
        <>
            <HeaderTip data={this.state.message}/>
            <CapitalList data={this.state.data}/>   
        </>
    );
}
}

export default CapitalDataProvider;