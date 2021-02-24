import { Row, Col } from "antd";

import Card from "../common/Card";

const Stories = () => {
  return (
    <div className="profile-stories">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8} xl={6}>
          <Card />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6}>
          <Card />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6}>
          <Card />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6}>
          <Card />
        </Col>
        <Col xs={24} sm={12} lg={8} xl={6}>
          <Card />
        </Col>
      </Row>
    </div>
  );
};

export default Stories;
