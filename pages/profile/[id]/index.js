import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Modal, Button } from "antd";

import ProfilePrive from "../index";
import Banner from "../../../components/profile/Banner";
import Tabs from "../../../components/profile/Tabs";
import Stories from "../../../components/profile/Stories";
import Characters from "../../../components/profile/Characters";
import Followers from "../../../components/profile/Followers";
import Locations from "../../../components/profile/Locations";

import {
  getProfile,
  followUser,
  unfollowUser,
  getIsFollowing,
} from "../../../redux/actions/userActions";
import {
  getUserStories,
  getFavoriteStories,
  getUserLocations,
} from "../../../redux/actions/storiesActions";
import {
  getUserCharacters,
  getFavoriteCharacters,
} from "../../../redux/actions/charactersActions";
import {
  getFavoriteAuthors,
  getFollowers,
} from "../../../redux/actions/userActions";
import { useAuth } from "../../../hooks/userHooks";
import LoadingScreen from "../../../components/hoc/LoadingScreen";
import RedirectComp from "../../../components/hoc/RedirectComp";

const Profile = ({
  getProfile,
  profile,
  stories,
  locations,
  getUserStories,
  followUser,
  unfollowUser,
  getIsFollowing,
  getUserCharacters,
  getFavoriteAuthors,
  getFavoriteCharacters,
  getFavoriteStories,
  getUserLocations,
  getFollowers,
  characters,
  isFollowing,
  favAuthors,
  followers,
  favCharacters,
  favStories,
  loading,
}) => {
  const [tabs] = useState([
    "stories",
    "characters",
    "locations",
    "favorites stories",
    "favorites characters",
    "followers",
    "followings",
  ]);
  const [currentTab, setCurrentTab] = useState("stories");
  const [favTab, setFavTab] = useState("favauthors");
  const [favoriteStories, setFavoriteStories] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState(favCharacters);
  const changeTab = (tab) => setCurrentTab(tab);

  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    getProfile(router.query.id);

    getUserStories(router.query.id, "profile");
    getUserCharacters(router.query.id);
    getFavoriteAuthors(router.query.id);
    getFollowers(router.query.id);
    getFavoriteCharacters(router.query.id);
    getFavoriteStories(router.query.id);
    getUserLocations(router.query.id);
  }, [router.query.id]);

  useEffect(() => {
    if (auth.user) {
      getIsFollowing(router.query.id);
    }
  }, [auth]);

  useEffect(() => {
    setFavoriteStories(
      favStories.filter((s) => s.public || s.authorId === auth.user.uid)
    );
    setFavoriteCharacters(
      favCharacters.filter((s) => s.public || s.authorId === auth.user.uid)
    );
  }, [auth, favStories, favCharacters]);

  const changeFavTab = (tab) => setFavTab(tab);

  return (
    <div className="profile">
      <LoadingScreen loading={auth.isLoading}>
        {auth.user && auth.user.uid === router.query.id ? (
          <ProfilePrive />
        ) : (
          <>
            <Banner
              context="public"
              profile={profile}
              favAuthors={favAuthors}
              followers={followers}
              changeFavTab={changeFavTab}
              favTab={favTab}
              setCurrentTab={setCurrentTab}
              isFollowing={isFollowing}
              followUser={followUser}
              unfollowUser={unfollowUser}
              auth={auth}
              id={router.query.id}
            />
            <section className="profile-content">
              <Tabs currentTab={currentTab} tabs={tabs} changeTab={changeTab} />
              {currentTab === "stories" && (
                <Stories
                  auth={auth}
                  loading={loading}
                  type={"show"}
                  stories={stories}
                  type={"privateProfile"}
                  context="public"
                />
              )}
              {currentTab === "characters" && (
                <Characters context="public" characters={characters} />
              )}
              {currentTab === "locations" && (
                <Locations
                  context="public"
                  locations={locations}
                  type="profile"
                />
              )}
              {currentTab === "favorites stories" && (
                <Stories
                  type="favorites"
                  loading={loading}
                  stories={favoriteStories}
                />
              )}
              {currentTab === "favorites characters" && (
                <Characters type="favorites" characters={favoriteCharacters} />
              )}
              {currentTab === "followers" && (
                <Followers
                  title="Followers"
                  type={"followers"}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  items={followers.authors}
                />
              )}
              {currentTab === "followings" && (
                <Followers
                  title="Followings"
                  type={"followings"}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  items={favAuthors.authors}
                />
              )}
            </section>
          </>
        )}
      </LoadingScreen>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  profile: state.auth.profile,
  stories: state.stories.userStories,
  characters: state.characters.userCharacters,
  favAuthors: state.auth.favAuthors,
  followers: state.auth.followers,
  favCharacters: state.characters.favCharacters,
  favStories: state.stories.favStories,
  locations: state.stories.userLocations,
  loading: state.stories.loading,
  isFollowing: state.auth.isFollowing,
});

export default connect(mapStateToProps, {
  getProfile,
  getUserStories,
  getUserCharacters,
  getFavoriteAuthors,
  getFollowers,
  getFavoriteCharacters,
  getFavoriteStories,
  getUserLocations,
  followUser,
  unfollowUser,
  getIsFollowing,
})(Profile);
