import React from "react";


export default class CreateRef extends React.Component {
    constructor() {
        super();
        this.state = {
            card: "",
            cv: "",
            name: ""
        }
        this.cardRef = React.createRef();
        this.cvRef = React.createRef();
        this.nameRef = React.createRef(); 
    }

    handleEmail = (e) => {
        this.setState({[e.target.name]: e.target.value},  () =>{
            if(this.state.card.length === 16) {
                this.cvRef.current.focus()
            }
            if(this.state.cv.length === 3){
                this.nameRef.current.focus()
            }
          
        })
    }
    componentDidMount(){
    this.cardRef.current.focus()
    }

    render(){
        const{card, cv, name} = this.state 
        return(
        <div className="container bg-w p-5 my-1  border border-3 rounded-3 border-danger">
            <div className="d-flex justify-content-center ">
              <div className="w-50  p-5 mb-5    navbar navbar-light bg-light flex-column align-items-stretch p-3 border border-3 border-success rounded-3">
                <h1 className="text-center">Form</h1>

                <input className="form-control mb-3"
                type="text" 
                name="card"
                value={card}
                onChange={this.handleEmail}
                id="card" 
                placeholder="card"
                ref={this.cardRef}
                />

                <input className="form-control mb-3"
                type="text" 
                name="cv"
                value={cv}
                onChange={this.handleEmail}
                id="cv" 
                placeholder="cv"
                ref={this.cvRef}
                />

                <input className="form-control mb-3"
                type="text" 
                name="name"
                value={name}
                id="name" 
                onChange={this.handleEmail}
                placeholder="name"
                ref={this.nameRef}
                />


                <label htmlFor="ulash">
                    <input type="checkbox" name="checked" onChange={this.onchangeChecked} id="ulash" />
                    I agree with terms and conditions
                </label>
                <button onClick={this.handleSubmit} className="btn btn-primary mt-3">Submit</button>
              </div>
              
            </div>
        </div>
        )
    }
}