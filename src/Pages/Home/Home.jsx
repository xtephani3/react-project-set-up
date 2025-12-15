import { NavBanner } from "../../components/Nav-Header/NavBanner.jsx";
import { NavHeader } from "../../components/Nav-Header/NavHeader.jsx";
import { Heading } from "../../components/Heading/Heading.jsx";
import { Button } from "../../components/Buttons/Button.jsx";
import HeroPlayButton from "../../assets/svgs/hero-play-button.svg?react"
import './Home.css'


export default function HomePage() {
    return (
        <>
            <NavBanner />
            <NavHeader />
            <div className="home-page">
                <div className="tree-image-wrap">
                    <img src="/images/tree.png" />
                </div>
                <div className="home-page_left">
                    <img className="home-page_x-icon" src="/images/x.png" />
                    <h2 className="home-page_heading">The Best Place TO Learn and Play For Kids</h2>
                    <p className="home-page-info" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="home-page_button-wrap">
                        <Button variant="primary">Browse Courses</Button>
                        <div className="home-page_link-wrap">
                            <div className="home-page_play-icon-wrap">
                                 <HeroPlayButton/>
                            </div>
                            <a className="home-page_watch-now-link" href="#">Watch Now </a>
                        </div>
                    </div>
                    <img className="home-page_orange-cloud" src="/images/orangecloud.png" />
                </div>
                <div className="home-page_right">
                    <div className="art-container">
                        <div className="home-page_boychild-image-wrap">
                            <div className="abstract-background"></div>
                            <img src="/images/homeboychild.png" />
                        </div>
                        <div className="students-analytics">
                            <div className="students-analytics-info ">
                                <b>10k+</b>
                                <span>Student</span>
                            </div>
                            <div className="student-analytics-image">
                                 <img src="/images/student-cluster.png" />
                            </div>
                        </div>  
                    </div>
                    <div className="art-container right-art-container">
                        <div className="students-analytics">
                            <div className="students-analytics-info ">
                                <b>5.8k</b>
                                <span>Success Courses</span>
                            </div>
                            
                        </div>  
                        <div className="home-page_girlchild-image-wrap">
                            <div className="abstract-bg"></div>
                            <img src="/images/homegirlchild.png" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}