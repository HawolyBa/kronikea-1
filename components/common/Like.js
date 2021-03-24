import React from "react";

const Like = ({
  id,
  title,
  type,
  isFavorite,
  likeFunc,
  username,
  removeFunc,
}) => {
  const likeItem = () => {
    if (type === "story" && !isFavorite) {
      likeFunc(id, username, title);
    }
    if (type === "story" && isFavorite) {
      removeFunc(id, title);
    }
  };

  return (
    <div
      className={`btn-follow ${isFavorite ? "liked" : ""} icon custom-icon`}
      onClick={likeItem}
    >
      <ion-icon name="heart"></ion-icon>
    </div>
  );
};

export default Like;
