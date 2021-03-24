import React from "react";
import { useRouter } from "next/router";
import { Row, Col, message } from "antd";
import { connect } from "react-redux";

import {
  getStory,
  getChapters,
  getStoryCharacters,
  deleteChapter,
  isStoryFavorite,
  addStoryToFavorite,
  removeStoryFromFavorite,
  getStoryLocations,
} from "../../../redux/actions/storiesActions";
import { useAuth } from "../../../hooks/userHooks";

import LocationCard from "../../../components/common/LocationCard";
import RedirectComp from "../../../components/hoc/RedirectComp";
import LoadingScreen from "../../../components/hoc/LoadingScreen";
import Chapters from "../../../components/story/Chapters";
import Banner from "../../../components/story/Banner";
import { CharacterGrid, LocationGrid } from "../../../components/common/Grid";

const Story = ({
  getStory,
  getStoryLocations,
  story,
  loading,
  getChapters,
  chapters,
  storyLocations,
  getStoryCharacters,
  deleteChapter,
  actionMessage,
  isStoryFavorite,
  isFavorite,
  addStoryToFavorite,
  storyExists,
  loadingFav,
  removeStoryFromFavorite,
}) => {
  const router = useRouter();
  const auth = useAuth();

  React.useEffect(() => {
    getStory(router.query.id);
    getChapters(router.query.id);
    getStoryCharacters(router.query.id);
    getStoryLocations(router.query.id);
    if (!auth.isLoading) {
      isStoryFavorite(router.query.id);
    }
  }, [router.query.id, auth]);

  React.useEffect(() => {
    if (actionMessage) {
      message.success(actionMessage);
      getChapters(router.query.id);
    }
  }, [actionMessage]);

  const deleteChapterFunc = (id) => {
    deleteChapter(id, router.query.id);
  };

  return (
    <LoadingScreen loading={loading}>
      <LoadingScreen loading={loadingFav}>
        <RedirectComp type="404" condition={storyExists}>
          <RedirectComp type="403" condition={story.public}>
            <div className="story">
              <Row gutter={24}>
                <Banner
                  loading={loading}
                  story={story}
                  id={router.query.id}
                  isFavorite={isFavorite}
                  addStoryToFavorite={addStoryToFavorite}
                  removeStoryFromFavorite={removeStoryFromFavorite}
                  auth={auth}
                />
                <Col sm={24} md={16} lg={18}>
                  <div className="story-chapters">
                    <Chapters
                      chapters={chapters}
                      id={router.query.id}
                      deleteChapter={deleteChapterFunc}
                    />
                    <h3 className="heading">Main Characters</h3>
                    <CharacterGrid
                      gutter={[24, 16]}
                      xxl={4}
                      xl={4}
                      lg={4}
                      md={6}
                      sm={8}
                      xs={12}
                      type="show"
                      characters={story.mainCharacters}
                    />
                    <h3 className="heading">Secondary Characters</h3>
                    <CharacterGrid
                      gutter={[24, 16]}
                      xxl={4}
                      xl={4}
                      lg={4}
                      md={6}
                      sm={8}
                      xs={12}
                      type="show"
                      characters={story.secondaryCharacters}
                    />
                    <h3 className="heading">Locations</h3>
                    <LocationGrid
                      locations={storyLocations}
                      gutter={[24, 16]}
                      lg={4}
                      md={6}
                      sm={8}
                      xs={12}
                      type="story"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </RedirectComp>
        </RedirectComp>
      </LoadingScreen>
    </LoadingScreen>
  );
};

const mapStateToProps = (state) => ({
  story: state.stories.story,
  loading: state.stories.loading,
  chapters: state.stories.chapters,
  actionMessage: state.stories.message,
  loadingChapter: state.stories.loadingChapter,
  isFavorite: state.stories.isFavorite,
  storyExists: state.stories.storyExists,
  loadingFav: state.stories.loadingFav,
  storyLocations: state.stories.storyLocations,
});

export default connect(mapStateToProps, {
  getStory,
  getChapters,
  getStoryCharacters,
  deleteChapter,
  isStoryFavorite,
  addStoryToFavorite,
  removeStoryFromFavorite,
  getStoryLocations,
})(Story);
