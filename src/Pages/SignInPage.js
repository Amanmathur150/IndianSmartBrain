import {NavigationWithOutLogin} from "../component/Navigation/Navigation"
import Logo from "../component/Logo/Logo"
import Bgchange from "../component/Bgchangebutton"
import Tittle from "../component/Tittle/Tittle"
import Signin from "../component/Signin/Signin"


const SignInPage = () =>{
    return(
        <div>
            <NavigationWithOutLogin  />
              <Logo />
              <Bgchange 
            //   changeBG={changeBG} 

              />
              <Tittle />
              <Signin 
            //   statusAuthenticate={verificaionAuth} loadUser={loadUser}  

              />
        </div>
    )
}

export default SignInPage;