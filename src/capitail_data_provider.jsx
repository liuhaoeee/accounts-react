import React, {Component} from 'react'
import axios from 'axios'
import CapitalList from "./capital_list"
import HeaderTip from "./header_tip"
import InfiniteScroll from 'react-infinite-scroller'
import Navigation from "./navigation"

class CapitalDataProvider extends Component {

    constructor(props) {
        super(props)
        this.changeType = this.changeType.bind(this)
        this.tryRestoreComponent()
    }

    componentWillUnmount() {
        this.dataBackUp()
    }

    dataBackUp() {
        let div_offset_top = document.getElementById("list_div").scrollTop
        let data = {
          type: this.state.type,
          data: this.state.data,
          page: this.state.page,
          total: this.state.total,
          hasMoreItems: this.state.hasMoreItems,
          message: this.state.message,
          y: div_offset_top
        };

        window.sessionStorage.setItem(this.props.location.key, JSON.stringify(data));
    }

    tryRestoreComponent() {
        let data = window.sessionStorage.getItem(this.props.location.key);

        // 恢复之前状态
        if (data) {
            data = JSON.parse(data);
            this.state = {
                type: data.type,
                data: data.data,
                page: data.page,
                total: data.total,
                hasMoreItems: data.hasMoreItems,
                message: data.message,
                y: data.y,
            };
            window.sessionStorage.removeItem(this.props.location.key)
        } else {
            this.state = {
                type: "all",
                data: [],
                total: 1,
                message: "",
                page: 0,
                hasMoreItems: true,
                y: 0
            };    
        }
    }

    scrollToTop = () => { // run this method to execute scrolling. 
        window.scrollTo(0, 0)    
        document.getElementById("list_div").scrollTop = this.state.y
    }
    componentDidMount() {
        this.scrollToTop();
    }

    changeType(type){
        console.log("changeType=>"+type)

        this.setState({
            type: type,
            page: 0,
            data: [],
            total: 1,
            message: "",
            hasMoreItems: true,
            y: 0
        })

    }

    loadMore() {
        const self_component = this

        if (self_component.state.data.length >= self_component.state.total) {
            self_component.setState({ hasMoreItems: false})
            return
        }

        const next_page = self_component.state.page + 1
        const typeurl = this.state.type === 'all' ? "" : "/"+this.state.type

        axios({
            method: "get",
            url: "https://beta.xiaoxiaoqiquan.com/acct/transfers"+typeurl+"?page="+next_page,
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
            height: "88vh",
            overflow: "auto"
        }

        const div_id = "list_div"

        const loader = <div className="loader" key={0}><p align="middle">Loading ...</p></div>
        
        return ( 
            <>
                <Navigation height={"7vh"} showMenu={true} type={this.state.type} changeType={this.changeType.bind(this)}/>
                <HeaderTip height={"5vh"} data={this.state.message}/>
                <div style={div_style} id={div_id}> 
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadMore.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={loader}
                        useWindow={false}>
                        <CapitalList data={this.state.data} hasMore={this.state.hasMoreItems}/> 
                    </InfiniteScroll>
                </div>
            </>
        );
    }
}

export default CapitalDataProvider;