import React from "react";

class UpdateLoader extends React.Component {

    constructor(props) {
        super();
        this.state = {
            posts: [],
            loading: true,
            comments: []
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data, loading: false}))
        console.log("componentDidMount");

        this.timerId = setInterval(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
             .then(response => response.json())
             .then(data => this.setState({comments: data}))
        }, 3000)
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    render(){
        return(
            <div>
                {this.state.loading ? 
                <h3>Loading...</h3> :
                <h3>{this.state.posts.length} was loaded and have {this.state.comments.length} comments</h3>}
                
            </div>
        )
    }
}
export default UpdateLoader