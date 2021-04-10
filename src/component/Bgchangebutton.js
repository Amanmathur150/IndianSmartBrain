import "./Bgchangebutton.css";

const Bgchange = ({changeBG}) =>{
    return (
        <div className="bgcolor left pic-m ">
            <img src="https://icon-library.com/images/change-icon-color/change-icon-color-9.jpg" onClick={changeBG} alt="" width="100" />
        </div>
    )
}

export default Bgchange;