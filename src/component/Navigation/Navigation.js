import {React} from "react"
import { Link , useHistory } from "react-router-dom";
import "./Navigation.css";



const NavigationWithLogin = ({statusAuthenticate})=>{
    let history = useHistory()
    
    
        return (
            <nav className="nav-bar" >
                <p onClick={()=>{
                    statusAuthenticate(false)
                    sessionStorage.setItem("isAuth",false)
                    sessionStorage.clear()
                    history.push("/")
                }}
              
                className="f3 link dim yellow underline pa3 pointer bold">Sign Out</p>
            </nav>
        )

}




const NavigationWithOutLogin = ()=>{
        return (

            
            <nav className="nav-bar" >
                

                

                <Link to="/">

                    
                <p  className="f3 link dim yellow underline pa3 pointer bold">Sign In</p>
                    </Link>
                 
                <Link to="/signup">
                <p className="f3 link dim yellow underline pa3 pointer bold">
                Sign Up
                </p>
                </Link>
            </nav>
              
        )

    
    
}


export {NavigationWithLogin,NavigationWithOutLogin};