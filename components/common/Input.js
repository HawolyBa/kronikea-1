import { Col, Form } from "antd";
import { capitalizeFirstLetter } from "../../utils/helpers";

const InputGroup = ({
  lg,
  xs,
  sm,
  md,
  type,
  name,
  placeholder,
  value,
  onChangeFunc,
  storyInfo,
  required,
  title,
}) => {
  return (
    <Col lg={lg} xs={xs} sm={sm} md={md}>
      <Form.Item
        label={title ? title : capitalizeFirstLetter(name)}
        required={required}
      >
        <div className="input-group">
          <input
            className="form-input"
            type={type}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) =>
              onChangeFunc({ ...storyInfo, [name]: e.target.value })
            }
          />
        </div>
      </Form.Item>
    </Col>
  );
};

export default InputGroup;
