import { Row, Col, Space, Tooltip, Image } from "antd";

const Banner = ({ setModalVisible, openSettings }) => {
  return (
    <div className="banner">
      <Row gutter={16}>
        <Col xl={18} lg={24}>
          <div className="profile-top">
            <Row gutter={32} align="middle">
              <Col xs={24} sm={8} md={9} lg={7}>
                <div data-icon="image" className="avatar" data-aos="fade-in">
                  <Image
                    src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg"
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
                    <h2>Username</h2>
                    <Space size={30}>
                      <span className="follow-count">30 followers</span>
                      <span className="follow-count">350 followings</span>
                    </Space>
                    <p className="bio">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      A, eligendi eius cum omnis quo vel atque corporis at nemo
                      porro ut aspernatur beatae
                    </p>
                    <div className="social">
                      <Space size={30}>
                        <div className="icon custom-icon fb-icon">
                          <ion-icon name="logo-facebook"></ion-icon>
                        </div>
                        <div className="icon custom-icon twitter-icon">
                          <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                        <div className="icon custom-icon instagram-icon">
                          <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                      </Space>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={6} lg={24}>
          <div className="bio">
            <p className="more" onClick={() => setModalVisible(true)}>
              See all >>>
            </p>
            <div className="segmented-control">
              <input type="radio" name="radio2" value="3" id="tab-1" />
              <label htmlFor="tab-1" className="segmented-control__1">
                <p>Favorite Authors</p>
              </label>

              <input type="radio" name="radio2" value="4" id="tab-2" />
              <label htmlFor="tab-2" className="segmented-control__2">
                <p>Followed By</p>
              </label>

              <div className="segmented-control__color"></div>
            </div>
            <Row gutter={[5, 5]} justify="center">
              <Col span={6}>
                <Tooltip title="Aishwaray Rai" color={"#6d5dfc"}>
                  <div className="img-container-border img-container">
                    <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                  </div>
                </Tooltip>
              </Col>
              <Col span={6}>
                <div className="img-container-border img-container">
                  <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                </div>
              </Col>
              <Col span={6}>
                <div className="img-container-border img-container">
                  <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                </div>
              </Col>
              <Col span={6}>
                <div className="img-container-border img-container">
                  <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                </div>
              </Col>
              <Col span={6}>
                <div className="img-container-border img-container">
                  <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                </div>
              </Col>
              <Col span={6}>
                <div className="img-container-border img-container">
                  <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                </div>
              </Col>
              <Col span={6}>
                <div className="img-container-border img-container">
                  <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                </div>
              </Col>
              <Col span={6}>
                <div className="img-container-border img-container">
                  <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                </div>
              </Col>
              <Col span={6}>
                <div className="img-container-border img-container">
                  <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                </div>
              </Col>
              <Col span={6}>
                <div className="img-container-border img-container">
                  <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                </div>
              </Col>
              <Col span={6}>
                <div className="img-container-border img-container">
                  <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                </div>
              </Col>
              <Col span={6}>
                <div className="img-container-border img-container">
                  <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
