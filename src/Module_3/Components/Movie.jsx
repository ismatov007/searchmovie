export default function Movie(props) {
    const {Title, Year, imdbID, Type, Poster} = props;

    return (
        <div className="card movies">
            
            <div key={imdbID} className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={Poster}/>
            </div>
            
            <div className="bg-dark card-content">
            <span className=" card-title activator white-text text-darken-4">{Title}</span>
            <p className="white-text">{Year} <span className="white-text right">{Type}</span></p>
            {/* <a className="btn" href="https://youtu.be/e9p4Epkqv0k">Watch movie</a> */}
            </div>
            
        </div>
    )
}