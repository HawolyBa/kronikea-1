import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import { StoriesGrid } from "../components/common/Grid";
import LoadingScreen from "../components/hoc/LoadingScreen";
import { onlyUnique } from "../utils/helpers";

import { getStoriesByLetter } from "../redux/actions/storiesActions";

const Explore = (props) => {
  const { stories, loading } = props;
  const [currentStories, setCurrentStories] = React.useState([]);
  const [currentLetter, setCurrentLetter] = React.useState("a");
  const [categories, setCategories] = React.useState([]);
  const [currentCategory, setCurrentCategory] = React.useState("");
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  React.useEffect(() => {
    props.getStoriesByLetter(currentLetter, alphabet);
  }, [currentLetter]);

  React.useEffect(() => {
    setCurrentStories(stories);
    setCategories(
      stories
        .map((story) =>
          story.categories ? [...story.categories] : story.category
        )
        .filter(onlyUnique)
    );
  }, [stories]);

  React.useState(() => {
    console.log("chane");
    setCurrentStories(
      currentStories.filter((s) => s.category === currentCategory)
    );
  }, [currentCategory]);

  return (
    <div className="explore-page">
      <h2>Explore</h2>
      <Row gutter={[32, 24]}>
        <Col span={6}>
          <aside className="filter">
            <h4>Filter</h4>
            <div>
              <h5>by categories</h5>
              <select onChange={(e) => setCurrentCategory(e.target.value)}>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </aside>
        </Col>
        <Col span={18}>
          <div className="alphabetic-search">
            {alphabet.map((a) => (
              <span
                className={currentLetter === a ? "current" : ""}
                key={a}
                onClick={() => setCurrentLetter(a)}
              >
                {a}
              </span>
            ))}
          </div>
          <LoadingScreen loading={loading}>
            <StoriesGrid
              stories={currentStories}
              gutter="16px"
              columnsCountBreakPoints={{ 1600: 3, 1200: 3, 900: 3, 750: 2 }}
            />
          </LoadingScreen>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stories: state.stories.storiesFromSearch,
  loading: state.stories.loading,
});

export default connect(mapStateToProps, { getStoriesByLetter })(Explore);
