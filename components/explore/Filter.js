import React from "react";
import { Col, Select, Radio, Form, Divider } from "antd";

import { CATEGORIES, LANGUAGES, STATUS } from "../../utils/constants";

const Filter = ({
  setCurrentCategory,
  currentCategory,
  setCurrentStatus,
  currentStatus,
  setCurrentLanguage,
  currentLanguage,
}) => {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  return (
    <aside className="filter">
      <h4>Filter</h4>
      <Form
        layout="vertical"
        initialValues={{
          language: "",
          category: "",
          status: "",
        }}
      >
        <div>
          <Form.Item label="Categories" name="category">
            <Select
              value={currentCategory}
              onChange={(val) => setCurrentCategory(val)}
            >
              <Select.Option value="">Choose a category</Select.Option>
              {CATEGORIES.map((c) => (
                <Select.Option key={c.value} value={c.value}>
                  {c.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <Divider />
        <div>
          <Form.Item label="Languages" name="language">
            <Select
              value={currentLanguage}
              onChange={(val) => setCurrentLanguage(val)}
            >
              <Select.Option value="">Choose a language</Select.Option>
              {LANGUAGES.map((l) => (
                <Select.Option key={l.value} value={l.value}>
                  {l.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <Divider />
        <div>
          <Form.Item label="Status" name="status">
            <Radio.Group
              onChange={(e) => setCurrentStatus(e.target.value)}
              value={currentStatus}
            >
              {STATUS.map((s) => (
                <Radio key={s.value} style={radioStyle} value={s.value}>
                  {s.name}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        </div>
      </Form>
    </aside>
  );
};

export default Filter;
