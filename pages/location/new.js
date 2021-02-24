import React from "react";
import { Row, Col, Divider } from "antd";

import UploadImage from "../../components/forms/UploadImage";
import InputGroup from "../../components/common/Input";
import SelectGroup from "../../components/common/Select";

const newLocation = () => {
  return (
    <div className="new-location custom-form">
      <div className="inner">
        <h2 className="side-heading">Add a new location</h2>
        <form className="form-group">
          <Row align="bottom" gutter={[24, 24]}>
            <Col flex="auto" md={6}>
              <div className="input-group">
                <label htmlFor="cover">Upload a cover</label>
                <UploadImage />
              </div>
            </Col>
            <InputGroup
              placeholder="Name of your location"
              name="name"
              type="text"
              md={12}
            />
            <SelectGroup
              name="story"
              md={6}
              options={[
                { value: "Lord of The Rings", name: "Lord of The Rings" },
              ]}
            />
          </Row>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-input"
              name="description"
              id="description"
            ></textarea>
          </div>
          <Divider />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default newLocation;
