import React from "react";
class Amaliyot extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            isCounting: false
        }
    }

    componentDidMount(){
        const userCount = localStorage.getItem("timer")
        if(userCount){
            this.setState({count: +userCount})
        }
    }
    componentDidUpdate(){
        localStorage.setItem("timer" , this.state.count)
    }
    
    handleStart = () =>{
        this.setState({isCounting: true})
        this.counterId = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000);
    }
    
    handleStop = () => {
        this.setState({isCounting: false})
        clearInterval(this.counterId)
    }
    handleReset = () => {
        this.setState({count: 0, isCounting: false})
        clearInterval(this.counterId)
    }
    render(){
        return (
            <div>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                 <button onClick={this.handleStart}>Start</button> 
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>     
            </div>
        )
    }
}
export default Amaliyot