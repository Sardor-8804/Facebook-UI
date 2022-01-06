import "./online.css";

 function Online({user}) {
    return (
        <div>
            <li className="rightBarFriend">
                <div className="imgContainer">
                    <img className="profileImg" src={user.profilePicture} alt="" />
                    <span className="rigtbarOnline"></span>
                </div>
                <span className="userName">{user.username}</span>
            </li>
        </div>
    )
}
export default Online;
