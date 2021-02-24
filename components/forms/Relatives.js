import { Row, Col } from "antd";

import { dummy } from "../../utils/dummy";
import CharacterCard, { CharacterGrid } from "../common/CharacterCard";

const Relatives = () => {
  const [relations, setRelations] = React.useState([]);
  const [charaValue, setCharaValue] = React.useState("");
  const [relValue, setRelValue] = React.useState("");

  const addRelation = () => {
    let newRelations = [...relations];
    if (charaValue && relValue) {
      newRelations = [
        ...newRelations,
        { character: charaValue, relation: relValue },
      ];
    }
    setRelations(newRelations);
    setCharaValue("");
    setRelValue("");
  };

  const onChangeRelation = (e) => setRelValue(e.target.value);
  const onChangeChara = (e) => setCharaValue(e.target.value);

  return (
    <div className="relatives">
      <label htmlFor="relatives">Relationships</label>
      <Row align="bottom" gutter={[24, 24]}>
        <Col flex="auto" md={11}>
          <select
            value={charaValue}
            className="form-input"
            onChange={onChangeChara}
          >
            <option value="" disabled selected>
              Select a character
            </option>
            <option value="Caroline">Caroline</option>
            <option value="Lola">Lola</option>
            <option value="Gogo">Gogo</option>
            <option value="Froli">Froli</option>
            <option value="Papi">Papi</option>
          </select>
        </Col>
        <Col flex="auto" md={11}>
          <input
            value={relValue}
            onChange={onChangeRelation}
            id="relation"
            type="text"
            className="form-input"
            placeholder="Type of relationship"
          />
        </Col>
        <Col flex="auto" md={2}>
          <div className="add-btn" onClick={addRelation}>
            Add
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {relations?.map((rel) => (
          <Col md={4} key={rel.character}>
            <CharacterCard />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Relatives;
