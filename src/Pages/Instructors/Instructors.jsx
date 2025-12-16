import AboutBookIcon from "../../assets/svgs/about-book.svg?react";
import ArrowLeft from "../../assets/svgs/instructors/arrow-left.svg?react";
import ArrowRight from "../../assets/svgs/instructors/arrow-right.svg?react";
import "./Instructors.css";
import { InstructorsItem } from "./InstructorsItem";

export function Instructors() {
  return (
    <div className="instructor-container">
      <div className="instructor-content">
        <img
          className="instructor-bird-sticker"
          src="/images/stickers/birds-right.png"
        />
        <div className="header">
          <div className="header-info">
            <span className="title">
              <AboutBookIcon />
              TEACHER
            </span>
            <h3 className="subtitle">Meet Our Instructor</h3>
          </div>

          <div className="header-navigation">
            <ArrowLeft />
            <ArrowRight />
          </div>
        </div>

        <div className="instructors">
          <InstructorsItem
            avatarName={"Cheryl Curry"}
            avatarSrc={"/images/instructors/1.jpg"}
          />

          <InstructorsItem
            avatarName={"Willie Diaz"}
            avatarSrc={"/images/instructors/2.jpg"}
          />

          <InstructorsItem
            avatarName={"Jimmy Sifuentes"}
            avatarSrc={"/images/instructors/3.jpg"}
          />

          <InstructorsItem
            avatarName={"Micheal Hammond"}
            avatarSrc={"/images/instructors/4.jpg"}
          />
        </div>
      </div>
    </div>
  );
}
