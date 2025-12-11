import { NavBanner } from "../../components/Nav-Header/NavBanner.jsx";
import { NavHeader } from "../../components/Nav-Header/NavHeader.jsx";
import { Heading } from "../../components/Heading/Heading.jsx";
import './Landing.css'

export default function LandingPage() {
    return (
        <>
            <NavBanner />
            <NavHeader />
            <div className="landing-page">
                <div className="landing-page_left">
                <Heading text ='The Best Place TO Learn and Play For Kids' />
                </div>
                <div className="landing-page_right"></div>
            </div>
        </>
    )
}