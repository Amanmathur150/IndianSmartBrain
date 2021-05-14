import {  useEffect, useState } from "react";
import {NavigationWithLogin , NavigationWithOutLogin} from "./component/Navigation/Navigation.js";
import Logo from "./component/Logo/Logo.js";
import Imageinput from "./component/Imageinput/Imageinput.js";
import Facerecognition from "./component/Facerecognition/Facerecognition.js";
import UserRank from "./component/UserRank/UserRank.js";
import Signin from "./component/Signin/Signin.js";
import SignUP from "./component/SignUP/SignUP.js";
import './App.css';
import { BrowserRouter as Router, 
  Switch ,
  Route,
 
  Redirect,
  
  } from "react-router-dom";
import ParticleComponent from "./ParticleComponent";

import Particles from 'react-particles-js';
import Bgchange from "./component/Bgchangebutton";
import "./Font.css";
import Tittle from "./component/Tittle/Tittle"




let  App = ()=>{
 
    
  let [imageURL,setimageURL ]= useState("") ;
  
  let [boxes,setboxes] = useState([]) ;
 
  let [isAuthenticate,setisAuthenticate] = useState(true)
  let [bgChange,setbgChange] = useState(true);
  let [facee,setface] = useState("")
  
  let [user,setuser] = useState(
        {
        id:"",
        name:"",
        email: "",
        entries : 0,
        rank:0,
        face:"",
        join : "",
      }
      )

      
      let verificaionAuth = (e)=>{
        if (e === true){
          setisAuthenticate(true)
        }else if (e === false){
          setisAuthenticate(false)
        }
      }
      
      
      let loadUser = (data = user) =>{
        sessionStorage.setItem("data" , JSON.stringify(data))
        let auth = sessionStorage.getItem("isAuth")
        
        setisAuthenticate(auth)
        setuser(
          { id:data.id,
            name:data.name,
            email: data.email,
            face:data.face,
            entries : 0,
            rank:data.rank,
            join :data.join
          }
          
          )
}
        useEffect(()=>{
          
        
        setisAuthenticate(sessionStorage.getItem("isAuth"))
        },[isAuthenticate])
        
        useEffect(()=>{
          
          let auth = sessionStorage.getItem("isAuth")
          let items = JSON.parse(sessionStorage.getItem("data"))
          if  (!items){
            setuser(
              { id:user.id,
                name:user.name,
                email: user.email,
                face:user.face,
                entries : 0,
                rank:user.rank,
                join :user.join
              }
              )
            }
            else{
              setisAuthenticate(auth)
             
              setuser(
              { id:items.id,
                name:items.name,
                email: items.email,
                face:items.face,
                entries : 0,
                rank:items.rank,
                join :items.join
              }
            )
          }
    
         
         
        },[])

      
       
    
    let changeBG = () =>{
      if (bgChange === true){
    setbgChange(false)
    document.body.style.background = 'linear-gradient( 89deg,blue ,skyblue )'
  }
    
  else{
    setbgChange(true)
     
    document.body.style.background = 'linear-gradient(89deg , red , rgb(23, 201, 255)' ; 
    
     }
  }

 let boxSizing=(data)=>{
      const img = document.getElementById("boxing")
      const width = Number(img.width)
      const height = Number(img.height)
      // makeing List Of respond data
    const listofface = data.outputs[0].data.regions

    // maping over data and makeing new list as boxes
    const boxes = listofface.map(list=>{
      const box = list.region_info.bounding_box;
      return {
        top : box.top_row * height,
        right : width - (box.right_col * width),
        bottom : height - (box.bottom_row * height ),
          left : box.left_col * width
        }
    })
    setface(boxes.length)
    fetch("https://polar-inlet-90495.herokuapp.com/faceupdate", {
          method:"put",
          headers:{"Content-Type":"application/json"},
          body : JSON.stringify({
            face:facee,
            
            email: user.email
          })
          }).then(res=>res.json()).then(user =>{
            loadUser(user)
           
    })
    
    return boxes
  }

  let facedetect=(box)=>{
    
    setboxes(box)

  }

  let OnChange = (event) =>{
    setimageURL(event.target.value)
  }

  let OnButtonClick=()=>{
    fetch("https://polar-inlet-90495.herokuapp.com/apicall" , {
      method: "post",
      headers : {"Content-Type" : "application/json"},
      body:JSON.stringify({
        ImageURL : imageURL
      })
    }).then(res=>res.json()).then(response=>{
      
      facedetect(boxSizing(response))
    }
    ).catch(err=>console.log(err))
    
}
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

              <NavigationWithOutLogin  />
              <Logo />
              <Bgchange changeBG={changeBG} />
              <Tittle />
              <Signin statusAuthenticate={verificaionAuth} loadUser={loadUser}  />

          </Route>


      
        <Route exact path = "/signup" >
        <NavigationWithOutLogin  />
        <Logo />
        
        <Bgchange changeBG={changeBG} />
        <Tittle />
        
              <SignUP statusAuthenticate={verificaionAuth} loadUser={loadUser}  />
        </Route>

      

     
        <Route exact path="/welcome">
        {isAuthenticate ? 
        
        <div>
        <NavigationWithLogin statusAuthenticate={verificaionAuth} />
        <Logo />
    
        <Bgchange changeBG={changeBG} />
        <Tittle />

        <UserRank username={user.name} userface={user.face}  userRank={user.rank} />
        <Imageinput OnChange={OnChange} OnButtonClick={OnButtonClick} />

        <Facerecognition imageURL={imageURL} boxes={boxes} />
        </div>
        :
        
          <Redirect to="/" /> 
        
          
          
        }

        </Route>
       
         
  
     

    </div>
      </Switch>
    </Router>
  );
}

export default App;


