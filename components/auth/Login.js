import React from "react";
import { Form, Input, Col, Row } from "antd";

const Login = ({ handleClick, auth }) => {
  const [form] = Form.useForm();

  return (
    <div className="inner-auth">
      <h2>Welcome back to Kronikea</h2>

      <Form
        onFinish={() =>
          auth.signin(
            form.getFieldValue("email"),
            form.getFieldValue("password")
          )
        }
        layout="vertical"
        form={form}
        initialValues={{ password: "", email: "" }}
      >
        <Row>
          <Col span={24}>
            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "This is not valid E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            {auth.errors.email && (
              <div className="ant-form-item-explain ant-form-item-explain-error">
                <div role="alert">{auth.errors.email}</div>
              </div>
            )}
          </Col>
          <Col span={24}>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "A password is required",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            {auth.errors.password && (
              <div className="ant-form-item-explain ant-form-item-explain-error">
                <div role="alert">{auth.errors.password}</div>
              </div>
            )}
          </Col>
        </Row>
        <button type="submit" className="login-btn custom-btn">
          <span>Login</span>
        </button>
      </Form>
      <p onClick={handleClick}>Don't have an account yet ? Register here</p>
    </div>
  );
};

export default Login;
