import { useState} from 'react';
import Tilt from 'react-tilt';
import "./SignUP.css"
import { useHistory } from 'react-router-dom';



function SignUP(props){
            let [name,setname] = useState(""); 
            let [email,setemail] = useState(""); 
            let  [password,setpassword]= useState(""); 
            let [error,seterror] = useState(""); 
            let history = useHistory()
           
        
    

    const changename =(event)=>{
        setname(event.target.value)
        
    }

    const changeemail=(event)=>{
        setemail(event.target.value)
        
    }

    const changepassword=(event)=>{
        setpassword(event.target.value)
        
    }

    let sumbitsignup=(cb)=>{      
        
        fetch("https://polar-inlet-90495.herokuapp.com/signup",{
            method: "post",
            headers: {"Content-Type" : "application/json" },
            body: JSON.stringify({
                email: email ,
                password : password,
                name : name
            })
        }).then(res=>res.json()).then(data =>{
            props.loadUser(data) 
            if(data === "Please Submit valid information"){
                seterror("Please Submit valid information")
            }else if (data === "Please Submit Valid Email"){
                seterror("Please Submit Valid Email")
                
            }
            else{
                props.statusAuthenticate(true)
                sessionStorage.setItem("isAuth",true)
                cb()
            }
            

            
        })
}
    
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



export default SignUP;