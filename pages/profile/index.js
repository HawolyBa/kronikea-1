import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Alert, Button } from "antd";

import Banner from "../../components/profile/Banner";
import Tabs from "../../components/profile/Tabs";
import Stories from "../../components/profile/Stories";
import Characters from "../../components/profile/Characters";
import Followers from "../../components/profile/Followers";
import Locations from "../../components/profile/Locations";
import Settings from "../../components/profile/Settings";

import { getProfile, changeProfile } from "../../redux/actions/userActions";
import {
  getUserStories,
  getFavoriteStories,
  getUserLocations,
} from "../../redux/actions/storiesActions";
import {
  getUserCharacters,
  getFavoriteCharacters,
} from "../../redux/actions/charactersActions";
import {
  getFavoriteAuthors,
  getFollowers,
} from "../../redux/actions/userActions";
import { useAuth } from "../../hooks/userHooks";
import LoadingScreen from "../../components/hoc/LoadingScreen";
import RedirectComp from "../../components/hoc/RedirectComp";

const Profile = ({
  getProfile,
  profile,
  stories,
  locations,
  getUserStories,
  getUserCharacters,
  getFavoriteAuthors,
  getFavoriteCharacters,
  getFavoriteStories,
  getUserLocations,
  changeProfile,
  getFollowers,
  characters,
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
  const [openSettings, setOpenSettings] = useState(false);
  const [currentTab, setCurrentTab] = useState("stories");
  const [favTab, setFavTab] = useState("favauthors");
  const [favoriteStories, setFavoriteStories] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState(favCharacters);
  const changeTab = (tab) => setCurrentTab(tab);

  const auth = useAuth();

  useEffect(() => {
    const unsubscribe = () => {
      if (auth.user) {
        getProfile();
        getUserStories(null, "profile");
        getUserCharacters();
        getFavoriteAuthors();
        getFollowers();
        getFavoriteCharacters();
        getFavoriteStories();
        getUserLocations();
      }
    };
    return unsubscribe();
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

  const deleteAccount = () => {
    auth.deleteAccount();
  };

  return (
    <div className="profile">
      <LoadingScreen loading={auth.isLoading}>
        <RedirectComp condition={auth.user} type="redirect">
          {auth.user && !auth.user.emailVerified && (
            <>
              <Alert
                closable
                message="You need to verify your email to enjoy all benefits of Kronikea"
                type="error"
                action={
                  <Button
                    size="small"
                    type="primary"
                    onClick={auth.verifyEmail}
                  >
                    Click here to send a new email
                  </Button>
                }
              />
              <div style={{ marginBottom: "24px" }}></div>
            </>
          )}
          <Banner
            context="private"
            profile={profile}
            openSettings={setOpenSettings}
            favAuthors={favAuthors}
            followers={followers}
            changeFavTab={changeFavTab}
            favTab={favTab}
            setCurrentTab={setCurrentTab}
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
                context="private"
              />
            )}
            {currentTab === "characters" && (
              <Characters context="private" characters={characters} />
            )}
            {currentTab === "locations" && (
              <Locations
                context="private"
                locations={locations}
                type="profile"
              />
            )}
            {currentTab === "favorites stories" && (
              <Stories
                loading={loading}
                type="favorites"
                stories={favoriteStories}
              />
            )}
            {currentTab === "favorites characters" && (
              <Characters type="favorites" characters={favoriteCharacters} />
            )}
            {currentTab === "followers" && (
              <Followers
                title={favAuthors.authors.length > 1 ? "Followers" : "Follower"}
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
                title={
                  favAuthors.authors.length > 1 ? "Followings" : "Following"
                }
                type={"followings"}
                lg={4}
                md={6}
                sm={8}
                xs={12}
                items={favAuthors.authors}
              />
            )}
          </section>
          <Settings
            deleteAccount={deleteAccount}
            changeProfile={changeProfile}
            profile={profile}
            openSettings={openSettings}
            setOpenSettings={setOpenSettings}
          />
        </RedirectComp>
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
  changeProfile,
})(Profile);
