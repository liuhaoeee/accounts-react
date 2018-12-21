import React, {Component} from "react"

class HeaderTip extends Component {

    render() {
        const msg = this.props.data

        const div_style = {
            height: "30px",
            background: "rgb(240, 240, 240)"
        }
        const p_style = {
            lineHeight: "30px",
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