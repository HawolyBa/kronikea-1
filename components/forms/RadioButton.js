import { Col, Space, Form, Radio } from "antd";

const RadioButon = ({
  lg,
  sm,
  xs,
  md,
  name,
  label,
  num1,
  num2,
  label1,
  label2,
  form,
  setFunc,
  val,
}) => {
  return (
    <Col lg={lg} md={md} sm={sm} xs={xs}>
      <Form.Item name={name} label={label}>
        <fieldset id={name}>
          <div className="radio">
            <Radio.Group>
              <Space size={32}>
                <div className="radio__1">
                  <input
                    value={true}
                    id={`radio-${num1}`}
                    type="radio"
                    onChange={() => setFunc(true)}
                    checked={val ? true : false}
                  />
                  <label htmlFor={`radio-${num1}`}></label>
                  <p>{label1}</p>
                </div>
                <div className="radio__2">
                  <input
                    id={`radio-${num2}`}
                    type="radio"
                    value={false}
                    onChange={() => setFunc(false)}
                    checked={val ? false : true}
                  />
                  <label htmlFor={`radio-${num2}`}></label>
                  <p>{label2}</p>
                </div>
              </Space>
            </Radio.Group>
          </div>
        </fieldset>
      </Form.Item>
    </Col>
  );
};

export default RadioButon;
