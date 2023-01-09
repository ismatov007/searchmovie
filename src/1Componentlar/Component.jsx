import React from "react";
class Components extends React.Component {

    constructor(props){  // 2- usulda constructorsiz ishlasak buladi yani ===> state = {count: 0}
        super(props);
        this.state = {
            count: 0
        }
        this.clearClick = this.clearClick.bind(this)  // 3- usulga tegishli
    }

    // 1-us colback function bn yozish 2marta yozilgani un 2 qushadi
    plusClick = () => {    
        this.setState((e)=>({count: e.count + 1}))
        this.setState((e)=>({count: e.count + 1}))  
    } 
    
    // 2-us odatiy hol
    minusClick = () => {
        this.setState({count: this.state.count - 1})  
    } 

    // 3-us =  => ishoralari ketani un construktor ichida bind qilamiz  "thisni bind qilib qo'yish"
    clearClick() {      
        this.setState({count: this.state.count = 0})  
    }

    render() {
        return (
            <div>
                <button onClick={this.plusClick}> qo'sh </button>
                <button onClick={this.clearClick}>clear</button>
                <button onClick={this.minusClick}>ayir</button> <br /><br />
                <button>{this.state.count}</button>
                 {/* buttonda onclick ichida colback yozsak ham bo'ladi */}
                 {/* <button onClick={() => this.setState({count: this.state.count + 2})}>qo'sh</button> */}
            </div>
        )
    }
}
export default Components