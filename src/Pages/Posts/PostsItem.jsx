import { Button } from "../../components/Buttons/Button";

import CalendarIcon from "../../assets/svgs/calendar.svg?react";
import MessagingIcon from "../../assets/svgs/messaging.svg?react";

export function PostsItem({ artSrc }) {
  return (
    <div className="posts-item">
      <div className="art">
        <img src={artSrc} alt="" />
      </div>

      <div className="stats">
        <span>
          <CalendarIcon />
          15 April 2024
        </span>
        <span>
          <MessagingIcon />
          Comment (06)
        </span>
      </div>

      <p>
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat
      </p>

      <div>
        <Button variant="primary primary-teal">Read More</Button>
      </div>
    </div>
  );
}
