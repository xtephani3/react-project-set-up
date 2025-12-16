import FiveStars from "../../assets/svgs/5stars.svg?react";

export function TestimonialItem({ avatarSrc, avatarName, avatarTitle }) {
  return (
    <div className="testimonial-item">
      <div>
        <FiveStars />
      </div>
      <p>
        ”Lorem ipsum dolor sit amet, elit, seddo eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim.
        Amet consectetur adipiscing”
      </p>
      <div className="avatar-section">
        <div className="avatar">
          <img src={avatarSrc} />
        </div>
        <div className="avatar-info">
          <b>{avatarName}</b>
          <span>{avatarTitle}</span>
        </div>
      </div>
    </div>
  );
}
