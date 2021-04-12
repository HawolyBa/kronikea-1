import React from "react";
import { connect } from "react-redux";

import {
  getHomeStories,
  getFeaturedStories,
} from "../redux/actions/storiesActions";
import { getPopularCharacters } from "../redux/actions/charactersActions";
import { getPopularUsers } from "../redux/actions/userActions";

import LoadingScreen from "../components/hoc/LoadingScreen";
import PopularUsers from "../components/home/PopularUsers";
import PopularCharacters from "../components/home/PopularCharacters";
import PopularStories from "../components/home/PopularStories";
import PopularCategories from "../components/home/PopularCategories";
import Slider from "../components/home/Slider";

const Home = (props) => {
  const { loading, stories, characters, users, featuredStories } = props;

  React.useEffect(() => {
    props.getFeaturedStories();
    props.getHomeStories();
    props.getPopularCharacters();
    props.getPopularUsers();
  }, []);
  console.log(featuredStories);
  return (
    <LoadingScreen loading={loading}>
      <div className="home-page">
        <Slider heading="Example Sliders" slides={featuredStories} />
        <PopularCategories />
        <PopularStories stories={stories} />
        <PopularCharacters characters={characters} />
        <PopularUsers users={users} />
      </div>
    </LoadingScreen>
  );
};

const mapStateToProps = (state) => ({
  stories: state.stories.homeStories,
  characters: state.characters.popularCharacters,
  users: state.auth.popularUsers,
  loading: state.stories.loading,
  featuredStories: state.stories.featuredStories,
});

export default connect(mapStateToProps, {
  getFeaturedStories,
  getHomeStories,
  getPopularCharacters,
  getPopularUsers,
})(Home);
