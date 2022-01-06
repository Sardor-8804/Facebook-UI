import RightBar from '../../components/rightbar/RightBar';
import SideBar from '../../components/sidebar/SideBar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import './home.css';

function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <SideBar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}
export default Home;
