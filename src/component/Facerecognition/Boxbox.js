import "./Facerecognition.css"

const Boxbox =({box}) =>{
    return (
        <div className="Bounding-Box" style={{top: box.top, right: box.right, bottom: box.bottom, left: box.left}}></div>
    )
}

// const Boxbox =({top , bottom , left , right}) =>{
//     return (
//         <div className="Bounding-Box" style={{top: top, right: right, bottom: bottom, left: left}}></div>
//     )
// }

export default Boxbox;