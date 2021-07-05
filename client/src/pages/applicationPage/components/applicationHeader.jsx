import React from 'react'
import { AppBar,Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FaceIcon from '@material-ui/icons/Face';
import { Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import MenuIcon from '@material-ui/icons/Menu';
const ApplicationHeader = () => {
    //flex not working in Toolbar
    return (
        <div>
            <AppBar position="sticky">
            
                    <div className="application-header">
                        <div className="application-header-logo">Social</div>
                        <div className="application-header-search">
                            <SearchIcon className="search-icon"/>
                            <input type="text" name="search-people"  placeholder="Search Friends"/>
                        </div>
                        <div className="application-header-right">
                            <div className="application-header-right-navigations">
                                <ul>
                                    <li>Homepage</li>
                                    <li>Timeline</li>
                                </ul>
                            </div>
                            <div className="application-header=right-iconlist">
                                <ul>
                                    <li>
                                    <Badge badgeContent={4} color="secondary">
                                     < FaceIcon/>
                                    </Badge>
                                    </li>
                                    <li>
                                    <Badge badgeContent={4} color="secondary">
                                     < NotificationsIcon/>
                                    </Badge>
                                    </li>
                                    <li>
                                    <Badge badgeContent={4} color="secondary">
                                     < ChatIcon/>
                                    </Badge>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                
            </AppBar>
        </div>
    )
}

export default ApplicationHeader
