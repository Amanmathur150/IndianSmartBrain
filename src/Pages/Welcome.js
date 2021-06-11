import NavigationWithLogin from "../component/Navigation/Navigation"
import Logo from "../component/Logo/Logo"
import Bgchange from "../component/Bgchangebutton"
import Tittle from "../component/Tittle/Tittle"
import UserRank from "../component/UserRank/UserRank"
import Imageinput from "../component/Imageinput/Imageinput"
import Facerecognition from "../component/Facerecognition/Facerecognition"
import { store } from "../index"




const Welcome = ()=>{
    return (
        <div>
            <NavigationWithLogin />
            <Logo />
            <Bgchange />
            <Tittle />
            <UserRank store={store} />
            <Imageinput />
            <Facerecognition />
        </div>
    )
}

export default Welcome;