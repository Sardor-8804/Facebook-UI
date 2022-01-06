import './topbar.css';
import { Search, Person, Chat, Notifications } from "@material-ui/icons"


function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Facebook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchBarIcon"/>
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLink">
                    <a href='home'><span className="topbarLink">Homepage</span></a>

                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <a href='profile'><img src="/asset/person/1.jpg" className="topbarImg" alt=""/></a>
            </div>
        </div>
    )
}

export default Topbar;
