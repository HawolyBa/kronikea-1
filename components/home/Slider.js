import Slide from "./Slide";

const Slider = (props) => {
  const { slides, heading } = props;
  const [current, setCurrent] = React.useState(2);
  const headingId = `slider-heading__${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? props.slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === props.slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) setCurrent(index);
  };

  return (
    <div className="home-showcase">
      <div className="inner">
        <div className="slider" aria-labelledby={headingId}>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} className="visuallyhidden">
              {heading}
            </h3>

            {slides.map((slide, i) => {
              return (
                <Slide
                  key={i}
                  slide={{ ...slide, index: i }}
                  current={current}
                  handleSlideClick={handleSlideClick}
                />
              );
            })}
          </ul>
          <div className="slider__controls">
            <button
              className={`btn btn--previous`}
              title="Go to previous slide"
              onClick={handlePreviousClick}
            >
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </button>
            <button
              className={`btn btn--next`}
              title="Go to next slide"
              onClick={handleNextClick}
            >
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
