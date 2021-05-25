import React from "react";
import { Form, Input, Row, Col } from "antd";

const Username = ({ auth }) => {
  const [form] = Form.useForm();

  const submit = (val) => {
    auth.changeUsername(val.username);
  };

  return (
    <div className="inner-auth">
      <h2>Choose a username</h2>
      <Form form={form} layout="vertical" onFinish={submit}>
        <Row>
          <Col span={24}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "This field cannot be blank!",
                },
                {
                  min: 4,
                  message:
                    "Your username needs to be at least 4 characters long",
                },
                {
                  max: 15,
                  message: "Your username cannot exceed 15 characters",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <button type="submit" className="login-btn custom-btn username-btn">
              <span>Submit</span>
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Username;
