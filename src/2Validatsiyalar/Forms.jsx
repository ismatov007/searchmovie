import React from "react";

export default class Form extends React.Component {
    state = {
        firstName: "",
        email: "",
        message: "",
        select: "1",
        subscription: "false",
        gender: ""
        // remember: "false"
      
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    chackedHandler = (e) => {
        this.setState({[e.target.name]: e.target.checked})
        // if(this.state.subscription = "true"){
        //     alert("urra")
        // } else  {
        //     alert("cdsk vjbgd")
        // }
    }

    validatName = () => {
        if (this.state.firstName.length < 5) {
            alert("karochchi qorin to'q bo'lsa ishliykan")
        }
    } 
    
    validateEmail = () => {
        var re = /\S+@\S+\.\S+/;
        if(!re.test(this.state.email)) {
            alert("email is not valid")
        }
    }
    // luboy = () => {
    //     if(this.state.subscription = "true"){
    //         alert("dmnijfhvgebdnj")
    //     }
    // }
    render() {
        const {firstName, email, message, select, gender} = this.state
        return(
            <div className="container bg-w p-5 my-1  border border-3 rounded-3 border-danger">
                <div className="d-flex justify-content-center ">
                  <div className="w-50  p-5 mb-5    navbar navbar-light bg-light flex-column align-items-stretch p-3 border border-3 border-success rounded-3">
                    <h1 className="text-center">Form</h1>

                    <input className="my-2 form-control rounded-3"
                     type="text"
                     placeholder="FirstName"
                     name="firstName"
                     value={firstName}
                     onChange={this.changeHandler}
                     onBlur={this.validatName}/>

                    <input className="my-2 form-control rounded-3"
                     type="text"
                     placeholder="email"
                     name="email"
                     value={email}
                     onChange={this.changeHandler} 
                     onBlur={this.validateEmail}/>

                    <textarea className="form-control" placeholder="Leave a comment here"
                     name="message"
                     value={message} 
                     onChange={this.changeHandler}></textarea>

                     <select className="mt-2 form-select" onChange={this.changeHandler} name="select" value={select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                     </select>

                     <label >
                        <input  className="" type="checkbox" name="subscription"   onChange={this.chackedHandler} />
                        Subscription
                     </label>

                    <label htmlFor="male">
                    <input className="" type="radio" name="gender" id="male" value="male" onChange={this.changeHandler
                    } />
                        Male
                    </label>

                    <label htmlFor="female">
                    <input className="" type="radio" name="gender" id="female" value="female" onChange={this.changeHandler}/>
                        Female
                    </label>

                   
                  </div>
                  
                </div>
            </div>
        )
    }
}