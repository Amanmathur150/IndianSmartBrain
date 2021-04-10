import Tilt from 'react-tilt';
import "./Tittle.css";


function Tittle(){
    return (
        <div className=" text title-m ">
            <Tilt className="size-pc size-m" options={{ max : 50 }} >
                <h1 className="tittle-font">Smart Brain</h1>
            </Tilt>
        </div>
    )
}


export default Tittle;