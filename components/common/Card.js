import React from "react";

const Card = () => {
  return (
    <figure className="card" data-aos="zoom-in-up">
      <img
        src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
