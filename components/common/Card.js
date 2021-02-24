import { dummy } from "../../utils/dummy";

const Card = () => {
  return (
    <figure className="card story-card" data-aos="zoom-in-up">
      <div className="img-container">
        <img src={dummy.cover} alt="image" />
      </div>
      <figcaption>
        <span className="tag">Drama</span>
        <span className="author">
          <img src={dummy.person} alt="photo" /> Hawoly Ba
        </span>
        <h3>Lord of The Rings: The Two Tours</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim
          eligendi amet! Et reiciendis...
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
        {/* <time>2019.01.01</time> */}
      </figcaption>
    </figure>
  );
};

export default Card;
