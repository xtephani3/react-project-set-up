import ShareIcon from "../../assets/svgs/share-icon.svg?react";

export function InstructorsItem({ avatarSrc, avatarName }) {
  return (
    <div className="instructor-item">
      <div className="avatar-section">
        <div className="avatar">
          <img src={avatarSrc} />

          <div className="share-icon">
            <ShareIcon />
          </div>
        </div>
        <div className="avatar-info">
          <b>{avatarName}</b>
          <span>Teacher</span>
        </div>
      </div>
    </div>
  );
}
