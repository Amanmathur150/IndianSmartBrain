import "./UserRank.css"


function UserRank({username,userface , userRank}){
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

export default UserRank;