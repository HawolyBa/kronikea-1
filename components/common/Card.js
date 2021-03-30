import { dummy } from "../../utils/dummy";
const Card = ({ story, type }) => {
  return (
    <figure className="card story-card">
      <div className="img-container">
        <img src={story.banner ? story.banner : dummy.noImage} alt="image" />
      </div>
      <figcaption>
        <span className="tag">Drama</span>
        {type !== "privateProfile" && (
          <span className="author">Author: {story.authorName}</span>
        )}
        <h3>{story?.title}</h3>
        <p className="description">
          {story?.summary?.length > 150
            ? `${story.summary.slice(0, 150)}...`
            : story.summary}
          {!story.summary && "No summary yet"}
        </p>
        <div className="count">
          <span>
            <p className="number">{story.chaptersCount} </p>{" "}
            <ion-icon name="book"></ion-icon>
          </span>
          <span>
            <p className="number">
              {story.secondaryArr.length + story.mainCharacters.length}{" "}
            </p>{" "}
            <ion-icon name="people"></ion-icon>
          </span>
          <span>
            <p className="number">{story.commentsCount} </p>{" "}
            <ion-icon name="chatbubble"></ion-icon>
          </span>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;
