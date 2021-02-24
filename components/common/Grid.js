import { Row, Col } from "antd";

import Card from "../common/Card";
import UserCard from "../common/UserCard";
import CharacterCard from "../common/CharacterCard";

const StoryGrid = () => {
  return (
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
  );
};

const UserGrid = () => {
  return (
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
  );
};

const CharacterGrid = () => {
  return (
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
  );
};

export { StoryGrid, CharacterGrid, UserGrid };
