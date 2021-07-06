import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { useState } from 'react';
const ApplicationPost = (props) => {
    const {imageUrl,likes,comments,name,profilePic,time,description}=props;
    const [isLiked,setLiked]=useState(false);
    return (
        <div className="application-post">
            <div className="application-post-header">
                <div>
                    <img className="application-post-header-profile" src={profilePic} alt="" />
                    <span>{name}</span>
                </div>
                <div>
                    10 Seconds ago
                </div>
            </div>
            <div className="application-post-body">
                <img src={imageUrl} alt="" />
                <div className="application-post-body-description">
                    {description}
                </div>
            </div>
            <div className="application-post-footer">
                <div className="application-post-footer-iconsList">
                    <ul>
                        <li><FavoriteIcon fontSize="large" color={`${isLiked?"secondary":"#fff"}`} onClick={(e)=>setLiked(!isLiked)}/></li>
                        <li><ChatBubbleIcon fontSize="large"/></li>
                        <li><ShareIcon fontSize="large"/></li>
                    </ul>
                </div>
                <div className="application-post-footer-options">
                    <DragIndicatorIcon fontSize="large"/>
                </div>
            </div>
            <div className="application-post-footer-likes">
                <div>
                   {likes} likes
                </div>
                <div>
                    {comments} comments
                </div>

            </div>
            
        </div>
    )
}

export default ApplicationPost
