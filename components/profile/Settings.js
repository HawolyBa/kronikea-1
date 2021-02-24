import { Form } from "antd";
import { dummy } from "../../utils/dummy";

const Settings = () => {
  return (
    <div className="settings">
      <Form>
        <Form.Item label="Username:" name="username" labelCol={{ span: 24 }}>
          <input type="text" class="form-input" value={dummy.name} />
        </Form.Item>
        <Form.Item
          label="Change your password:"
          name="password"
          labelCol={{ span: 24 }}
        >
          <input type="password" class="form-input" value={""} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Settings;
