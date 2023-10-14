import { Link } from "react-router-dom";


export default function PostCard({ toPath, title, date, description, thumbnailSrc }) {
  return (
    <Link to={toPath}>
      <div className="posts-section__post-card">
        <h3 className="posts-section__post-card__title">
          {title}<span className="posts-section__post-card__date">{date}</span>
        </h3>
        <div className="posts-section__post-card__body">
          <div className="posts-section__post-card__description">
            {description}
          </div>
          <div className="posts-section__post-card__image">
            <img src={thumbnailSrc} height="74px" width="130px"></img>
          </div>
        </div>
      </div>
    </Link>
  );
}
