import React, { useState } from 'react';

import './posts.css'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummyData';

function Post({ post }) {
const [like, setLike] = useState(post.like);
const [isliked, setIsLiked] = useState(false);

const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1)
    setIsLiked(!isliked)
}
    
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopRight">
                        <img className="postProfileImg" src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt=""/>
                        
                        <span className="postUserName">{Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                        
                    </div>
                    <div className="postTopLeft">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/asset/like.png" onClick={likeHandler} alt="" />
                        <img className="heartIcon" src="/asset/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people liked it! </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments..</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Post;
