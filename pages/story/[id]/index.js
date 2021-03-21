import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Row, Col, Image, Tag, Skeleton, Space } from "antd";
import { connect } from "react-redux";
import moment from "moment";

import { LANGUAGES } from "../../../utils/constants";
import CharacterCard from "../../../components/common/CharacterCard";
import LocationCard from "../../../components/common/LocationCard";
import {
  getStory,
  getChapters,
  getStoryCharacters,
} from "../../../redux/actions/storiesActions";

const Story = ({
  getStory,
  story,
  loading,
  getChapters,
  chapters,
  getStoryCharacters,
}) => {
  const router = useRouter();

  console.log(story);

  useEffect(() => {
    getStory(router.query.id);
    getChapters(router.query.id);
    getStoryCharacters(router.query.id);
  }, []);

  return (
    <div className="story">
      <Row gutter={24}>
        <Col sm={24} md={8} lg={6}>
          <div className="story-details">
            {!loading && (
              <>
                <div className="poster" data-aos="zoom-in">
                  <Image
                    src={story.banner}
                    alt={`poster ${story.title}`}
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <h2>{story.title}</h2>
                <p className="author">
                  by{" "}
                  <Link href="/profile/1">
                    <a>{story.authorName}</a>
                  </Link>
                </p>
                <div className={`btn-follow icon custom-icon`}>
                  <ion-icon name="heart"></ion-icon>
                </div>
                <h3>Summary</h3>
                <p className="summary">
                  {story.summary ? story.summary : "No summary yet"}
                </p>
                <h3>Details</h3>
                <div className="details">
                  <span>
                    Posted at: {moment(story.createdAt).format("MM-DD-YYYY")}
                  </span>
                  <br />
                  <span>
                    Category:{" "}
                    <Link href="/category/1">
                      <a>Drama</a>
                    </Link>
                  </span>
                  <br />
                  <span>
                    Language:{" "}
                    {LANGUAGES.find((l) => l.value === story.language).name}
                  </span>
                  <br />
                  <span>Status: {story.status}</span>
                  <br />
                  <span>Copyright: {story.copyright}</span>
                  <br />
                  <span>Cover Copyright: {story.imageCopyright}</span>
                  <br />
                  <span>Mature content: {story.mature ? "YES" : "NO"}</span>
                  <br />
                </div>
                <h3>Tags</h3>
                <div className="tags">
                  {story.tags.map((tag) => (
                    <Tag key={tag} color="#6d5dfc">{`#${tag}`}</Tag>
                  ))}
                </div>
              </>
            )}
            <>
              {loading && (
                <Skeleton.Avatar
                  loading={loading}
                  shape="square"
                  size={265}
                  active
                />
              )}
              <Skeleton loading={loading} paragraph active />
              <Skeleton loading={loading} paragraph active />
            </>
          </div>
        </Col>
        <Col sm={24} md={16} lg={18}>
          <div className="story-chapters">
            <h3 className="chap-title">Chapters</h3>
            <div className="chapters">
              {!chapters.loading &&
                chapters.items.map((item) => (
                  <div key={item.id} className="chapter" data-aos="flip-left">
                    <Row align="middle" gutter={60} justify="space-between">
                      <Col>
                        <h4>
                          {item.number}. {item.title} -{" "}
                          <span className="comments">
                            {item.commentsCount} comments
                          </span>
                        </h4>
                      </Col>
                      <Col>
                        <div className="chapter-buttons">
                          <Space size={20}>
                            <Link
                              href={`/story/${router.query.id}/chapter/${item.id}`}
                            >
                              <a className="btn read-btn">Read</a>
                            </Link>
                            <Link
                              href={`/story/${router.query.id}/chapter/${item.id}/edit`}
                            >
                              <a className="btn edit-btn">Edit</a>
                            </Link>
                            <Link href="/story/1/chapter/54">
                              <a className="btn delete-btn">Delete</a>
                            </Link>
                          </Space>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
            </div>
            <h3 className="heading">Main Characters</h3>
            <Row gutter={[24, 16]}>
              <Col xs={12} sm={8} md={6} lg={4}>
                <CharacterCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <CharacterCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <CharacterCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <CharacterCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <CharacterCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <CharacterCard />
              </Col>
            </Row>
            <h3 className="heading">Secondary Characters</h3>
            <Row gutter={[24, 16]}>
              <Col xs={12} sm={8} md={6} lg={4}>
                <CharacterCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <CharacterCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <CharacterCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <CharacterCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <CharacterCard />
              </Col>
              <Col xs={12} sm={8} lg={4}>
                <CharacterCard />
              </Col>
            </Row>
            <h3 className="heading">Locations</h3>
            <Row gutter={[24, 16]}>
              <Col xs={12} sm={8} md={6} lg={4}>
                <LocationCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <LocationCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <LocationCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <LocationCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <LocationCard />
              </Col>
              <Col xs={12} sm={8} md={6} lg={4}>
                <LocationCard />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  story: state.stories.story,
  loading: state.stories.loading,
  chapters: state.stories.chapters,
});

export default connect(mapStateToProps, {
  getStory,
  getChapters,
  getStoryCharacters,
})(Story);
