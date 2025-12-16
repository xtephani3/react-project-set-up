import AboutBookIcon from "../../../assets/svgs/about-book.svg?react";
import AboutTick from "../../../assets/svgs/about-tick.svg?react";
import { Button } from "../../../components/Buttons/Button";
import "./AboutMain.css";

export function AboutMain() {
  return (
    <div className="about-main-container">
      <div className="about-main-content">
        <div className="about-main-art">
          <img src="/images/about-main-art.png" />
        </div>
        <div className="about-main-info">
          <span className="title">
            <AboutBookIcon />
            ABOUT US
          </span>
          <h3 className="subtitle">
            It's our passion to work with children at <span>kindergarten</span>.
          </h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim
            <br /> veniam, quis nostrud..
          </p>

          <div className="qualities">
            <div className="quality-item">
              <AboutTick />
              <span>QUALITY EDUCATIORS</span>
            </div>

            <div className="quality-item">
              <AboutTick />
              <span>PLAY TO LEARN</span>
            </div>

            <div className="quality-item">
              <AboutTick />
              <span>SAFETY AND SECURITY</span>
            </div>

            <div className="quality-item">
              <AboutTick />
              <span>HOMELIKE ENVIROMEND</span>
            </div>
          </div>

          <img className="about-bird-sticker" src="/images/stickers/birds-right.png"/>
          <img className="about-cloud-sticker" src="/images/orangecloud.png"/>

          <div className="about-main-cta">
            <Button variant="primary">Admission Open</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
