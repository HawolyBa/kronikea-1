import React from "react";
import { useRouter } from "next/router";
import { Row, Col, message, Empty } from "antd";
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

  const [mains, setMains] = React.useState([]);
  const [secondaries, setSecondaries] = React.useState([]);
  const [chaptersArr, setChaptersArr] = React.useState([]);

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

  React.useEffect(() => {
    if (story.mainCharacters) {
      setMains(
        story.mainCharacters.filter(
          (c) => c.public || c.authorId === auth.user.uid
        )
      );
    }
  }, [story]);

  React.useEffect(() => {
    if (story.secondaryCharacters) {
      setSecondaries(
        story.secondaryCharacters.filter(
          (c) => c.public || c.authorId === auth.user.uid
        )
      );
    }
  }, [story]);

  React.useEffect(() => {
    if (!chapters.loading) {
      setChaptersArr(
        chapters.items.filter((c) => c.status || c.authorId === auth.user.uid)
      );
    }
  }, [chapters]);

  console.log(chapters);

  return (
    <LoadingScreen loading={loading}>
      <LoadingScreen loading={loadingFav}>
        <RedirectComp type="404" condition={storyExists}>
          <RedirectComp
            type="403"
            condition={
              story.public || (auth.user && auth.user.uid === story.authorId)
            }
          >
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
                    {chaptersArr.length > 0 ? (
                      <Chapters
                        loading={chapters.loading}
                        chapters={chaptersArr}
                        id={router.query.id}
                        deleteChapter={deleteChapterFunc}
                      />
                    ) : (
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="No chapters yet"
                      />
                    )}

                    <h3 className="heading">Main Characters</h3>
                    <CharacterGrid
                      gutter={"16px"}
                      xxl={4}
                      xl={4}
                      lg={4}
                      md={6}
                      sm={8}
                      xs={12}
                      type="show"
                      columnsCountBreakPoints={{
                        350: 1,
                        750: 2,
                        900: 3,
                        1200: 4,
                        1600: 4,
                      }}
                      characters={mains}
                    />
                    <h3 className="heading">Secondary Characters</h3>
                    <CharacterGrid
                      gutter={"16px"}
                      xxl={4}
                      xl={4}
                      lg={4}
                      md={6}
                      sm={8}
                      xs={12}
                      type="show"
                      columnsCountBreakPoints={{
                        350: 1,
                        750: 2,
                        900: 3,
                        1200: 4,
                        1600: 4,
                      }}
                      characters={secondaries}
                    />
                    <h3 className="heading">Locations</h3>
                    <LocationGrid
                      locations={storyLocations}
                      gutter={"16px"}
                      columnsCountBreakPoints={{
                        350: 1,
                        750: 2,
                        900: 3,
                        1200: 4,
                        1600: 4,
                      }}
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
