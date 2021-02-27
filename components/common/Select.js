import { Col, Popover, Select, Form } from "antd";

import { capitalizeFirstLetter } from "../../utils/helpers";

const { Option } = Select;

const SelectGroup = ({
  xs,
  lg,
  sm,
  md,
  name,
  options,
  info,
  value,
  onChangeFunc,
  storyInfo,
  type,
}) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg}>
      <Form.Item
        required
        label={
          info ? (
            <>
              {capitalizeFirstLetter(name)}
              <Popover title={info} trigger="click">
                <ion-icon name="information-circle"></ion-icon>
              </Popover>
            </>
          ) : (
            capitalizeFirstLetter(name)
          )
        }
        colon={false}
      >
        <div className="input-group">
          <label htmlFor="genre"></label>
          {type === "multiple" ? (
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              value={value}
              onChange={(val) => onChangeFunc({ ...storyInfo, [name]: val })}
            >
              {options
                ?.sort((a, b) => {
                  const keyA = a.name,
                    keyB = b.name;
                  // Compare the 2 dates
                  if (keyA < keyB) return -1;
                  if (keyA > keyB) return 1;
                  return 0;
                })
                .map((option) => (
                  <Option
                    style={{ textTransform: "capitalize" }}
                    key={option.value}
                    value={option.value}
                  >
                    {option.name}
                  </Option>
                ))}
            </Select>
          ) : (
            <Select
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              value={value}
              onChange={(val) => onChangeFunc({ ...storyInfo, [name]: val })}
            >
              {options
                ?.sort((a, b) => {
                  const keyA = a.name,
                    keyB = b.name;
                  // Compare the 2 dates
                  if (keyA < keyB) return -1;
                  if (keyA > keyB) return 1;
                  return 0;
                })
                .map((option) => (
                  <Option
                    style={{ textTransform: "capitalize" }}
                    key={option.value}
                    value={option.value}
                  >
                    {option.name}
                  </Option>
                ))}
            </Select>
          )}
        </div>
      </Form.Item>
    </Col>
  );
};

export default SelectGroup;
