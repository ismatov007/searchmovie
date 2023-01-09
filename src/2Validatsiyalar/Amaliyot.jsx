import React from "react";


export default class Formamalyot extends React.Component {
    state = {
        email: "",
        checked: false
    }
    onchangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    onchangeChecked = (e) => {
        this.setState({[e.target.name]: e.target.checked})
    }
   
    handleSubmit = () => {
        var re = /\S+@\S+\.\S+/;
        const isvalidEmail = re.test(this.state.email)
        const isvalidChecked = this.state.checked

        if(!isvalidEmail) {
            alert("Email is not valid")
            return
        }

        if(!isvalidChecked) {
            alert("your sholud accept all terms and conditions")
            return
        }

        this.setState({email: "", checked: false})
        
        alert("Thank you for subscription")
    }
    render(){
        
        return (
        <div className="container bg-w p-5 my-1  border border-3 rounded-3 border-danger">
            <div className="d-flex justify-content-center ">
              <div className="w-50  p-5 mb-5    navbar navbar-light bg-light flex-column align-items-stretch p-3 border border-3 border-success rounded-3">
                <h1 className="text-center">Form</h1>
                <input className="form-control mb-3"
                type="text" 
                name="email"
                onChange={this.onchangeHandler}
                onBlur={this.validateEmail} 
                id="" 
                placeholder="email"/>
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