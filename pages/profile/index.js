import { Tabs } from "antd";
import { Row, Col } from "antd";
import Card from "../../components/common/Card";
import CharacterCard from "../../components/common/CharacterCard";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const { TabPane } = Tabs;

const Profile = () => {
  return (
    <div className="profile">
      <Row gutter={32} align="middle">
        {/* <Col xl={5} lg={24}>
          <aside className="profile-details">
            <img
              src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/11/01/a8ff3d24-18d2-11eb-8f67-a484f6db61a1_image_hires_124711.jpg?itok=dYwgGht0&v=1604206039"
              alt="aishwaraya"
            />
          </aside>
        </Col>
        <Col xl={19} lg={24}>
          <Tabs>
            <TabPane tab="13 Stories" key="1">
              <Row gutter={[16, 16]}>
                <Col xxl={6} xl={8} lg={12}>
                  <Card />
                </Col>
                <Col xxl={6} xl={8} lg={12}>
                  <Card />
                </Col>
                <Col xxl={6} xl={8} lg={12}>
                  <Card />
                </Col>
                <Col xxl={6} xl={8} lg={12}>
                  <Card />
                </Col>
                <Col xxl={6} xl={8} lg={12}>
                  <Card />
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="14 Characters" key="2">
              <CharacterCard />
            </TabPane>
          </Tabs>
        </Col> */}
        <Col span={5}>
          <div className="avatar">
            <img
              src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/11/01/a8ff3d24-18d2-11eb-8f67-a484f6db61a1_image_hires_124711.jpg?itok=dYwgGht0&v=1604206039"
              alt="aishwaraya"
            />
          </div>
        </Col>
        <Col span={19}>
          <div className="profile-details">
            <div className="inner">
              <h2>Aishwarya Rai</h2>
              <p className="bio">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                eligendi eius cum omnis quo vel atque corporis at nemo porro ut
                aspernatur beatae exercitationem consectetur voluptatum quidem
                facilis nostrum nulla.
              </p>
              <Row justify="space-between" align="middle">
                <Col>
                  <div className="counter">
                    <span>13 stories</span>
                    <span>14 characters</span>
                    <span>26 locations</span>
                  </div>
                </Col>
                <Col>
                  <div className="social">
                    <FacebookIcon className="icons" />
                    <TwitterIcon className="icons" />
                    <InstagramIcon className="icons" />
                  </div>
                </Col>
              </Row>
              <div className="dotted-border dotted-border-top-left"></div>
              <div className="dotted-border dotted-border-bottom-left"></div>
              <div className="dotted-border dotted-border-top-right"></div>
              <div className="dotted-border dotted-border-bottom-right"></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
