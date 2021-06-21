import "./Card.css";
export default function Card({ id, title, thumbnailUrl }) {
  return (
    <div className="card">
      <img src={thumbnailUrl} alt={title} className="imageStyle" />
      <div className="contentSection">
        <div className="id">{id}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
}
