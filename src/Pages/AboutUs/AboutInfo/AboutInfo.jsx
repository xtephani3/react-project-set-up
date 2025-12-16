import './AboutInfo.css';
import { AboutInfoCard } from './AboutInfoCard';

import StartCourseIcon from "../../../assets/svgs/start-course-icon.svg?react"
import ExpertTeachersIcon from "../../../assets/svgs/expert-teachers-icon.svg?react"
import StartegiLocationIcon from "../../../assets/svgs/startegi-location-icon.svg?react"

const aboutInfo = [
    {
        icon: <StartCourseIcon/>,
        title: "START COURSE",
        description: "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur"
    },
    {
        icon: <ExpertTeachersIcon/>,
        title: "EXPERT TEACHERS",
        description: "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur"
    },
    {
        icon: <StartegiLocationIcon/>,
        title: "STRATEGI LOCATION",
        description: "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur"
    },
]

export function AboutInfo() {
    return (
        <div className="about-info-container">
            <div className="about-info-cards">
                {aboutInfo.map((item, index) => (
                    <AboutInfoCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}