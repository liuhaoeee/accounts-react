import React, {Component} from "react"

class HeaderTip extends Component {

    render() {
        const msg = this.props.data

        const div_style = {
            height: "5vh",
            background: "rgb(240, 240, 240)",
        }
        const p_style = {
            lineHeight: "5vh",
            marginLeft: "10px"
        }
        return (
            <div style={div_style}>
                <p align="left" style={p_style}>{msg}</p>
            </div>
        )
    }
}

export default HeaderTip