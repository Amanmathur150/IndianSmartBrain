import {  useEffect } from "react";
import {connect} from "react-redux"
import SignInPage from "./Pages/SignInPage"
import SignUpPage from "./Pages/SignUpPage"
import Welcome from "./Pages/Welcome"
import './App.css';
import { BrowserRouter as Router, 
  Switch ,
  Route,
 
  Redirect,
  
  } from "react-router-dom";
import ParticleComponent from "./ParticleComponent";

import Particles from 'react-particles-js';

import "./Font.css";
import { CHANGE_BACKGROUND, CHANGE_ISAUTHENICATION, CHANGE_USERS, } from "./constants";
import {changecolorBG} from "./actions"


const mapToStatetoProps = (state) =>{
  return{
    bgChange : state.background.background,
    isAuthenticate : state.auth.isAuthenticate,
  }
}
const mapToDispatchtoProps = (dispatch) =>{
  return{
    bgChangecall : () =>dispatch(changecolorBG())
  }
}


let  App = ({bgChange,isAuthenticate ,store,bgChangecall})=>{

        useEffect(()=>{
          let isAuthIsthere = sessionStorage.getItem("isAuth")
          let isUseristhere = sessionStorage.getItem("data")
          let bgStatus = sessionStorage.getItem("bgStatus")
          bgChangecall()
         
          if (isAuthIsthere && isUseristhere){

            store.dispatch({type:CHANGE_ISAUTHENICATION,payload:JSON.parse(isAuthIsthere)})
            store.dispatch({type:CHANGE_USERS,payload:JSON.parse(isUseristhere)})
            store.dispatch({type:CHANGE_BACKGROUND,payload:JSON.parse(bgStatus)})
         


          }else if (isAuthIsthere && !isUseristhere){
            store.dispatch({type:CHANGE_ISAUTHENICATION,payload:false})
          }else{
            
            store.dispatch({type:CHANGE_ISAUTHENICATION,payload:isAuthenticate})
          }
          
          
        },[bgChangecall,isAuthenticate,store])
        

return (
    <Router>
      <Switch>
    <div className="App">
    {bgChange ? 
  <Particles style={{position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          zIndex:-2}}
          params={{
            		particles: {
            			number :{
                    value : 50,
                    density:{
                      enable : true,
                      value_area : 800
                    }
                  }
            		}
            	}} />
:

 
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          zIndex:-2
        }}
      >
        <ParticleComponent />
        <div
          style={{

            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "auto",
            zIndex:-2
          }}
        >
          
        </div>
      </div>
  

}
    
    
          <Route exact path = "/">
            
              <SignInPage />
           
          </Route>

          <Route exact path = "/signup" >
             
            
                <SignUpPage />
            
          </Route>
          
          <Route path="/welcome">
            {isAuthenticate ? 
            <Welcome />
            :
            <Redirect to="/" />  
            } 
          </Route>
       </div>
      </Switch>
    </Router>
  );
}

export default connect(mapToStatetoProps,mapToDispatchtoProps)(App);


