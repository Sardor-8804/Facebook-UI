import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online";

function RightBar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="appleContainer">
                    <img className="appleImg" src="/asset/apple.jpg" alt="" />
                    <span className="appleText">Apple New Performance !!!</span>
                </div>
                <img className="rightBarAdd" src="/asset/goups.jpeg" alt="" />
                <h4 className="rightBarTitle">Online Friends</h4>
                <ul className="rightBarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="asset/person/2.jpeg" alt="" />
                        <span className="rightbarFollowingName">George Nikol</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="asset/person/3.jpeg" alt="" />
                        <span className="rightbarFollowingName">Katya Bezruk</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="asset/person/4.jpeg" alt="" />
                        <span className="rightbarFollowingName">Frank Adams</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="asset/person/5.jpeg" alt="" />
                        <span className="rightbarFollowingName">Jon Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="asset/person/6.jpeg" alt="" />
                        <span className="rightbarFollowingName">Kristin</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="asset/person/7.jpeg" alt="" />
                        <span className="rightbarFollowingName">Aria</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightBarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
export default RightBar;