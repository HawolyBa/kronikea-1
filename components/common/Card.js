import React from "react";

const Card = () => {
  return (
    <figure className="card">
      <img
        src="https://wovenmagazine.com/content/uploads/2019/09/03_CodyCobb_Wide.jpg"
        alt="image"
      />
      <figcaption>
        <span className="tag">Drama</span>
        <span className="author">Author: Hawoly Ba</span>
        <h3>Lord of The Rings: The Two Tours</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim
          eligendi amet! Et reiciendis. Ipsam enim eligendi amet! Et reiciendis.
        </p>
        <time>2019.01.01</time>
      </figcaption>
    </figure>
  );
};

export default Card;
