import React from "react";
import { Row, Col, Divider } from "antd";
import Relatives from "../../components/forms/Relatives";
import UploadImage from "../../components/forms/UploadImage";

const newCharacter = () => {
  return (
    <div className="new-character custom-form">
      <div className="inner">
        <h2 className="side-heading">Add a new character</h2>
        <form className="form-group">
          <Row align="bottom" gutter={[24, 24]}>
            <Col flex="auto" md={4}>
              <div className="input-group">
                <label htmlFor="cover">Upload a cover</label>
                <UploadImage />
              </div>
            </Col>
            <Col flex="auto" md={8}>
              <div className="input-group">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" className="form-input" />
              </div>
            </Col>
            <Col flex="auto" md={8}>
              <div className="input-group">
                <label htmlFor="lastname">Lastname</label>
                <input id="lastname" type="text" className="form-input" />
              </div>
            </Col>
            <Col flex="auto" md={4}>
              <div className="input-group">
                <label htmlFor="age">Age</label>
                <input id="age" type="number" className="form-input" />
              </div>
            </Col>
          </Row>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-input"
            ></textarea>
          </div>
          <Relatives />
          <Divider />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default newCharacter;
