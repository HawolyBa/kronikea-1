import { Row, Col } from "antd";

import Card from "../common/Card";
import UserCard from "../common/UserCard";
import CharacterCard from "../common/CharacterCard";
import LocationCard from "../common/LocationCard";
import WithLink from "../hoc/WithLink";

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

const LocationGrid = ({ locations, gutter, lg, md, sm, xs, type }) => {
  return (
    <Row gutter={gutter}>
      {locations.map((loc) => (
        <Col xs={xs} sm={sm} md={md} lg={lg} key={loc.id}>
          <LocationCard type={type} location={loc} />
        </Col>
      ))}
    </Row>
  );
};

const CharacterGrid = ({
  gutter,
  xxl,
  xl,
  lg,
  md,
  sm,
  xs,
  characters,
  type,
}) => {
  return (
    <Row gutter={gutter}>
      {characters?.map((c) => (
        <Col key={c.id} xxl={xxl} xl={xl} lg={lg} md={md} sm={sm} xs={xs}>
          {type === "show" ? (
            <WithLink link={`/character/${c.id}`}>
              <CharacterCard character={c} type={type} />
            </WithLink>
          ) : (
            <CharacterCard character={c} type={type} />
          )}
        </Col>
      ))}
    </Row>
  );
};

export { StoryGrid, CharacterGrid, UserGrid, LocationGrid };
