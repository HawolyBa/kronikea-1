import React from "react";
import { connect } from "react-redux";

import { getHomeStories } from "../redux/actions/storiesActions";

import { MiniGrid } from "../components/common/Grid";

const Home = (props) => {
  const { loading, stories } = props;

  React.useEffect(() => {
    props.getHomeStories();
  }, []);

  console.log(stories);
  return (
    <div className="home-page">
      <h2>Featured Stories</h2>
      <div className="grid-wrapper">
        <MiniGrid
          stories={stories}
          gutter={"20px"}
          type="mini"
          columnsCountBreakPoints={{ 1600: 4, 1200: 4, 900: 2, 350: 1 }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stories: state.stories.homeStories,
  loading: state.stories.loading,
});

export default connect(mapStateToProps, { getHomeStories })(Home);
