import React from "react";
class UnversalFuntion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    // liboy joyga xohlagancha ishlata olamiz 1ta funtionni
    unversalClick = (val) => {
        this.setState({count: val})
    }

    render(){
        return(
            <div>
                <button onClick={() => {this.unversalClick(this.state.count + 1)}}>incr</button>
                <button onClick={() => {this.unversalClick(this.state.count = 0)}}>clear</button>
                <button onClick={() => {this.unversalClick(this.state.count - 1)}}>decr</button> <br /><br />
                <button>{this.state.count}</button>
            </div>
        )
    }
}
export default UnversalFuntion