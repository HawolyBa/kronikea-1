import React from "react";

const CharacterCard = ({ character, type }) => {
  return (
    <figure className="card character-card" data-aos="zoom-in-up">
      <div className="img-container">
        <img src={character?.image} />
      </div>
      <figcaption>
        <h3>{`${character?.firstname} ${character?.lastname}`}</h3>
        {type === "favorites" && (
          <span className="author">Author: {character?.authorName}</span>
        )}
      </figcaption>
    </figure>
  );
};

export default CharacterCard;
