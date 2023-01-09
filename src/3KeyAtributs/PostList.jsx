export default function PostList(props) {
    return (
        <div className="d-flex justify-content-between mb-2">
            <h4>{props.name}</h4>
            <div>
                <button className="btn btn-info  mx-1" onClick={() => props.copy(props.name)}> 
                <i className="fa fa-copy"></i></button> 
                
                <button onClick={() => props.update(props.name, props.id) } className="btn btn-success mx-1" > 
                <i className="fa fa-pencil"></i>  </button> 
                              
                <button className="btn btn-danger" onClick={() => props.removePost(props.id)}>
                <i className="fa fa-trash"></i>
                </button> 
            </div>           
        </div>
    )
}