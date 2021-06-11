import "./UserRank.css"
import {connect} from "react-redux"
import { useEffect } from "react"

import {CHANGE_USERS,CHANGE_ISAUTHENICATION} from "../../constants"

const mapToStatetoProps = (state) =>{
    return {
        username: state.loadUsers_plz.name,
        userface: state.loadUsers_plz.face,
        userRank: state.loadUsers_plz.rank
    }
}
// const mapToDispatchtoProps = (dispatch) =>{
//     return {
//         loaddatafromSS: ()=>dispatch(loaddatafromSS())
//     }
// }

function UserRank({username,userface , userRank ,store}){
    
    useEffect(()=>{
       
        let auth = sessionStorage.getItem("isAuth")
        let items = JSON.parse(sessionStorage.getItem("data"))
        store.dispatch({type:CHANGE_USERS ,payload:items})
        store.dispatch({type:CHANGE_ISAUTHENICATION ,payload: JSON.parse(auth)})
        
    })
    
    return (
        <div className="sizes-mobiles-user">
            <p className="f3 white ">
                {`${username} You recognized ${userface} faces , Your Current Rank is...`}
            </p>
            <p className="f1 white ">
                {`# ${userRank}`}
            </p>
        </div>
    )
}

export default connect(mapToStatetoProps)(UserRank);