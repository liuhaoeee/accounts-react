import React, {Component} from 'react';
import axios from 'axios';
import CapitalList from "./capital_list"
import HeaderTip from "./header_tip"
import InfiniteScroll from 'react-infinite-scroller';


class CapitalDataProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            total: "",
            message: "",
            page: 0,
            hasMoreItems: true
        };
    }

    loadMore() {
        const self_component = this
        
        if (self_component.state.data.size >= self_component.state.total) {
            self_component.setState({ hasMoreItems: false})
            return
        }

        const next_page = self_component.state.page + 1

        axios({
            method: "get",
            url: "/acct/transfers?page="+next_page,
            headers:{
                Authorization : "Token 80252444c56b709e0d576fca2c59001e401f7dbc"
            }
        }).then(function (response) {
        // Finished OK.
        if (response.status === 200) {
            console.log("read server side data => ", response);
            var items = self_component.state.data;
            response.data.data.map((item) => {
                items.push(item)
                return item
            })

            self_component.setState({
                data: items,
                message: response.data.message,
                total: response.data.total,
                page: self_component.state.page+1
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
        const div_style = {
            height: "100vh",
            overflow: "auto"
        }

        return ( 
            <div>
                <HeaderTip data={this.state.message}/>
                <div style={div_style}> 
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadMore.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={<div className="loader" key={0}><p align="middle">Loading ...</p></div>}
                        useWindow={false}>
                        
                     <CapitalList data={this.state.data}/> 
                    </InfiniteScroll>
                    </div>

            </div>
        );
    }
}

export default CapitalDataProvider;