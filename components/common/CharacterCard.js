import React from "react";

const CharacterCard = () => {
  return (
    <figure className="card character-card" data-aos="zoom-in-up">
      <div className="img-container">
        <img src="https://images.pexels.com/photos/4438639/pexels-photo-4438639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </div>
      <figcaption>
        <h3>Night King</h3>
        <span className="author">Author: George R.R. Martin</span>
      </figcaption>
    </figure>
  );
};

export default CharacterCard;
