import './share.css';
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

function Share() {
    return (
        <div className="share">
           <div className="shareWrapper">
                <div className="shareTop">
                    <img src="asset/person/1.jpg" alt="" className="shareProfileImg" />
                    <input className="shareInput" placeholder="What is your mind?" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                       <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                       </div>
                       <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                       </div>
                       <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                       </div>
                       <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feellings</span>
                       </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
             
           </div>
        </div>
    )
}

export default Share; 
