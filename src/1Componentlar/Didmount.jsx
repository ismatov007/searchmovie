import React from "react"
class ComDidmount extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: "diyorbek ismatov"
        }
    }
        
    handle(){
        setTimeout(()=> {
            this.setState({data: "surat shavkatov"})
        }, 3000)
    }
    componentDidMount(){
        this.handle()
    }
    
    
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}
export default ComDidmount