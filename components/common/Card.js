const Card = ({ story }) => {
  return (
    <figure className="card story-card">
      <div className="img-container">
        <img src={story.banner} alt="image" />
      </div>
      <figcaption>
        <span className="tag">Drama</span>
        <span className="author">Author: {story.authorName}</span>
        <h3>{story?.title}</h3>
        <p className="description">
          {story?.summary?.length > 150
            ? `${story.summary.slice(0, 150)}...`
            : story.summary}
        </p>
        <div className="count">
          <span>
            <p className="number">12 </p> <ion-icon name="book"></ion-icon>
          </span>
          <span>
            <p className="number">12 </p> <ion-icon name="people"></ion-icon>
          </span>
          <span>
            <p className="number">12 </p>{" "}
            <ion-icon name="chatbubble"></ion-icon>
          </span>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;
