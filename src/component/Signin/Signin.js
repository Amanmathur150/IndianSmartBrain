import { Component } from 'react';
import Tilt from 'react-tilt';
import "./Signin.css"


class Signin extends Component {
    constructor(){
        super();
        this.state ={
            email: "",
            password : "",
            message:""
        }

    }



    OnEmailChange = (event) =>{
        this.setState({email:event.target.value})
    }

    OnPasswordChange = (event) =>{
        this.setState({password:event.target.value})
    }

    signIn=()=>{
        fetch("https://polar-inlet-90495.herokuapp.com/signin",{
            method: "post",
            headers: {"Content-Type" : "application/json" },
            body: JSON.stringify({
                email: this.state.email ,
                password : this.state.password
            })
        }).then(res=>res.json()).then(user =>{
            console.log(user)
            this.props.loadUser(user)
            if (user === "Email and Password Is not valid "){
                this.setState({message: "Email And PassWord Is invalid"})
            }else{
                this.props.click("Home")
                
            }
        })
            }   
    

    render(){

        return (
            <div className="ma4 mt0 center sizes-mobiles">
            <Tilt className="Tilt br3 shadow-5 " options={{ max : 18 }} style={{ height: 400, width: 500 }} >
                <div className="Tilt-inner"> 
                    <article className="">
                        <main className="pa4 black-80">
                            <div className="measure ">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
                                    <input onChange={this.OnEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
                                    <input onChange={this.OnPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                                </div>
                                <legend className="f3 fw4 ph0 mh0 " style={{fontWeight:"bold" , color:"rgb(170, 0, 0)"}}>{this.state.message}</legend>
                                
                                </fieldset>
                                <div className="">
                                <input onClick={this.signIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" type="submit" value="Sign in" />
                                </div>
                                <div className="lh-copy mt3">
                                <p onClick={()=>{this.props.click("SignUp")}} className="f4 link dim black db pointer">Sign up</p>
                                
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


export default Signin;