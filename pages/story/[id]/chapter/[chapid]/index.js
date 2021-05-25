import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Divider, Space, PageHeader, Tooltip, Spin } from "antd";

import { dummy } from "../../../../../utils/dummy";
import { useAuth } from "../../../../../hooks/userHooks";
import {
  getChapter,
  getComments,
  submitComment,
  deleteComment,
  rateStory,
  getUserNote,
} from "../../../../../redux/actions/storiesActions";

import Comments from "../../../../../components/chapter/Comments";
import LoadingScreen from "../../../../../components/hoc/LoadingScreen";
import RedirectComp from "../../../../../components/hoc/RedirectComp";
import {
  CharacterGrid,
  LocationGrid,
} from "../../../../../components/common/Grid";
import RateStory from "../../../../../components/common/RateStory";

const Chapter = (props) => {
  const router = useRouter();
  const auth = useAuth();
  const {
    loading,
    chapter,
    loadingComments,
    comments,
    chapterExists,
    userNote,
  } = props;

  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    props.getChapter(router.query.id, router.query.chapid, "show");
    props.getComments(router.query.chapid);
    if (!auth.isLoading) {
      props.getUserNote(router.query.id);
    }
  }, [router.query.id, router.query.chapid, auth]);

  React.useEffect(() => {
    if (chapter.characters) {
      setCharacters(
        chapter.characters.filter(
          (c) => c.public || c.authorId === auth.user.uid
        )
      );
    }
  }, [chapter]);

  return (
    <LoadingScreen loading={loading}>
      <RedirectComp condition={chapterExists && chapter.status} type="404">
        <RedirectComp
          condition={
            chapter.public || (auth.user && auth.user.uid === chapter.authorId)
          }
          type="403"
        >
          <div className="main-chapter">
            <div className="chapter-page">
              <PageHeader
                className="site-page-header"
                onBack={() => router.push(`/story/${router.query.id}`)}
                title="Back to story"
              />
              <h2>
                {chapter.number}. {chapter.title}
              </h2>
              <div className="meta">
                <Divider orientation="left">
                  <Link href="/profile/1">
                    <a>
                      <Space direction="vertical" align="center">
                        <div className="avatar">
                          <img src={dummy.person} alt={dummy.name} />
                        </div>
                        <h5>{chapter.authorName}</h5>
                      </Space>
                    </a>
                  </Link>
                </Divider>
              </div>
              <section
                className="chapter-content"
                dangerouslySetInnerHTML={{ __html: chapter.body }}
              ></section>
              <div className="nav-btns">
                {chapter.prev ? (
                  <Link
                    href={`/story/${router.query.id}/chapter/${chapter.prev}`}
                  >
                    <a>
                      <Tooltip title="Previous Chapter" placement="bottom">
                        <div className="icon custom-icon nav-btn prev-btn">
                          <ion-icon name="chevron-back-circle"></ion-icon>
                        </div>
                      </Tooltip>
                    </a>
                  </Link>
                ) : (
                  <div></div>
                )}
                {chapter.next && (
                  <Link
                    href={`/story/${router.query.id}/chapter/${chapter.next}`}
                  >
                    <a>
                      <Tooltip title="Next Chapter" placement="bottom">
                        <div className="icon custom-icon nav-btn next-btn">
                          <ion-icon name="chevron-forward-circle"></ion-icon>
                        </div>
                      </Tooltip>
                    </a>
                  </Link>
                )}
              </div>
              <Divider />
              {loadingComments ? (
                <Spin />
              ) : (
                <Comments
                  submitComment={props.submitComment}
                  auth={auth}
                  comments={comments}
                  deleteComment={props.deleteComment}
                  chapid={router.query.chapid}
                  storyId={router.query.id}
                  authorId={chapter.authorId}
                  title={chapter.storyTitle}
                />
              )}
            </div>
            <div className="main-chapter-details">
              <h3>Characters in this chapter</h3>
              <CharacterGrid
                gutter={"12px"}
                characters={characters}
                type="show"
                columnsCountBreakPoints={{
                  350: 1,
                  750: 2,
                  900: 2,
                  1200: 2,
                  1600: 2,
                }}
              />
              <Divider />
              <h3>Locations in this chapter</h3>
              <LocationGrid
                columnsCountBreakPoints={{
                  350: 1,
                  750: 2,
                  900: 2,
                  1200: 2,
                  1600: 2,
                }}
                gutter={"12px"}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                type="story"
                locations={chapter.locations}
              />
            </div>
            {auth.user && auth.user.uid && (
              <RateStory
                userNote={userNote}
                note={chapter.note}
                storyId={router.query.id}
                rateFunc={props.rateStory}
              />
            )}
          </div>
        </RedirectComp>
      </RedirectComp>
    </LoadingScreen>
  );
};

const mapStateToProps = (state) => ({
  chapter: state.stories.chapter,
  loading: state.stories.loading,
  comments: state.stories.comments,
  loadingComments: state.stories.loadingComments,
  chapterExists: state.stories.chapterExists,
  message: state.stories.message,
  userNote: state.stories.userNote,
});

export default connect(mapStateToProps, {
  getChapter,
  getComments,
  submitComment,
  deleteComment,
  getUserNote,
  rateStory,
})(Chapter);
