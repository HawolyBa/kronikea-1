import { Row, Col } from "antd";

import CharacterCard from "../common/CharacterCard";

const Characters = ({ characters, type }) => {
  return (
    <div className="profile-characters">
      <Row wrap={true} gutter={[16, 16]}>
        {characters?.map((chara) => (
          <Col key={chara.id} xxl={4} xl={6} lg={8}>
            <CharacterCard type={type} character={chara} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Characters;
