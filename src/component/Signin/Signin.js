// import {   React , useState } from 'react';
import {connect} from "react-redux"; 
import { Link, useHistory } from 'react-router-dom';
import Tilt from 'react-tilt';
import "./Signin.css"
import "react-router-dom";
import {setEmailSignIn,setPasswordSignIn,signIn} from "../../actions"


const mapToStatetoProps =  (states) => ({
    email : states.changeSignIn.SignIn_Email,
    password : states.changeSignIn.SignIn_Password,
    message : states.changeSignIn.SignIn_Message,
})
const mapToDispacttoProps =  (dispatch) => ({
    OnEmailChange : (event)=> dispatch(setEmailSignIn(event.target.value)),
    OnPasswordChange : (event)=> dispatch(setPasswordSignIn(event.target.value)),
    signIn : (cb) => dispatch(signIn(cb))
})


function Signin({OnEmailChange,OnPasswordChange,signIn,message}){
    
    // let [email,setemail]= useState("") ; 
    // let  [password,setpassword]= useState("") ; 
    // let [message,setmessage] = useState("") ; 
    let history = useHistory()
         
        


    // const OnEmailChange = (event) =>{
    //     setemail(event.target.value)
        
    // }

    // const OnPasswordChange = (event) =>{
    //     setpassword(event.target.value)
    // }

    // const signIn = async (cb) => {
        
    //     let res  = await fetch("https://polar-inlet-90495.herokuapp.com/signin",{
    //         method: "POST",
    //         headers: {"Content-Type" : "application/json" },
    //         body: JSON.stringify({
    //             email: email ,
    //             password :password
    //         })
    //     }) 
    //     let user = await res.json()
        
            
       
    //     if (user === "Email and Password Is not valid "){
    //         setmessage("Email And PassWord Is invalid")
    //     }else{
    //         loadUser(user)
    //         statusAuthenticate(true)
    //         sessionStorage.setItem("isAuth",true)
    //             cb()
                
    //         }
    //     }
    

    

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
                                    <input onChange={OnEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
                                    <input onChange={OnPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                                </div>
                                <legend className="f3 fw4 ph0 mh0 " style={{fontWeight:"bold" , color:"rgb(170, 0, 0)"}}>{message}</legend>
                                
                                </fieldset>
                                <div className="">
                                <button  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" onClick={()=>{signIn(function(){
                                    history.push("/welcome")
                                })}} >Sign in</button>
                                </div>
                                <div className="lh-copy mt3">
                                <Link to="/signup">
                                <p  className="f4 link dim black db pointer">Sign up</p>
                                </Link>
                                </div>
                            </div>
                        </main>
                    </article>
                </div>
            </Tilt>
        </div>
    )
}



export default  connect(mapToStatetoProps,mapToDispacttoProps) (Signin);