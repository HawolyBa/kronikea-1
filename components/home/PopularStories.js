import React from "react";
import Link from "next/link";
import { Row, Col, Divider, Rate } from "antd";
import { dummy } from "../../utils/dummy";

const PopularStories = ({ stories }) => {
  return (
    <section>
      <div className="heading-cat">
        <h3 className="side-heading">Popular Stories</h3>
        <Link href="/explore">
          <a>View All &gt;&gt;&gt;</a>
        </Link>
      </div>
      <div className="featured-stories">
        <Row>
          {stories.map((story, i) => (
            <Col lg={6} md={12} sm={24} xs={24} key={story.id}>
              <div className="featured-story">
                <Link href={`/story/${story.id}`}>
                  <a>
                    <Row>
                      <Col
                        span={24}
                        lg={{ order: i % 2 === 0 ? 1 : 2 }}
                        md={{ order: i % 2 === 0 ? 1 : 2 }}
                        sm={{ order: 1 }}
                      >
                        <img
                          src={story.banner ? story.banner : dummy.noImage}
                          alt={story.title}
                          data-aos={i % 2 === 0 ? "fade-up" : "fade-down"}
                        />
                      </Col>
                      <Col
                        span={24}
                        lg={{ order: i % 2 === 0 ? 2 : 1 }}
                        md={{ order: i % 2 === 0 ? 2 : 1 }}
                        sm={{ order: 2 }}
                      >
                        <div
                          className="story-details"
                          data-aos={i % 2 === 0 ? "fade-down" : "fade-up"}
                        >
                          {/* <div className="cat-block">
                            <span className="tag">{story.category}</span>
                          </div> */}
                          <div>
                            <h2>{story.title}</h2>
                            <span className="author">
                              Author: {story.authorName}
                            </span>
                          </div>
                          <p className="summary">
                            {story?.summary?.length > 150
                              ? `${story.summary.slice(0, 150)}...`
                              : story.summary}
                            {!story.summary && "No summary yet"}
                          </p>
                          <Rate allowHalf disabled defaultValue={story.note} />
                          {/* <div className="count">
                            <span>
                              <p className="number">{story.chaptersCount} </p>{" "}
                              <ion-icon name="book"></ion-icon>
                            </span>
                            <span>
                              <p className="number">{story.likesCount} </p>{" "}
                              <ion-icon name="heart"></ion-icon>
                            </span>
                            <span>
                              <p className="number">{story.commentsCount} </p>{" "}
                              <ion-icon name="chatbubble"></ion-icon>
                            </span>
                          </div> */}
                        </div>
                      </Col>
                    </Row>
                  </a>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <Divider />
    </section>
  );
};

export default PopularStories;
