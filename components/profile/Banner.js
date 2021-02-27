import { Row, Col, Space, Tooltip, Image } from "antd";
import Link from "next/link";

import Favorites from "./Favorites";

const Banner = ({
  setModalVisible,
  openSettings,
  profile,
  favAuthors,
  followers,
  changeFavTab,
  favTab,
}) => {
  return (
    <div className="banner">
      <Row gutter={16}>
        <Col xl={18} lg={24}>
          <div className="profile-top">
            <Row gutter={32} align="middle">
              <Col xs={24} sm={8} md={9} lg={7}>
                <div data-icon="image" className="avatar">
                  <Image
                    src={profile?.image}
                    alt="aishwaraya"
                    width={230}
                    height={230}
                  />
                </div>
              </Col>
              <Col md={15} lg={17} sm={16} xs={24}>
                <div className="profile-details">
                  <div className="inner">
                    <div
                      className="icon custom-icon settings-icon"
                      onClick={openSettings}
                    >
                      <ion-icon name="settings"></ion-icon>
                    </div>
                    <h2>{profile?.username}</h2>
                    <Space size={30}>
                      <span className="follow-count">
                        {followers?.authors.length} followers
                      </span>
                      <span className="follow-count">
                        {favAuthors?.authors.length} followings
                      </span>
                    </Space>
                    <p className="bio">
                      {profile.biography && profile?.biography.length > 140
                        ? `${profile?.biography.slice(0, 140)}...`
                        : profile?.biography}
                    </p>
                    <div className="social">
                      <Space size={30}>
                        {profile.facebook && (
                          <Link href={profile?.facebook}>
                            <a target="_blank">
                              <div className="icon custom-icon fb-icon">
                                <ion-icon name="logo-facebook"></ion-icon>
                              </div>
                            </a>
                          </Link>
                        )}
                        {profile.twitter && (
                          <Link href={profile?.twitter}>
                            <a target="_blank">
                              <div className="icon custom-icon twitter-icon">
                                <ion-icon name="logo-twitter"></ion-icon>
                              </div>
                            </a>
                          </Link>
                        )}
                        {profile.instagram && (
                          <Link href={profile?.instagram}>
                            <a target="_blank">
                              <div className="icon custom-icon instagram-icon">
                                <ion-icon name="logo-instagram"></ion-icon>
                              </div>
                            </a>
                          </Link>
                        )}
                        {profile.deviantart && (
                          <Link href={profile?.deviantart}>
                            <a target="_blank">
                              <div className="icon custom-icon deviantart-icon">
                                <ion-icon name="logo-deviantart"></ion-icon>
                              </div>
                            </a>
                          </Link>
                        )}
                      </Space>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col flex="auto" xl={6} lg={24}>
          <div className="bio">
            <p className="more" onClick={() => setModalVisible(true)}>
              See all >>>
            </p>
            <div className="segmented-control">
              <input
                type="radio"
                name="radio2"
                value="3"
                id="tab-1"
                onClick={() => changeFavTab("favauthors")}
              />
              <label htmlFor="tab-1" className="segmented-control__1">
                <p>Recent Followings</p>
              </label>

              <input
                type="radio"
                name="radio2"
                value="4"
                id="tab-2"
                onClick={() => changeFavTab("followers")}
              />
              <label htmlFor="tab-2" className="segmented-control__2">
                <p>Recent Followers</p>
              </label>

              <div className="segmented-control__color"></div>
            </div>
            {favTab === "favauthors" && <Favorites favs={favAuthors} />}
            {favTab === "followers" && <Favorites favs={followers} />}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
