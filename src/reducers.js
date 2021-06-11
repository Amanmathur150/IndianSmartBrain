import {CHANGE_SIGN_IN_EMAIL ,
    CHANGE_SIGN_IN_PASSWORD,
    CHANGE_USERS,
    CHANGE_SIGN_IN_MESSAGE,

    CHANGE_ISAUTHENICATION,

    CHANGE_IMAGE_URL,
    CHANGE_BACKGROUND,
    CHANGE_FACE_BOX,
    

    CHANGE_SIGN_UP_NAME,
    CHANGE_SIGN_UP_EMAIL,
    CHANGE_SIGN_UP_PASSWORD,
    CHANGE_SIGN_UP_MESSAGE,
} from "./constants"

//*************** SignIn************

const initialStatesSignin = {
    SignIn_Email : "" ,
    SignIn_Password : "",
    SignIn_Message : ""
    
}

export const changeSignIn = (state = initialStatesSignin , action = {}) =>{
    switch(action.type){
        case CHANGE_SIGN_IN_EMAIL:
            return Object.assign({},state , {SignIn_Email : action.payload})
        case CHANGE_SIGN_IN_PASSWORD:
            return Object.assign({},state , {SignIn_Password : action.payload})
        case CHANGE_SIGN_IN_MESSAGE:
            return Object.assign({},state , {SignIn_Message : action.payload})
        default:
            return state
    }
}

const initialAuthStatus = {
    isAuthenticate: true   
}

export const auth = (state = initialAuthStatus,action={})=>{
    
    switch(action.type){
        case CHANGE_ISAUTHENICATION:
            return Object.assign({},state,{isAuthenticate:action.payload})
        default:
            return state
    }
}






// ***********Sign UP****************

const initialStatesSignUp = {
    SignUp_Name : "",
    SignUp_Email : "" ,
    SignUp_Password : "",
    SignUp_Message : ""
    
}

export const changeSignUp = (state = initialStatesSignUp , action = {}) =>{
    
    switch(action.type){
        case CHANGE_SIGN_UP_NAME:
            return Object.assign({},state , {SignUp_Name : action.payload})
        case CHANGE_SIGN_UP_EMAIL:
            return Object.assign({},state , {SignUp_Email : action.payload})
        case CHANGE_SIGN_UP_PASSWORD:
            return Object.assign({},state , {SignUp_Password : action.payload})
        case CHANGE_SIGN_UP_MESSAGE:
            return Object.assign({},state , {SignUp_Message : action.payload})
        default:
            return state
    }
}


//********** Loading Users*********************
const initialUserState = { 
    id:"",
    name:"",
    email: "",
    entries : 0,
    rank:0,
    face:"",
    join : "",
}

export const loadUsers_plz = (state=initialUserState , action={})=>{
    
    switch(action.type){
        case CHANGE_USERS:
            return Object.assign({},state , {
            id:action.payload.id,
            name:action.payload.name,
            email: action.payload.email,
            face:action.payload.face,
            entries : 0,
            rank:action.payload.rank,
            join :action.payload.join
            })
        default:
            return state
    }
}

// ********Change BackGround******* 

const initialbgstatus ={
    background : true
}

export const background = (state=initialbgstatus , action={})=>{
    
    switch(action.type){
        case CHANGE_BACKGROUND:
            return Object.assign({},state,{background : action.payload})
        default:
            return state
    }
}

// *********** Acions ************

const initialURL = {
    imageURL :""
}
export const imageURL = (state = initialURL ,action={})=>{
    switch(action.type){
        case CHANGE_IMAGE_URL:
            return Object.assign({},state,{imageURL:action.payload})
        default:
            return state
    }
}

// ********FaceBoxes********

const initialBoxes ={
    boxes : []
}

export const faceBoxes = (state=initialBoxes,action={})=>{
    switch(action.type){
        case CHANGE_FACE_BOX:
            return Object.assign({},state,{boxes:action.payload})
        default:
            return state
    }
}







  







