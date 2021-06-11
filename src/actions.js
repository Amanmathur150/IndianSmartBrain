import {CHANGE_SIGN_IN_EMAIL ,
     CHANGE_SIGN_IN_PASSWORD,
     CHANGE_SIGN_IN_MESSAGE,
     
     CHANGE_SIGN_UP_EMAIL,
     CHANGE_SIGN_UP_PASSWORD,
     CHANGE_SIGN_UP_NAME,
     CHANGE_SIGN_UP_MESSAGE,
     
   
     CHANGE_BACKGROUND,
     CHANGE_ISAUTHENICATION,
     CHANGE_USERS,
     CHANGE_IMAGE_URL,
     CHANGE_FACE_BOX
    
    } from "./constants"

// **************Sign In***************

export const setEmailSignIn = (text) =>({
    type : CHANGE_SIGN_IN_EMAIL,
    payload: text
}
)

export const setPasswordSignIn = (text) =>({
    type : CHANGE_SIGN_IN_PASSWORD,
    payload: text
}
)


export const signIn =  (cb) => async (dispatch , getState) =>{
    
        
        let res  = await fetch("https://polar-inlet-90495.herokuapp.com/signin",{
            method: "POST",
            headers: {"Content-Type" : "application/json" },
            body: JSON.stringify({
                email: getState().changeSignIn.SignIn_Email ,
                password :getState().changeSignIn.SignIn_Password
            })
        }) 
        let user = await res.json()
        
        
        
        if (user === "Email and Password Is not valid "){
            dispatch({type : CHANGE_SIGN_IN_MESSAGE , payload: "Email And PassWord Is invalid" })
        }else{
            dispatch({type : CHANGE_USERS , payload: user })
            dispatch({type : CHANGE_ISAUTHENICATION , payload: true })
        
            sessionStorage.setItem("data" , JSON.stringify(user))
            sessionStorage.setItem("isAuth",true)
            cb()
            
        }
        
    }

// *****************Sign Up****************


export const setEmailSignUp = (text) =>({
    type : CHANGE_SIGN_UP_EMAIL,
    payload: text
}
)

export const setPasswordSignUp = (text) =>({
    type : CHANGE_SIGN_UP_PASSWORD,
    payload: text
}
)
export const setNameSignUp = (text) =>({
    type : CHANGE_SIGN_UP_NAME,
    payload: text
}
)

export const actionSumbitsignup= (cb) =>(dispatch , getState)=>{      
        
    fetch("https://polar-inlet-90495.herokuapp.com/signup",{
        method: "post",
        headers: {"Content-Type" : "application/json" },
        body: JSON.stringify({
            email: getState().changeSignUp.SignUp_Email ,
            password : getState().changeSignUp.SignUp_Password,
            name : getState().changeSignUp.SignUp_Name
        })
    }).then(res=>res.json()).then(data =>{
        if(data === "Please Submit valid information"){
            dispatch({type : CHANGE_SIGN_UP_MESSAGE , payload: "Please Submit valid information"})
        }else if (data === "Please Submit Valid Email"){
            dispatch({type : CHANGE_SIGN_UP_MESSAGE ,payload :"Please Submit Valid Email"})
            
        }
        else{
            dispatch({type : CHANGE_USERS , payload: data })
            dispatch({type : CHANGE_ISAUTHENICATION , payload: true })
            // dispatch({type:CHANGE_WELCOME_STATUS,payload : true })
            sessionStorage.setItem("data" , JSON.stringify(data))
            
            
            sessionStorage.setItem("isAuth",true)
            cb()
            
        }
        
        
        
    })
}

// ***********Change Background***********

export const changeBG = () =>(dispatch,getState) =>{
    if (getState().background.background === true){
        dispatch({type: CHANGE_BACKGROUND ,payload:false})
        document.body.style.background = 'linear-gradient( 89deg,blue ,skyblue )'
        sessionStorage.setItem("bgStatus",false)
    }
    
    else{
        dispatch({type: CHANGE_BACKGROUND ,payload:true})
        sessionStorage.setItem("bgStatus",true)
        document.body.style.background = 'linear-gradient(89deg , red , rgb(23, 201, 255)' ; 
        
    }
}

export const changecolorBG =() =>(dispatch,getState)=>{
    if (JSON.parse(sessionStorage.getItem("bgStatus")) === true){
        dispatch({type: CHANGE_BACKGROUND ,payload:true})
        document.body.style.background = 'linear-gradient(89deg , red , rgb(23, 201, 255)' ; 
        
    }else{
        dispatch({type: CHANGE_BACKGROUND ,payload:false})
        document.body.style.background = 'linear-gradient( 89deg,blue ,skyblue )'
    }
}


// ********LogOut********//

export const logout = (cb) =>(dispatch,getState)=>{
    dispatch({type:CHANGE_ISAUTHENICATION , payload :false})
 
    sessionStorage.setItem("isAuth",false)
   
    
    cb()
}

//**********Change Image URL ************/

export const ChangeImageURL = (text) =>({
    type : CHANGE_IMAGE_URL,
    payload: text
}
)

// **********Detect Button Action*******



export const OnButtonClick= () => (dispatch,getState)=>{
    
    fetch("https://polar-inlet-90495.herokuapp.com/apicall" , {
      method: "post",
      headers : {"Content-Type" : "application/json"},
      body:JSON.stringify({
        ImageURL : getState().imageURL.imageURL
      })
    }).then(res=>res.json()).then(response=>{
      
        
        
          

         
    const img = document.getElementById("boxing")
    const width = Number(img.width)
    const height = Number(img.height)
    // makeing List Of respond data
  const listofface = response.outputs[0].data.regions

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
  
  fetch("https://polar-inlet-90495.herokuapp.com/faceupdate", {
        method:"put",
        headers:{"Content-Type":"application/json"},
        body : JSON.stringify({
          face:boxes.length,
          
          email: getState().loadUsers_plz.email
        })
        }).then(res=>res.json()).then(user =>{
            dispatch({type : CHANGE_USERS , payload: user })
            sessionStorage.setItem("data" , JSON.stringify(user))
         
  })
  
  dispatch({type:CHANGE_FACE_BOX , payload:boxes})  
          
    }
    ).catch(err=>console.log(err))
    
}

