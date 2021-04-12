import React from "react";
import Link from "next/link";
import { Row, Col, Space } from "antd";

const PopularUsers = ({ users }) => {
  return (
    <div className="popular-users">
      <div className="popular-users-content">
        <div className="heading-cat">
          <h3 className="side-heading">Popular Users</h3>
          <Link href="/explore">
            <a>View All &gt;&gt;&gt;</a>
          </Link>
        </div>
        <Row gutter={[16, 32]} justify="space-between">
          {users.map((user) => (
            <Col lg={6} md={12} sm={12} xs={24} key={user.id}>
              <Link href={`/profile/${user.id}`} key={user.id}>
                <a>
                  <figure
                    className="user-card home-user-card"
                    data-aos="flip-left"
                  >
                    <Space direction="vertical" size={12} align="center">
                      <div className="img-container">
                        {user.image ? (
                          <img
                            src={user.image}
                            alt={`photo ${user.username}`}
                          />
                        ) : (
                          <ion-icon name="person"></ion-icon>
                        )}
                      </div>
                      <figcaption>
                        <span className="authorName">{user.username}</span>
                        <br />
                        <span>{user.likesCount} followers</span>
                        <br />
                        <div className="social">
                          <Space size={30}>
                            {user.facebook && (
                              <Link href={user?.facebook}>
                                <a target="_blank">
                                  <div className="icon custom-icon fb-icon">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                  </div>
                                </a>
                              </Link>
                            )}
                            {user.twitter && (
                              <Link href={user?.twitter}>
                                <a target="_blank">
                                  <div className="icon custom-icon twitter-icon">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                  </div>
                                </a>
                              </Link>
                            )}
                            {user.instagram && (
                              <Link href={user?.instagram}>
                                <a target="_blank">
                                  <div className="icon custom-icon instagram-icon">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                  </div>
                                </a>
                              </Link>
                            )}
                            {user.deviantart && (
                              <Link href={user?.deviantart}>
                                <a target="_blank">
                                  <div className="icon custom-icon deviantart-icon">
                                    <ion-icon name="logo-deviantart"></ion-icon>
                                  </div>
                                </a>
                              </Link>
                            )}
                          </Space>
                        </div>
                      </figcaption>
                    </Space>
                  </figure>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PopularUsers;
