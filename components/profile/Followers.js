import { Row, Col } from "antd";

import UserCard from "../common/UserCard";

const Followers = () => {
  return (
    <div className="followers">
      <Row gutter={[20, 30]} align="center">
        <Col lg={4} md={6} sm={8} xs={12}>
          <UserCard />
        </Col>
        <Col lg={4} md={6} sm={8} xs={12}>
          <UserCard />
        </Col>
        <Col lg={4} md={6} sm={8} xs={12}>
          <UserCard />
        </Col>
        <Col lg={4} md={6} sm={8} xs={12}>
          <UserCard />
        </Col>
        <Col lg={4} md={6} sm={8} xs={12}>
          <UserCard />
        </Col>
        <Col lg={4} md={6} sm={8} xs={12}>
          <UserCard />
        </Col>
        <Col lg={4} md={6} sm={8} xs={12}>
          <UserCard />
        </Col>
        <Col lg={4} md={6} sm={8} xs={12}>
          <UserCard />
        </Col>
      </Row>
    </div>
  );
};

export default Followers;
