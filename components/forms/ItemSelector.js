import React from "react";
import { Form, Col, Row, Select, Divider } from "antd";

const { Option } = Select;

const ItemSelector = ({
  item,
  subject,
  form,
  arrInForm,
  label,
  type,
  lg1,
  subjectType,
}) => {
  const [currentChar, setCurrentChar] = React.useState("");
  const [currentLoc, setCurrentLoc] = React.useState("");
  const [selectedSubjects, setSelectedSubjects] = React.useState(
    item ? subject.filter((c) => item.includes(c.id)) : []
  );

  const addCharacter = (current, setCurrent) => {
    if (type === "story" && form.getFieldValue(arrInForm)?.length === 5) {
      return;
    }

    if (current && form.getFieldValue(arrInForm)?.indexOf(current) === -1) {
      setSelectedSubjects([
        ...selectedSubjects,
        subject.find((c) => c.id === current),
      ]);
      form.setFieldsValue({
        [arrInForm]: [...form.getFieldValue(arrInForm), current],
      });
    }

    setCurrent("");
    form.setFieldsValue({ [current]: "" });
  };

  const removeCharacter = (id) => {
    form.setFieldsValue({
      [arrInForm]: form.getFieldValue(arrInForm).filter((c) => c !== id),
    });
    setSelectedSubjects(selectedSubjects.filter((c) => c.id !== id));
  };

  return (
    <Form.Item name={arrInForm} label={label}>
      <Row gutter={[24, 24]}>
        <Col lg={lg1} md={24} sm={24} xs={24}>
          <Row gutter={16}>
            <Col span={22}>
              <Form.Item
                name={
                  subjectType === "characters" ? "currentChar" : "currentLoc"
                }
              >
                <Select
                  disabled={
                    form.getFieldValue(arrInForm)?.length >= 5 &&
                    type === "story"
                      ? true
                      : false
                  }
                  onChange={(val) =>
                    subjectType === "characters"
                      ? setCurrentChar(val)
                      : setCurrentLoc(val)
                  }
                >
                  <Option value="none" disabled>
                    Choose
                  </Option>
                  {subject
                    .filter(
                      (c) => form.getFieldValue(arrInForm)?.indexOf(c.id) === -1
                    )
                    ?.sort((a, b) => {
                      const keyA = a.firstname,
                        keyB = b.firstname;
                      // Compare the 2 dates
                      if (keyA < keyB) return -1;
                      if (keyA > keyB) return 1;
                      return 0;
                    })
                    .map((char) => (
                      <Option key={char.id} value={char.id}>
                        {subjectType === "characters"
                          ? `${char.firstname} ${char.lastname}`
                          : char.name}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={2}>
              <div
                className="select-add-input-iconbox"
                onClick={() =>
                  subjectType === "characters"
                    ? addCharacter(currentChar, setCurrentChar)
                    : addCharacter(currentLoc, setCurrentLoc)
                }
              >
                <span>+</span>
              </div>
            </Col>
            {type === "story" && (
              <small>You can add up to 5 main characters</small>
            )}
          </Row>
        </Col>
        {subject.length > 0 && (
          <Col lg={lg1} md={24} sm={24} xs={24}>
            <Row gutter={16}>
              {subject
                .filter((c) => form.getFieldValue(arrInForm).includes(c.id))
                .map((char) => (
                  <Col md={12} sm={24} key={char.id}>
                    <div key={char.id} className="main-selected">
                      <div className="main-avatar">
                        <img
                          src={char.image}
                          alt={
                            subjectType === "characters"
                              ? char.firstname
                              : char.name
                          }
                        />
                      </div>
                      <p>
                        {subjectType === "characters"
                          ? `${char.firstname} ${char.lastname}`
                          : char.name}
                      </p>
                      <ion-icon
                        onClick={() => removeCharacter(char.id)}
                        name="close-circle"
                      ></ion-icon>
                    </div>
                    <Divider style={{ margin: "15px 0" }} />
                  </Col>
                ))}
            </Row>
          </Col>
        )}
      </Row>
    </Form.Item>
  );
};

export default ItemSelector;
