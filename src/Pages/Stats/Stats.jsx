import Awards from "../../assets/svgs/stats/awards.svg?react";
import Classrooms from "../../assets/svgs/stats/classroom.svg?react";
import Students from "../../assets/svgs/stats/student.svg?react";
import Teachers from "../../assets/svgs/stats/teacher.svg?react";
import "./Stats.css";

export function Stats() {
  return (
    <div className="stats-container">
      <div className="stats-content">
        <img className="stats-star-sticker" src="/images/stickers/blue-star.png"/>
        
        <div className="stats-video">
          <div className="backdrop" />
          <div className="stats-video-main">
            <img src="/images/stats-video-placeholder.png" />
          </div>
        </div>

        <div className="stats-info">
          <div className="stats-info-item">
            <div className="icon">
              <div className="icon-main">
                <Teachers />
              </div>
            </div>
            <b>2,500</b>
            <p>Total Teacher</p>
          </div>

          <span className="divider" />

          <div className="stats-info-item">
            <div className="icon">
              <div className="icon-main">
                <Students />
              </div>
            </div>
            <b>5,000</b>
            <p>Total student</p>
          </div>

          <span className="divider" />

          <div className="stats-info-item">
            <div className="icon">
              <div className="icon-main">
                <Awards />
              </div>
            </div>
            <b>350</b>
            <p>Total classroom</p>
          </div>

          <span className="divider" />

          <div className="stats-info-item">
            <div className="icon">
              <div className="icon-main">
                <Classrooms />
              </div>
            </div>
            <b>1,200</b>
            <p>Best Awards Won</p>
          </div>
        </div>
      </div>
    </div>
  );
}
