import {React} from "react" 
import {connect} from  "react-redux"
import { Link , useHistory } from "react-router-dom";
import { logout } from "../../actions";

import "./Navigation.css";

const mapToDispacttoProps = (dispatch)=> {
    return{
        logout:(cb)=>dispatch(logout(cb))
    }
}


const NavigationWithLogin = ({logout,store})=>{
    let history = useHistory()
    
    
        return (
            <nav className="nav-bar" >
                <p onClick={()=>{

                logout(()=>{
                    
                    history.push("/")
                })
                }
                }
              
                className="f3 link dim yellow underline pa3 pointer bold">Sign Out</p>
            </nav>
        )

}




export const NavigationWithOutLogin = ()=>{
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


export default connect(null,mapToDispacttoProps)(NavigationWithLogin);