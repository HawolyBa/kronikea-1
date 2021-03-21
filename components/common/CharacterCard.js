import React from "react";

const CharacterCard = ({ character, type, removeCharacter }) => {
  return (
    <figure
      className={`card character-card ${type ? type : ""}`}
      data-aos="zoom-in-up"
    >
      {type === "add" && (
        <span
          onClick={() => removeCharacter(character.id)}
          className="remove-btn"
        >
          x
        </span>
      )}
      <div className="img-container">
        <img src={character?.image} />
      </div>
      <figcaption>
        <h3>{`${character?.firstname} ${character?.lastname}`}</h3>
        {type === "favorites" && (
          <span className="author">Author: {character?.authorName}</span>
        )}
        {(type === "add" || type === "show") && (
          <span className="author">Relation: {character?.relation}</span>
        )}
      </figcaption>
    </figure>
  );
};

export default CharacterCard;
