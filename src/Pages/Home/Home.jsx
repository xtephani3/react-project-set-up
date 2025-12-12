import { NavBanner } from "../../components/Nav-Header/NavBanner.jsx";
import { NavHeader } from "../../components/Nav-Header/NavHeader.jsx";
import { Heading } from "../../components/Heading/Heading.jsx";
import { Button } from "../../components/Buttons/Button.jsx";
import './Home.css'


export default function HomePage() {
    return (
        <>
            <NavBanner />
            <NavHeader />
            <div className="home-page">
                <div className="tree-image-wrap">
                <img src="/images/tree.png"/>
                </div>
                <div className="home-page_left">
                     <img className="home-page_x-icon" src="/images/x.png"/>
                    <h2 className="home-page_heading">The Best Place TO Learn and Play For Kids</h2>
                    <p className="home-page-info" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="home-page_button-wrap">
                        <Button variant="primary">Browse Courses</Button>
                        <div className="home-page_link-wrap">
                        <div className="home-page_play-icon-wrap"></div>
                        <a className="home-page_watch-now-link"  href="#">Watch Now </a>
                        </div>
                        </div>
                        <img className="home-page_orange-cloud" src="/images/orangecloud.png"/>
                </div>
                <div className="home-page_right">
                    <div className="home-page_boychild-image-wrap">
                        <div className="abstract-background"></div>
                       <img src="/images/homeboychild.png"/>
                    </div>
                    <div className="home-page_girlchild-image-wrap">
                        <div className="abstract-bg"></div>
                      <img src="/images/homegirlchild.png"/>
                    </div>
                    <div className="students-analytics"></div>
                </div>
            </div>
        </>
    )
}