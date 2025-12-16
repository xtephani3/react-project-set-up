import AboutBookIcon from "../../assets/svgs/about-book.svg?react";
import "./Testimonial.css";
import { TestimonialItem } from "./TestimonialItem";

export function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
          <img
          src="/images/stickers/sun.png"
          className="testimonial-sun-sticker"
          alt=""
        />
        <div className="header">
          <span className="title">
            <AboutBookIcon />
            TESTIMONIAL
          </span>
          <h3 className="subtitle">What Parents Say</h3>
        </div>

        <div className="testimonials">
          <TestimonialItem
            avatarName={"Kathy Sullivan"}
            avatarSrc={"/images/avatar-1.png"}
            avatarTitle={"CEO at ordian it"}
          />

          <TestimonialItem
            avatarName={"Elsie Stroud"}
            avatarSrc={"/images/avatar-2.png"}
            avatarTitle={"CEO at Edwards"}
          />

          <TestimonialItem
            avatarName={"Kathy Sullivan"}
            avatarSrc={"/images/avatar-1.png"}
            avatarTitle={"CEO at ordian it"}
          />
        </div>
      </div>
    </div>
  );
}
