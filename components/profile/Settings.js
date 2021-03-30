import { Form, Tabs, Input } from "antd";
import { dummy } from "../../utils/dummy";
import {
  LockOutlined,
  UserOutlined,
  LinkOutlined,
  FileImageOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const Settings = ({ user }) => {
  return (
    <div className="settings">
      <Form layout="vertical" initialValues={{ username: user.username }}>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <UserOutlined />
                Username
              </span>
            }
            key="1"
          >
            <Form.Item name="username" label="Change your username">
              <Input />
            </Form.Item>
          </TabPane>
          <TabPane
            tab={
              <span>
                <LockOutlined />
                Password
              </span>
            }
            key="2"
          >
            <Form.Item label="Actual password" name="password">
              <Input.Password />
            </Form.Item>
            <Form.Item label="New password" name="confirm-password">
              <Input.Password />
            </Form.Item>
          </TabPane>
          <TabPane
            tab={
              <span>
                <LinkOutlined />
                Links
              </span>
            }
            key="3"
          ></TabPane>
          <TabPane
            tab={
              <span>
                <FileImageOutlined />
                Avatar
              </span>
            }
            key="4"
          ></TabPane>
        </Tabs>
      </Form>
    </div>
  );
};

export default Settings;
