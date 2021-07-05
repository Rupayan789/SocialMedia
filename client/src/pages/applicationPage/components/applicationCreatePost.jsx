import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoIcon from '@material-ui/icons/Photo';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { PhoneSharp } from '@material-ui/icons';
const CreatePost = () => {
    return (
        <div className="create-post">
            <div className="create-post-text">
                <AccountCircleIcon fontSize="large" color="disabled"/>
                <input placeholder="Hey,Rupayan Whats on your mind?"/>
            </div>
            <hr />
            <div className="create-post-attachment">
                <ul>
                    <li>
                        <VideoCallIcon color="primary"/>
                        <span>Post a Video</span>
                    </li>
                    <li>
                        <PhotoIcon color="secondary"/>
                        <span>Add Photo/Images</span>
                    </li>
                    <li>
                        <FavoriteIcon color="error"/>
                        <span>Add Feelings</span>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default CreatePost
