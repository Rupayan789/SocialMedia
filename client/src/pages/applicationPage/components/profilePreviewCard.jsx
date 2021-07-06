import React from 'react'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
const ProfilePreviewCard = ({ProfilePic,Followers,Followings,FollowRequests,Posts}) => {
    return (
        <div className="profile-preview-card">
            <div className="profile-preview-card-header">
                <div>
                    <img src={ProfilePic} alt="" />
                    <span>Rupayan Rout</span>
                </div>
                <div>
                    <DragIndicatorIcon/>
                </div>
                
            </div>
            <div className="profile-preview-card-body">
                <div>
                    <span>Followers {Followers}</span>
                    <span>Followings {Followings}</span>
                </div>
                <div>
                    <span>Posts {Posts}</span>
                    <span>Follow Requests {FollowRequests}</span>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ProfilePreviewCard
