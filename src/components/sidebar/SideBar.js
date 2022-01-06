import "./sidebar.css"
import { RssFeed, Chat, VideoLibrary, Group, Bookmark, HelpOutline, WorkOutline, Event, Class} from "@material-ui/icons"
import {Users} from "../../dummyData";
import Friend from "../closeFriend/Friend";

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <ul className="sidebarList">
                    <li className="sidebarlistItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarText">Feed</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarText">chats</span>
                    </li>
                    <li className="sidebarlistItem">
                        <VideoLibrary className="sidebarIcon" />
                        <span className="sidebarText">Videos</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarText">Groups</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarText">Bookmarks</span>
                    </li>
                    <li className="sidebarlistItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarText">Questions</span>
                    </li>
                    <li className="sidebarlistItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarText">Work</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarText">Events</span>
                    </li>
                    <li className="sidebarlistItem">
                        <Class className="sidebarIcon" />
                        <span className="sidebarText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                  {Users.map((u) => (
                      <Friend key={u.id} user={u} />
                  ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar;
                  
                 
