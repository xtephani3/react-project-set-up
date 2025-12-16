import HeroPlayButton from "../../assets/svgs/hero-play-button.svg?react";
import { Button } from "../../components/Buttons/Button.jsx";
import { NavBanner } from "../../components/NavHeader/NavBanner.jsx";
import { NavHeader } from "../../components/NavHeader/NavHeader.jsx";
import "./Home.css";

export function HomePage() {
  return (
    <>
      <NavBanner />
      <NavHeader />

      <div className="home-page">
        <img
          src="/images/stickers/sun.png"
          className="home-sun-sticker"
          alt=""
        />
        <div className="tree-image-wrap">
          <img src="/images/tree.png" />
        </div>
        
          <img className="home-page_x-icon home-page_x-icon--bottom" src="/images/x.png" />
        <div className="home-page_left">
          <img className="home-page_x-icon" src="/images/x.png" />
          <h2 className="home-page_heading">
            The Best Place TO Learn and Play For Kids
          </h2>
          <p className="home-page-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="home-page_button-wrap">
            <Button variant="primary">Browse Courses</Button>
            <div className="home-page_link-wrap">
              <div className="home-page_play-icon-wrap">
                <HeroPlayButton />
              </div>
              <a className="home-page_watch-now-link" href="#">
                Watch Now{" "}
              </a>
            </div>
          </div>
          <img
            className="home-page_orange-cloud"
            src="/images/orangecloud.png"
          />
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
  );
}
