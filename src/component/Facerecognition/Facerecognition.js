import {connect} from "react-redux"
import "./Facerecognition.css"
import Boxbox from "./Boxbox.js"

const mapToStatetoProps = (state) =>{
    return {
        imageURL: state.imageURL.imageURL,
        boxes: state.faceBoxes.boxes
      
    }
}

const Facerecognition = ({imageURL , boxes}) =>{
    return (
        <div className="center ma   ">
            <div className="absolute mt2 sizes-mobiles-face">
                <img className="" id="boxing" src={imageURL} width="700px" height="auto" alt="" />
                {boxes.map((face,i)=>{
                    
                    return (<Boxbox key={i} box={face} />)
                    })
                }
            </div>
        </div>
    )
}


export default connect(mapToStatetoProps,null)(Facerecognition);