import Tilt from 'react-tilt';
import "./Logo.css";
import Brain from "./Brain.png"


const Logo = () =>{
    return (
        <div className="ma4 mt0 logo-m size-m ">
            <Tilt className="Tilt br1 shadow-5 " options={{ max : 50 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> 
                <img style={{paddingTop:"30px" ,height: "100px" , width: "130px",}} src={Brain} alt="brain"  /> 
                </div>
            </Tilt>
        </div>
    )

}

export default Logo;