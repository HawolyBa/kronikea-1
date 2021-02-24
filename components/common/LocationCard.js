import React from "react";

const LocationCard = () => {
  return (
    <figure className="card character-card" data-aos="zoom-in-up">
      <div className="img-container">
        <img src="https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </div>
      <figcaption>
        <h3>University</h3>
        <span className="author">Story: Lord of The Rings: The Two Tours</span>
      </figcaption>
    </figure>
  );
};

export default LocationCard;
