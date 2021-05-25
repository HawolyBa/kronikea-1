import React from "react";
import { Row, Col, Form, Input, Button } from "antd";

const Register = ({ handleClick, auth }) => {
  const [form] = Form.useForm();

  return (
    <div className="inner-auth">
      <h2>Welcome to Kronikea</h2>
      <Form
        onFinish={({ password, email, username }) =>
          auth.signup(email, password, username)
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
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: "A username is required",
                },
                {
                  max: 15,
                  type: "string",
                  message: "Your username cannot exceed 15 characters",
                },
                {
                  min: 4,
                  type: "string",
                  message:
                    "Your username needs to be at least 4 characters long",
                },
              ]}
            >
              <Input />
            </Form.Item>
            {auth.errors.username && (
              <div className="ant-form-item-explain ant-form-item-explain-error">
                <div role="alert">{auth.errors.username}</div>
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
                { min: 8, message: "Password must be at least 8 characters." },
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
          <Col span={24}>
            <Form.Item
              name="confirmpassword"
              label="Confirm Password"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            {auth.errors.confirmPassword && (
              <div className="ant-form-item-explain ant-form-item-explain-error">
                <div role="alert">{auth.errors.confirmPassword}</div>
              </div>
            )}
          </Col>
        </Row>
        <button type="submit" className="login-btn custom-btn">
          <span>Register</span>
        </button>
      </Form>
      <Button onClick={auth.signInWithGoogle}>Or login with google</Button>
      <p onClick={handleClick}>Already have an account ? Login here</p>
    </div>
  );
};

export default Register;
