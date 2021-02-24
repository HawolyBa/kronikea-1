import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Row, Col, Image, Tag, Skeleton, Space } from "antd";

import { dummy } from "../../../utils/dummy";
import CharacterCard from "../../../components/common/CharacterCard";
import LocationCard from "../../../components/common/LocationCard";

const Story = () => {
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <div className="story">
      <Row gutter={24}>
        <Col sm={24} md={8} lg={6}>
          <div className="story-details">
            {!loading && (
              <>
                <div className="poster" data-aos="zoom-in">
                  <Image
                    src={dummy.poster}
                    alt="poster"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <h2>Becoming</h2>
                <p className="author">
                  by{" "}
                  <Link href="/profile/1">
                    <a>Michelle Obama</a>
                  </Link>
                </p>
                <div className="btn-follow icon custom-icon">
                  <ion-icon name="heart"></ion-icon>
                </div>
                <h3>Summary</h3>
                <p className="summary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  numquam, quibusdam debitis laborum quia rem nihil, deserunt,
                  dolor aut repellendus illum doloremque consectetur dolorum id
                  necessitatibus perspiciatis iste sint porro.
                </p>
                <h3>Details</h3>
                <div className="details">
                  <span>Created At: 2020-01-20</span>
                  <br />
                  <span>
                    Category:{" "}
                    <Link href="/category/1">
                      <a>Drama</a>
                    </Link>
                  </span>
                  <br />
                  <span>Language: EN</span>
                  <br />
                  <span>Status: in progress</span>
                  <br />
                  <span>Copyright: Public Domain</span>
                  <br />
                  <span>Cover Copyright: Michelle Obama</span>
                  <br />
                  <span>Mature content: NO</span>
                  <br />
                </div>
                <h3>Tags</h3>
                <div className="tags">
                  <Tag color="#6d5dfc">#drama</Tag>
                  <Tag color="#6d5dfc">#biography</Tag>
                  <Tag color="#6d5dfc">#romance</Tag>
                  <Tag color="#6d5dfc">#history</Tag>
                  <Tag color="#6d5dfc">#bestseller</Tag>
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
              <div className="chapter" data-aos="flip-left">
                <Row align="middle" gutter={60} justify="space-between">
                  <Col>
                    <h4>
                      1. Chapter 1 -{" "}
                      <span className="comments">15 comments</span>
                    </h4>
                  </Col>
                  <Col>
                    <div className="chapter-buttons">
                      <Space size={20}>
                        <Link href="/story/1/chapter/54">
                          <a className="btn read-btn">Read</a>
                        </Link>
                        <Link href="/story/1/chapter/54">
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
              <div className="chapter" data-aos="flip-left">
                <Row align="middle" gutter={60} justify="space-between">
                  <Col>
                    <h4>
                      2. Chapter 2 -{" "}
                      <span className="comments">15 comments</span>
                    </h4>
                  </Col>
                  <Col>
                    <div className="chapter-buttons">
                      <Space size={20}>
                        <Link href="/story/1/chapter/54">
                          <a className="btn read-btn">Read</a>
                        </Link>
                        <Link href="/story/1/chapter/54">
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
              <div className="chapter" data-aos="flip-left">
                <Row align="middle" gutter={60} justify="space-between">
                  <Col>
                    <h4>
                      3. Chapter 3 -{" "}
                      <span className="comments">15 comments</span>
                    </h4>
                  </Col>
                  <Col>
                    <div className="chapter-buttons">
                      <Space size={20}>
                        <Link href="/story/1/chapter/54">
                          <a className="btn read-btn">Read</a>
                        </Link>
                        <Link href="/story/1/chapter/54">
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

export default Story;
