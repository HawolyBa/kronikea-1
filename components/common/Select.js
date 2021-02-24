import { Col, Tooltip } from "antd";

const SelectGroup = ({ md, name, options }) => {
  return (
    <Col md={md}>
      <div className="input-group">
        <label htmlFor="genre">
          {name}{" "}
          <Tooltip title={"tootlti"}>
            <ion-icon name="information-circle"></ion-icon>
          </Tooltip>
        </label>
        <select className="form-input">
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
              <option
                style={{ textTransform: "capitalize" }}
                key={option.value}
                value={option.value}
              >
                {option.name}
              </option>
            ))}
        </select>
      </div>
    </Col>
  );
};

export default SelectGroup;
