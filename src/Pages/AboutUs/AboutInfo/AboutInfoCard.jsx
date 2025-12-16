export function AboutInfoCard({ icon, title, description, }) {
    return (
        <div className="about-info-card">
            <div className="icon">{icon}</div>
            <b className="title">{title}</b>
            <p className="description">{description}</p>
        </div>
    )
}