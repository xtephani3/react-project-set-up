import AboutBookIcon from "../../assets/svgs/about-book.svg?react";
import ApproachTick from "../../assets/svgs/approach-tick.svg?react";
import { Button } from "../../components/Buttons/Button";
import "./Approach.css";

export function Approach() {
  return (
    <div className="approach-container">
      <div className="approach-contents">
        <img
          className="approach-bird-sticker"
          src="/images/stickers/birds-left.png"
        />
        <img
          className="approach-car-sticker"
          src="/images/stickers/car.png"
        />
        <img
          className="approach-rainbow-sticker"
          src="/images/stickers/rainbow.png"
        />
        <img
          className="approach-wave-sticker"
          src="/images/stickers/wave.png"
        />

        <div className="approach-main-info">
          <span className="title">
            <AboutBookIcon />
            ABOUT US
          </span>
          <h3 className="subtitle">New Approach To Fun.</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>

          <div className="qualities">
            <div className="quality-item">
              <ApproachTick />
              <span>Best Teaching</span>
            </div>

            <div className="quality-item">
              <ApproachTick />
              <span>Quality Educators</span>
            </div>

            <div className="quality-item">
              <ApproachTick />
              <span>Expert Tutor</span>
            </div>

            <div className="quality-item">
              <ApproachTick />
              <span>Affordable</span>
            </div>
          </div>

          <div className="approach-main-cta">
            <Button variant="primary primary-teal">Find Events</Button>
          </div>
        </div>

        <div className="approach-art">
          <img src="/images/approach-art.png" alt="" />
        </div>
      </div>
    </div>
  );
}
