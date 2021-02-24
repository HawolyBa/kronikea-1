import { Row, Col } from "antd";

const Tabs = ({ tabs, changeTab, currentTab }) => {
  return (
    <div className="profile-tabs" data-aos="zoom-in">
      <Row gutter={40} align="middle" justify="center">
        {tabs.map((tab) => (
          <Col key={tab}>
            <div
              className={`tab ${currentTab === tab ? "active" : ""}`}
              onClick={() => changeTab(tab)}
            >
              <span>{tab}</span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Tabs;
