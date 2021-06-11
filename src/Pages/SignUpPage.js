import {NavigationWithOutLogin} from "../component/Navigation/Navigation"
import Logo from "../component/Logo/Logo"
import Bgchange from "../component/Bgchangebutton"
import Tittle from "../component/Tittle/Tittle"
import SignUP from "../component/SignUP/SignUP"


const SignUpPage = ()=>{
    return(
        <div>
            <NavigationWithOutLogin  />
            <Logo />
            <Bgchange 
            // changeBG={changeBG}
             />
            <Tittle />
            <SignUP 
            // statusAuthenticate={verificaionAuth} loadUser={loadUser} 
             />

        </div>
    )
}

export default SignUpPage ;



