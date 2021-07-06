import React from 'react'
import ProfilePreviewCard from './profilePreviewCard'
import ProfilePic from "../../../assets/profilepic.jpeg"
const ApplicationRightSidebar = () => {
    const [Posts,Followers,Followings,FollowRequests]=[12,11,16,20];
    return (
        <div>
            <ProfilePreviewCard ProfilePic={ProfilePic} Posts={Posts} Followers={Followers} Followings={Followings} FollowRequests={FollowRequests}/>
        </div>
    )
}

export default ApplicationRightSidebar
