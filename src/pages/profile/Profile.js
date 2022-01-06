import RightBar from '../../components/rightbar/RightBar';
import SideBar from '../../components/sidebar/SideBar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import './profile.css';

function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/post/3p.jpg" alt="" />
                            <img className="profileUserImg" src="asset/person/1.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                               <h4 className="profileName">Sardor Ergashev</h4>
                               <span className="profileDesc">Hi my good friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;


