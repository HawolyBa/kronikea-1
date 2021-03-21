import { Row, Col, Form, Select, Input, Divider } from "antd";
import React from "react";

import CharacterCard, { CharacterGrid } from "../common/CharacterCard";

const { Option } = Select;

const Relatives = ({ character, characters, form }) => {
  const [relations, setRelations] = React.useState(
    character ? character.relatives : []
  );
  const [currentChar, setCurrentChar] = React.useState("");
  const [currentRel, setCurrentRel] = React.useState("");
  const [selectedCharacters, setSelectedCharacters] = React.useState([]);

  const [selectedArr, setSelectedArr] = React.useState(
    character ? character.relatives.map((c) => c.character_id) : []
  );
  const [showErrorRel, setShowErrorRel] = React.useState(false);
  const [showErrorChar, setShowErrorChar] = React.useState(false);

  const addRelation = () => {
    let newRelations = [...relations];
    if (currentChar && currentRel) {
      newRelations = [
        ...newRelations,
        { character_id: currentChar, relation: currentRel },
      ];
      setSelectedCharacters([
        ...selectedCharacters,
        {
          ...characters.find((c) => c.id === currentChar),
          relation: currentRel,
        },
      ]);
      setSelectedArr([...selectedArr, currentChar]);
      form.setFieldsValue({ relatives: newRelations });
      setRelations(newRelations);
      setCurrentChar("");
      setCurrentRel("");
      setShowErrorChar(false);
      setShowErrorRel(false);
    }

    if (!currentRel) {
      setShowErrorRel(true);
    }

    if (!currentChar) {
      setShowErrorChar(true);
    }
  };

  React.useEffect(() => {
    if (character && characters.length > 0) {
      setSelectedCharacters(
        character.relatives.map((c) => ({
          firstname: characters.find((char) => char.id === c.character_id)
            .firstname,
          lastname: characters.find((char) => char.id === c.character_id)
            .lastname,
          image: characters.find((char) => char.id === c.character_id).image,
          id: characters.find((char) => char.id === c.character_id).id,
          relation: c.relation,
        }))
      );
    }
  }, [character, characters]);

  const removeCharacter = (id) => {
    setSelectedCharacters(selectedCharacters.filter((c) => c.id !== id));
    setSelectedArr(selectedArr.filter((c) => c !== id));
    setRelations(relations.filter((c) => c.character_id !== id));
    form.setFieldsValue({
      relatives: relations.filter((c) => c.character_id !== id),
    });
  };

  return (
    <Form.Item name="relatives">
      <h3>Relationships</h3>
      <Row gutter={[24, 12]} align="center">
        <Col md={11} sm={24} xs={24}>
          <Form.Item label="Select a character">
            <Select value={currentChar} onChange={(val) => setCurrentChar(val)}>
              <Option value="none" disabled>
                Select a character
              </Option>
              {characters
                ?.filter((c) => !selectedArr.includes(c.id))
                .map((c) => (
                  <Option
                    key={c.id}
                    value={c.id}
                  >{`${c.firstname} ${c.lastname}`}</Option>
                ))}
            </Select>
            {showErrorChar && (
              <div className="ant-form-item-explain ant-form-item-explain-error">
                <div role="alert">A character is required</div>
              </div>
            )}
          </Form.Item>
        </Col>
        <Col md={11} sm={21} xs={21}>
          <Form.Item label="Type of relationship">
            <Input
              value={currentRel}
              onChange={(e) => setCurrentRel(e.target.value)}
            />
            {showErrorRel && (
              <div className="ant-form-item-explain ant-form-item-explain-error">
                <div role="alert">A type of relationship is required</div>
              </div>
            )}
          </Form.Item>
        </Col>
        <Col md={2} xs={3} sm={3}>
          <div className="select-add-input-iconbox" onClick={addRelation}>
            <span>+</span>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[16, 16]}>
        {selectedCharacters?.map((rel) => (
          <Col lg={4} md={8} sm={12} xs={24} key={rel.id}>
            <CharacterCard
              removeCharacter={removeCharacter}
              type="add"
              character={rel}
            />
          </Col>
        ))}
      </Row>
    </Form.Item>
  );
};

export default Relatives;
