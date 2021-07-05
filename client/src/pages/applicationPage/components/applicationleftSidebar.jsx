import React from 'react'
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ChatIcon from '@material-ui/icons/Chat';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import GroupIcon from '@material-ui/icons/Group';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import WorkIcon from '@material-ui/icons/Work';
import EventIcon from '@material-ui/icons/Event';
import SchoolIcon from '@material-ui/icons/School';
import ProfileImage from "../../../assets/profilepic.jpeg"
const ApplicationLeftSidebar = () => {
    return (
        <div className="application-left-sidebar">
            <ul>
                <li>
                    <RssFeedIcon/>
                    <span>Feeds</span>
                </li>
                <li>
                    <ChatIcon/>
                    <span>Chats</span>
                </li>
                <li>
                    <PlayCircleFilledIcon/>
                    <span>Videos</span>
                </li>
                <li>
                    <GroupIcon/>
                    <span>Groups</span>
                </li>
                <li>
                    <BookmarksIcon/>
                    <span>Bookmarks</span>
                </li>
                <li>
                    <LiveHelpIcon/>
                    <span
                    >Questions</span>
                </li>
                <li>
                    <WorkIcon/>
                    <span>Jobs</span>
                </li>
                <li>
                    <EventIcon/>
                    <span>Events</span>
                </li>
                <li>
                    <SchoolIcon/>
                    <span>Courses</span>
                </li>
                <button className="application-left-sidebar-button">
                    Show More 
                </button>
                <hr/>
                <div className="application-left-sidebar-active-friends">
                    <div className="application-left-sidebar-active-friends-list">
                        Active Friends
                    </div>
                    
                    <ul>
                        <li><span>Sam Nanda</span><img src={ProfileImage} alt="" /></li>
                        <li><span>Hero Kumar</span><img src={ProfileImage} alt="" /></li>
                        <li><span>Mishra Babu</span><img src={ProfileImage} alt="" /></li>
                        <li><span>Dharmesh Babu</span><img src={ProfileImage} alt="" /></li>
                        <li><span>Malhotra Babu</span><img src={ProfileImage} alt="" /></li>
                        <li><span>Oberoi Bhai</span><img src={ProfileImage} alt="" /></li>
                    </ul>
                </div>
                
            </ul>
        </div>
    )
}

export default ApplicationLeftSidebar
