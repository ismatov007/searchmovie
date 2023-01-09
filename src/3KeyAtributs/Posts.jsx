import { useState } from "react";
import PostList from "./PostList";
const initial = {name: "", id: ""}
export default function Posts(props) {
    // const [post, setPost] = useState({name:'', id:''})
    const [item, setItem] = useState(initial)
    function currentName(event) {
        setItem({name: event.target.value, id: item.id});
    }

    function addPost(){
        let ran = Math.floor(Math.random() * 1000);
        
        if(item.id != ''){
            ran = item.id;
        }
        if(item.name !== ''){
            props.addPost({name: item.name, id: ran});
        }
        setItem(initial);
    }
    
    function copy(name){
        setItem({name:name, id: ""});
    }
    
    function update(name, id){
        setItem({name:name, id: id});
    
    }
    function clear(){
        setItem(initial);
    }
    
    return(
        <div className="row mt-5 rounded">

            <div className="offset-3 col-md-6 border bg-secondary">
                <div className=" d-flex my-1 justify-content-around">
                    <input type="text" className="form-control" value={item.name} onChange={currentName} />
                    <button onClick={addPost}  className="btn btn-primary mx-1">Send</button>
                    <button onClick={clear} className="btn btn-dark"> <i className="fa fa-refresh"></i> </button>
                </div>
            </div>
            <div className="offset-3 col-md-6 border bg-secondary">
                {props.posts.map(post => (
                <PostList key={post.id} id={post.id} 
                    name={post.name} copy={copy} update={update}
                    removePost={props.removePost}/>
                ))}
            </div>
        </div>
    )
}
                