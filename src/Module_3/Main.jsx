import React from "react";
import Loader from "./Components/Loader";
import Movies from "./Components/Movies";
import Search from "./Components/Search";

export default class Main extends React.Component  {
    state = {
        movies: [],
        loading: true
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=809a96c1&s=panda')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=809a96c1&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }
    render() {

        return (
            <div className="container content">
                {/* ace044bb
                809a96c1    */}
                <Search searchMovies={this.searchMovies}/>
                {this.state.loading ? <Loader/> : (<Movies movies={this.state.movies}/>)   }
                
            </div>
        )
    }
}