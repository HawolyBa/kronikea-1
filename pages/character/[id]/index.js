import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import {
  Image,
  Divider,
  Space,
  Empty,
  Descriptions,
  Row,
  Col,
  message,
} from "antd";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { dummy } from "../../../utils/dummy";
import {
  getCharacter,
  submitCharaterFeedback,
  getCharacterComments,
  deleteCharacterComment,
  rateComment,
  addCharacterToFavorite,
  removeCharacterFromFavorite,
  isCharacterFavorite,
} from "../../../redux/actions/charactersActions";

import Comments from "../../../components/character/Comments";
import LoadingScreen from "../../../components/hoc/LoadingScreen";
import RedirectComp from "../../../components/hoc/RedirectComp";
import { useAuth } from "../../../hooks/userHooks";
import { CharacterGrid } from "../../../components/common/Grid";
import Like from "../../../components/common/Like";

const Character = (props) => {
  const {
    character,
    loading,
    charaExists,
    comments,
    loadingComments,
    confirmMessage,
    userComment,
    rated,
    isFavorite,
    loadingFav,
  } = props;
  const router = useRouter();
  const auth = useAuth();

  React.useEffect(() => {
    props.getCharacter(router.query.id, "show");
    props.getCharacterComments(router.query.id);
    if (!auth.isLoading) {
      props.isCharacterFavorite(router.query.id);
    }
  }, [router.query.id, auth]);

  React.useEffect(() => {
    if (rated) props.getCharacterComments(router.query.id);
  }, [rated]);

  React.useEffect(() => {
    if (confirmMessage) {
      message.success(confirmMessage);
      props.getCharacterComments(router.query.id);
    }
  }, [confirmMessage]);

  return (
    <LoadingScreen loading={loading}>
      <RedirectComp type="404" condition={charaExists}>
        <RedirectComp
          type="403"
          condition={character.public || character.authorId === auth.user.uid}
        >
          <div className="main-character">
            <section className="character-page">
              <div className="character-meta">
                <Link href={`/profile/${character.authorId}`}>
                  <a>
                    <Space align="center">
                      <div className="avatar">
                        <img
                          src={
                            character.userImage
                              ? character.userImage
                              : dummy.avatar
                          }
                          alt={character.authorName}
                        />
                      </div>
                      <h5>Author: {character.authorName}</h5>
                    </Space>
                  </a>
                </Link>
                {auth.user && auth.user.uid === character.authorId ? (
                  <div className="edit-btn">
                    <Link href={`/character/${character.id}/edit`}>
                      <a>
                        <Space size={5} align="center">
                          <ion-icon name="create"></ion-icon>
                          <span>Edit</span>
                        </Space>
                      </a>
                    </Link>
                  </div>
                ) : (
                  <Like
                    id={router.query.id}
                    authorId={character.authorId}
                    title={`${character.firstname} ${
                      character.lastname ? character.lastname : ""
                    }`}
                    type="character"
                    isFavorite={isFavorite}
                    likeFunc={props.addCharacterToFavorite}
                    username={auth.user && auth.user.username}
                    removeFunc={props.removeCharacterFromFavorite}
                  />
                )}
              </div>
              <h2>{`${character.firstname} ${
                character.lastname && character.lastname
              }`}</h2>
              <div className="character-image">
                <div className="img-container">
                  <Image
                    src={character.image ? character.image : dummy.noImage}
                    width={"100%"}
                    height={600}
                    alt="character"
                  />
                </div>
              </div>
              <div className="character-description">
                <h3 className="desc-title">Biography</h3>
                <p>
                  {character.description ? (
                    character.description
                  ) : (
                    <span className="na">No description yet</span>
                  )}
                </p>
              </div>
              <Divider />
              <Descriptions
                title="Character Info"
                layout="vertical"
                labelStyle={{ fontWeight: "bolder" }}
                contentStyle={{ paddingBottom: 0 }}
                colon={false}
              >
                <Descriptions.Item label="Age">
                  {character.age ? character.age : "N/A"}
                </Descriptions.Item>
                <Descriptions.Item label="Gender">
                  {character.gender ? character.gender : "N/A"}
                </Descriptions.Item>
                <Descriptions.Item label="Ethnicity">
                  {character.ethnicity ? character.ethnicity : "N/A"}
                </Descriptions.Item>
                <Descriptions.Item label="Occupation">
                  {character.occupation ? character.occupation : "N/A"}
                </Descriptions.Item>
                <Descriptions.Item label="Group">
                  {character.group ? character.group : "N/A"}
                </Descriptions.Item>
                <Descriptions.Item label="Residence">
                  {character.residence ? character.residence : "N/A"}
                </Descriptions.Item>
              </Descriptions>
              <Divider />
              <div className="character-relationships">
                <h3 className="desc-title">Relationships</h3>
                {character.relatives ? (
                  <CharacterGrid
                    gutter={"16px"}
                    type="show"
                    columnsCountBreakPoints={{
                      350: 1,
                      750: 2,
                      900: 3,
                      1200: 4,
                      1600: 4,
                    }}
                    characters={character.relatives}
                  />
                ) : (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
              </div>
              <Divider />
              <div className="character-stories">
                <h3 className="desc-title">Stories</h3>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{
                    350: 1,
                    750: 2,
                    900: 2,
                    1200: 3,
                    1600: 3,
                  }}
                >
                  <Masonry gutter={"16px"}>
                    {character.stories ? (
                      character.stories.map((story) => (
                        <Link key={story.id} href={`/story/${story.id}`}>
                          <a>
                            <figure className="card story-card story-card-mini">
                              <div className="img-container">
                                <img src={story.banner} alt="image" />
                              </div>
                              <figcaption>
                                <h3>{story?.title}</h3>
                              </figcaption>
                            </figure>
                          </a>
                        </Link>
                      ))
                    ) : (
                      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    )}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </section>
            <Comments
              userComment={userComment}
              comments={comments}
              character={character}
              auth={auth}
              submit={props.submitCharaterFeedback}
              loadingComments={loadingComments}
              deleteComment={props.deleteCharacterComment}
              rateComment={props.rateComment}
            />
          </div>
        </RedirectComp>
      </RedirectComp>
    </LoadingScreen>
  );
};

const mapStateToProps = (state) => ({
  character: state.characters.character,
  loading: state.characters.loading,
  charaExists: state.characters.charaExists,
  comments: state.stories.comments,
  loadingComments: state.stories.loadingComments,
  confirmMessage: state.stories.message,
  userComment: state.stories.userComment,
  rated: state.stories.rated,
  isFavorite: state.characters.isFavorite,
  loadingFav: state.characters.loadingFav,
});

export default connect(mapStateToProps, {
  getCharacter,
  submitCharaterFeedback,
  getCharacterComments,
  deleteCharacterComment,
  rateComment,
  addCharacterToFavorite,
  removeCharacterFromFavorite,
  isCharacterFavorite,
})(Character);
