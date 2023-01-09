import React from "react"; 
import Posts from "./Posts";
class KeyAtributs extends React.Component {

    state = {
        posts: [
            {id: 1, name: "JavaScript"},
            {id: 2, name: "ReactJS"},
            {id: 3, name: "VueJS"}
        ]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({posts: [...json]}))
    }
    removePost = (id) =>{
        this.setState({posts: this.state.posts.filter(post => post.id !== id)})
    }
    addPost = (post) =>{
        let oldPost = this.state.posts.filter(item => item.id !== post.id)
        this.setState({posts: [...oldPost, post]})
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
              <Posts posts={this.state.posts} removePost={this.removePost} addPost={this.addPost}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default KeyAtributs