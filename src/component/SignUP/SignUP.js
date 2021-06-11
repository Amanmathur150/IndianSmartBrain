
import Tilt from 'react-tilt';
import "./SignUP.css"
import {connect} from "react-redux"
import { useHistory } from 'react-router-dom';
import {setEmailSignUp,setPasswordSignUp,setNameSignUp,actionSumbitsignup} from "../../actions"

const mapToStatetoProps = (states) =>({
    name : states.changeSignUp.SignUp_Name,
    email : states.changeSignUp.SignUp_Email,
    password : states.changeSignUp.SignUp_Password,
    error : states.changeSignUp.SignUp_Message,
})
const mapToDispacttoProps = (dispatch) =>({
    changename: (event)=> dispatch(setNameSignUp(event.target.value)),
    changeemail : (event)=> dispatch(setEmailSignUp(event.target.value)),
    changepassword:  (event)=> dispatch(setPasswordSignUp(event.target.value)),
    sumbitsignup : (cb) => dispatch(actionSumbitsignup(cb))
})



function SignUP({error,changename,changeemail,changepassword,sumbitsignup}){
        let history = useHistory()
    
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
                                    <input onChange={changename} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text"  id="name" />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
                                    <input onChange={changeemail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email"   id="email-address" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
                                    <input onChange={changepassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"  id="password" minLength="6" />
                                </div>
                                <label className="f3 fw4 ph0 mh0" style={{fontWeight:"bold" , color:"rgb(170, 0, 0)" }}>{error}</label>
                                </fieldset>
                                <div className="">
                                <button onClick={()=>{
                                    
                                    sumbitsignup(()=>{
                                    history.push("/welcome")
                                })

                                }
                                } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" >Sign up</button>
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



export default connect(mapToStatetoProps,mapToDispacttoProps) (SignUP);