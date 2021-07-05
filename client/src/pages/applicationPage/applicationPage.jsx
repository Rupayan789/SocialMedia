import React from 'react'
import CreatePost from './components/applicationCreatePost'
import ApplicationHeader from './components/applicationHeader'
import ApplicationLeftSidebar from './components/applicationleftSidebar'
import ApplicationPost from './components/applicationPost'
import ImageUrl from "../../assets/img1.jpg";
import ImageUrl2 from "../../assets/img2.jpg";
import ProfilePic from "../../assets/profilepic.jpeg"
const ApplicationPage = () => {
    return (
        <div>
            <ApplicationHeader/>
            <div className="application-body">
                <div className="application-body-left"><ApplicationLeftSidebar/></div>
                <div className="application-body-center">
                    <CreatePost/>
                    <ApplicationPost imageUrl={ImageUrl} name={"Sam Nanda"} profilePic={ProfilePic} likes={10} comments={12} time={Date.now()} description={"Hello its my First PostLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
                    <ApplicationPost imageUrl={ImageUrl2} name={"Oberoi Bhai"} profilePic={ProfilePic} likes={10} comments={12} time={Date.now()} description={"Hello its my First PostLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>

                </div>
                <div className="application-body-right">Hi</div>
            </div>
        </div>
    )
}

export default ApplicationPage
