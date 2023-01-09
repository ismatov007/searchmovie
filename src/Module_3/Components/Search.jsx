import React from "react";
import "../Components/Media.css"

export default class Search extends React.Component {

    state = {
        search: 'panda',
        type: "all"
    }

    handleClick = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleKey = (e) => {
        if(e.key === 'Enter') {
        this.props.searchMovies(this.state.search, this.state.type);
        // this.state.search = ""
        }
    }
    ishla = () => {
        this.props.searchMovies(this.state.search, this.state.type );
        // this.state.search = ""
    }

    handleFilter = (e) => {
        this.setState( () => ({type: e.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        }) 
    }
        
    render() {
        return(
            <div className="row">
                <div className="col s12">
                    <div className="d-flex justify-content-between">
                        <input 
                        type="search" 
                        placeholder="Search" 
                        className="searchInp mt-2 w-50 from-control" 
                        name="search"
                        value={this.state.search}
                        onChange={this.handleClick}
                        onKeyDown={this.handleKey}
                        />
                        <button onClick={this.ishla} className="media mt-3 btn btn-primary">Search movie</button>

                    </div>
                
                    <div className=" d-flex justify-content-evenly" >
                        <label htmlFor="join1" className="">
                            <input 
                            className="with-gap" 
                            name="type" 
                            type="radio" 
                            id="join1"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                            />
                            <span className="">All</span>
                        </label>
                        <label className="" htmlFor="join2">
                            <input 
                            className="with-gap" 
                            name="type" 
                            type="radio" 
                            id="join2"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>
                        <label className="" htmlFor="join3">
                            <input 
                            className="with-gap" 
                            name="type" 
                            type="radio" 
                            id="join3"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                           />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}