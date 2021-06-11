import "./Imageinput.css";
import {connect} from "react-redux"
import {ChangeImageURL,OnButtonClick} from "../../actions"

const mapToDispacttoProps = (dispatch)=>{
    return {
        OnChange : (event)=>dispatch(ChangeImageURL(event.target.value)),
        OnButtonClick : ()=>dispatch(OnButtonClick())
    }
}

const Imageinput = ({ OnChange , OnButtonClick } ) =>{
    return (
        <div className="f3 sizes-mobiles-input"> 
            <p style={{color:"Yellow"}}>{"This Magic Brain Will detect Your Face In Picture . Giv it A try." }</p>
            <div className="center form form-m pa4 br3 shadow-5">
            <input className="f4 pa3 w-70 center" type="search" onChange={OnChange} />
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={OnButtonClick}>Detect</button>
            </div>
        </div>
    )
}   

export default connect(null,mapToDispacttoProps)(Imageinput);