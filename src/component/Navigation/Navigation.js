import "./Navigation.css";


const Navigation = ({isonSignin,  signin})=>{
    if (isonSignin){
        return (
            <nav className="nav-bar" >
                <p onClick={()=>signin("Signin")} className="f3 link dim yellow underline pa3 pointer bold">Sign Out</p>
            </nav>
        )

    }
    else{
        return (
            <nav className="nav-bar" >
                <p onClick={()=>signin("SignUp")} className="f3 link dim yellow underline pa3 pointer bold">Sign Up</p>
                <p onClick={()=>signin("Signin")} className="f3 link dim yellow underline pa3 pointer bold">Sign In</p>
            </nav>
        )

    }
    
}


export default Navigation;