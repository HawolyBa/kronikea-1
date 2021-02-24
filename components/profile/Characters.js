import { Row, Col } from "antd";

import CharacterCard from "../common/CharacterCard";

const Characters = () => {
  return (
    <div className="profile-characters">
      <Row gutter={[16, 16]}>
        <Col xxl={4} xl={6} lg={8}>
          <CharacterCard />
        </Col>
        <Col xxl={4} xl={6} lg={8}>
          <CharacterCard />
        </Col>
        <Col xxl={4} xl={6} lg={8}>
          <CharacterCard />
        </Col>
        <Col xxl={4} xl={6} lg={8}>
          <CharacterCard />
        </Col>
        <Col xxl={4} xl={6} lg={8}>
          <CharacterCard />
        </Col>
        <Col xxl={4} xl={6} lg={8}>
          <CharacterCard />
        </Col>
      </Row>
    </div>
  );
};

export default Characters;
