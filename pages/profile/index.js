import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Modal, Button } from "antd";

import Banner from "../../components/profile/Banner";
import Tabs from "../../components/profile/Tabs";
import Stories from "../../components/profile/Stories";
import Characters from "../../components/profile/Characters";
import Followers from "../../components/profile/Followers";
import Locations from "../../components/profile/Locations";
import Settings from "../../components/profile/Settings";

import { getProfile } from "../../redux/actions/userActions";
import {
  getUserStories,
  getFavoriteStories,
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
  getUserStories,
  getUserCharacters,
  getFavoriteAuthors,
  getFavoriteCharacters,
  getFavoriteStories,
  getFollowers,
  characters,
  favAuthors,
  followers,
  favCharacters,
  favStories,
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
  const [modalVisible, setModalVisible] = useState(false);
  const [settings, openSettings] = useState(false);
  const [currentTab, setCurrentTab] = useState("stories");
  const [favTab, setFavTab] = useState("favauthors");
  const changeTab = (tab) => setCurrentTab(tab);

  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      getProfile();
      getUserStories();
      getUserCharacters(auth.user.uid);
      getFavoriteAuthors();
      getFollowers();
      getFavoriteCharacters();
      getFavoriteStories();
    }
  }, [auth]);

  const changeFavTab = (tab) => setFavTab(tab);

  return (
    <div className="profile">
      <LoadingScreen loading={auth.isLoading}>
        <RedirectComp condition={auth.user} type="redirect">
          <Banner
            profile={profile}
            openSettings={openSettings}
            setModalVisible={setModalVisible}
            favAuthors={favAuthors}
            followers={followers}
            changeFavTab={changeFavTab}
            favTab={favTab}
          />
          <section className="profile-content">
            <Tabs currentTab={currentTab} tabs={tabs} changeTab={changeTab} />
            {currentTab === "stories" && <Stories stories={stories} />}
            {currentTab === "characters" && (
              <Characters characters={characters} />
            )}
            {currentTab === "locations" && <Locations />}
            {currentTab === "favorites stories" && (
              <Stories stories={favStories} />
            )}
            {currentTab === "favorites characters" && (
              <Characters type="favorites" characters={favCharacters} />
            )}
            {currentTab === "followers" && (
              <Followers
                lg={4}
                md={6}
                sm={8}
                xs={12}
                items={followers.authors}
              />
            )}
            {currentTab === "followings" && (
              <Followers
                lg={4}
                md={6}
                sm={8}
                xs={12}
                items={favAuthors.authors}
              />
            )}
          </section>
          <Modal
            title="Settings"
            visible={settings}
            onOk={() => openSettings(false)}
            onCancel={() => openSettings(false)}
            footer={[
              <Button
                key="submit"
                type="primary"
                onClick={() => openSettings(false)}
              >
                Submit
              </Button>,
            ]}
          >
            <Settings />
          </Modal>
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
});

export default connect(mapStateToProps, {
  getProfile,
  getUserStories,
  getUserCharacters,
  getFavoriteAuthors,
  getFollowers,
  getFavoriteCharacters,
  getFavoriteStories,
})(Profile);
