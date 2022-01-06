import './topbar.css';
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from 'react-router-dom';


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
                    <Link to='/home' className="topbarLink">Homepage</Link>

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
                <Link to='/profile'><img src="/asset/person/1.jpg" className="topbarImg" alt=""/></Link>
            </div>
        </div>
    )
}

export default Topbar;
