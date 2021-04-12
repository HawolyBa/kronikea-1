import React from "react";
import Router from "next/router";

const Slide = (props) => {
  const slideRef = React.useRef();
  const { banner, title, index, id } = props.slide;
  const current = props.current;
  const [classNames, setClassNames] = React.useState("slide");

  React.useEffect(() => {
    if (current === index) setClassNames("slide slide--current");
    else if (current - 1 === index) setClassNames("slide slide--previous");
    else if (current + 1 === index) setClassNames("slide slide--next");
  }, [current]);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  const handleMouseLeave = (event) => {
    slideRef.current.style.setProperty("--x", 0);
    slideRef.current.style.setProperty("--y", 0);
  };

  const handleSlideClick = (event) => {
    props.handleSlideClick(index);
  };

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={handleSlideClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={title}
          src={banner}
          onLoad={imageLoaded}
        />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{title}</h2>
        <button
          onClick={() => Router.push(`/story/${id}`)}
          className="slide__action btn"
        >
          Read
        </button>
      </article>
    </li>
  );
};

export default Slide;
