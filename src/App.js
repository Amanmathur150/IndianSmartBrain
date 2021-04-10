import Navigation from "./component/Navigation/Navigation.js";
import Logo from "./component/Logo/Logo.js";
import Imageinput from "./component/Imageinput/Imageinput.js";
import Facerecognition from "./component/Facerecognition/Facerecognition.js";
import UserRank from "./component/UserRank/UserRank.js";
import Signin from "./component/Signin/Signin.js";
import SignUP from "./component/SignUP/SignUP.js";
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import ParticleComponent from "./ParticleComponent";
import { Component } from "react";
import Particles from 'react-particles-js';
import Bgchange from "./component/Bgchangebutton";
import "./Font.css";
import Tittle from "./component/Tittle/Tittle"




class App extends Component {
  constructor(){
    super();
    this.state =  {
      "imageURL":"" ,
      
      "boxes" : [] , 
      "route" : "Signin",
      "signin":false,
      "bgChange" : true,
      
      "user":{
        id:"",
        name:"",
        email: "",
        entries : 0,
        rank:0,
        face:"",
        join : "",
       } 
  }
    }
  

  loadUser= (data) =>{
    this.setState({user:{
      id:data.id,
      name:data.name,
      email: data.email,
      face:data.face,
      entries : 0,
      rank:data.rank,
      join :data.join
    }})
}

changeBG = () =>{
  if (this.state.bgChange === true){
    this.setState({bgChange: false})
    document.body.style.background = 'linear-gradient( 89deg,blue ,skyblue )'
}
    
  else{
    this.setState({bgChange: true})
     
    document.body.style.background = 'linear-gradient(89deg , red , rgb(23, 201, 255)' ; 
    
  }
}

  boxSizing=(data)=>{
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
          left : box.left_col * width,
        }
    })
    this.setState({face:boxes.length})
    fetch("https://polar-inlet-90495.herokuapp.com/faceupdate", {
          method:"put",
          headers:{"Content-Type":"application/json"},
          body : JSON.stringify({
            face:this.state.face,
            // username:this.state.user.name,
            email: this.state.user.email
          })
          }).then(res=>res.json()).then(user =>{
            this.loadUser(user)
            console.log(this.state.user.email)
    })
    
    return boxes
  }

  facedetect=(box)=>{
    
    this.setState({boxes:box})

  }

  OnChange = (event) =>{
    this.setState({imageURL:event.target.value})
  }

  OnButtonClick=()=>{
    fetch("https://polar-inlet-90495.herokuapp.com/apicall" , {
      method: "post",
      headers : {"Content-Type" : "application/json"},
      body:JSON.stringify({
        ImageURL : this.state.imageURL
      })
    }).then(res=>res.json()).then(response=>{
      console.log(response)
      this.facedetect(this.boxSizing(response))
    }
    ).catch(err=>console.log(err))
    
}

  routeChange=(route)=>{
    if (route === "Signin") {
      this.setState({signin: false})
      this.setState({imageURL : ""})
      
    }else if (route === "SignUp") {
      this.setState({signin:false})
    } else if (route === "Home") {
      this.setState({signin:true})
    } 
    this.setState({route: route})
    
  }

  render(){
     
  return (
    <div className="App">

{this.state.bgChange ? 
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

<Router>
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
    </Router>

}

    
    
    <Navigation isonSignin={this.state.signin} signin={this.routeChange} />
    <Logo />
    
    <Bgchange changeBG={this.changeBG} />
    <Tittle />
     {this.state.route === "Signin" ?

        <Signin loadUser={this.loadUser} click ={this.routeChange} />

         : (this.state.route === "SignUp") ?

          <SignUP loadUser={this.loadUser} click ={this.routeChange} />
        :

          <div>
          <UserRank userRank={this.state.user.rank} userface={this.state.user.face} username={this.state.user.name} />
          <Imageinput OnChange={this.OnChange} OnButtonClick={this.OnButtonClick} />

          <Facerecognition imageURL={this.state.imageURL} boxes={this.state.boxes} />
          </div>
         }
         
  
     

    </div>
  );
}}

export default App;
