import { Tooltip, Space } from "antd";
import { dummy } from "../../utils/dummy";

const Card = ({ story, type }) => {
  return (
    <figure className="card story-card">
      <div className="img-container">
        <img src={story.banner ? story.banner : dummy.noImage} alt="image" />
      </div>
      <figcaption>
        <div className="cat-block">
          <div>
            {story.category ? (
              <span className="tag">{story.category}</span>
            ) : (
              story.categories.map((cat) => <span className="tag">{cat}</span>)
            )}
          </div>
          <Space align="center" size={8}>
            {story.mature && (
              <Tooltip title="Mature content">
                <span className="mature">M</span>
              </Tooltip>
            )}
            {!story.public && (
              <Tooltip title="Private Story">
                <span className="mature">P</span>
              </Tooltip>
            )}
          </Space>
        </div>

        <h3>{story?.title}</h3>
        {type !== "mini" && (
          <p className="description">
            {story?.summary?.length > 150
              ? `${story.summary.slice(0, 150)}...`
              : story.summary}
            {!story.summary && "No summary yet"}
          </p>
        )}
        {type !== "privateProfile" && (
          <span className="author">Author: {story.authorName}</span>
        )}

        <div className="count">
          <span>
            <p className="number">{story.chaptersCount} </p>{" "}
            <ion-icon name="book"></ion-icon>
          </span>
          <span>
            <p className="number">{story.likesCount} </p>{" "}
            <ion-icon name="heart"></ion-icon>
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
