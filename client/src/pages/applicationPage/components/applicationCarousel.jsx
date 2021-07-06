
import Friend1 from "../../../assets/friend1.jpg";
import Friend2 from "../../../assets/friend2.jpg";
import Friend3 from "../../../assets/friend3.jpg";
import Friend4 from "../../../assets/friend4.jpg";
import Friend5 from "../../../assets/friend5.jpg";
import Friend6 from "../../../assets/friend6.jpg"
import React from 'react'

const ApplicationCarousel = () => {
    return (
        <div className="application-carousel">
            <div>
                <div>
                    <img src={Friend1} alt="" />
                    <div>Mishra Babu</div>
                </div>
                <div>
                    <img src={Friend2} alt="" />
                    <div>Panda Babu</div>
                </div>
                <div>
                    <img src={Friend3} alt="" />
                    <div>Panda Babu</div>
                </div>
                <div>
                    <img src={Friend4} alt="" />
                    <div>Panda Babu</div>
                </div>
                <div>
                    <img src={Friend5} alt="" />
                    <div>Panda Babu</div>
                </div>
                <div>
                    <img src={Friend6} alt="" />
                    <div>Panda Babu</div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationCarousel
