import { Row, Col } from "antd";

import LocationCard from "../common/LocationCard";

const Locations = () => {
  return (
    <div className="profile-characters">
      <Row gutter={[16, 16]}>
        <Col xxl={4} xl={6} lg={8}>
          <LocationCard />
        </Col>
        <Col xxl={4} xl={6} lg={8}>
          <LocationCard />
        </Col>
        <Col xxl={4} xl={6} lg={8}>
          <LocationCard />
        </Col>
        <Col xxl={4} xl={6} lg={8}>
          <LocationCard />
        </Col>
        <Col xxl={4} xl={6} lg={8}>
          <LocationCard />
        </Col>
        <Col xxl={4} xl={6} lg={8}>
          <LocationCard />
        </Col>
      </Row>
    </div>
  );
};

export default Locations;
