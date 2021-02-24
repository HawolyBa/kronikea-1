import { Col } from "antd";

const InputGroup = ({ md, type, name, placeholder, value }) => {
  return (
    <Col md={md}>
      <div className="input-group">
        <label htmlFor={name}>{name}</label>
        <input
          className="form-input"
          type={type}
          id={name}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </Col>
  );
};

export default InputGroup;
