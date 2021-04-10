import React from "react";
import { Component } from 'react';
import Tilt from 'react-tilt';
import "./SignUP.css"


class SignUP extends Component{
    constructor(){
        super();
        this.state = {
            name:"",
            email:"",
            password:"",
            error : ""
        }
    }

    name=(event)=>{
        this.setState({name:event.target.value})
        console.log(event.target.value)
    }

    email=(event)=>{
        this.setState({email:event.target.value})
        console.log(event.target.value)
    }

    password=(event)=>{
        this.setState({password:event.target.value})
        console.log(event.target.value)
    }

    sumbitsignup=()=>{      
        
        fetch("https://polar-inlet-90495.herokuapp.com/signup",{
            method: "post",
            headers: {"Content-Type" : "application/json" },
            body: JSON.stringify({
                email: this.state.email ,
                password : this.state.password,
                name : this.state.name
            })
        }).then(res=>res.json()).then(data =>{
            if(data === "Please Submit valid information"){
                this.setState({error : "Please Submit valid information"})
            }else if (data === "Please Submit Valid Email"){
                this.setState({error : "Please Submit Valid Email"})
            }
            else{
                this.props.loadUser(data) 
            this.props.click("Home")
            }
            

            
        })
}
    render(){
        return (
            <div className="center sizes-mobiles">
            <Tilt className="Tilt br3 shadow-5" options={{ max : 18 }} style={{ height: 500, width: 500 }} >
                <div className="Tilt-inner"> 
                    <article className="">
                        <main className="pa4 black-80">
                            <div className="measure ">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                                <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f3" htmlFor="email-address">Name</label>
                                    <input onChange={this.name} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text"  id="name" />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
                                    <input onChange={this.email} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email"   id="email-address" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
                                    <input onChange={this.password} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"  id="password" minLength="6" />
                                </div>
                                <label className="f3 fw4 ph0 mh0" style={{fontWeight:"bold" , color:"rgb(170, 0, 0)" }}>{this.state.error}</label>
                                </fieldset>
                                <div className="">
                                <button onClick={this.sumbitsignup} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" >Sign up</button>
                                </div>
                                <div className="lh-copy mt3">
                                
                                
                                </div>
                            </div>
                        </main>
                    </article>
                </div>
            </Tilt>
        </div>
    )
}
}


export default SignUP;