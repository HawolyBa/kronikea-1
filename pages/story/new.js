import React from "react";
import { Row, Col, Space, Divider } from "antd";

import {
  CATEGORIES,
  COPYRIGHTS,
  LANGUAGES,
  STATUS,
} from "../../utils/constants";
import InputGroup from "../../components/common/Input";
import SelectGroup from "../../components/common/Select";
import Tags from "../../components/forms/Tags";
import UploadImage from "../../components/forms/UploadImage";

const newStory = () => {
  return (
    <div className="new-story custom-form">
      <div className="inner">
        <h2 className="side-heading">Add a new story</h2>
        <form className="form-group">
          <Row gutter={[24, 24]}>
            <InputGroup
              sm={24}
              md={18}
              type="text"
              name="title"
              placeholder="Enter a title"
            />
            <SelectGroup md={6} name="categories" options={CATEGORIES} />
          </Row>
          <Row gutter={[24, 24]}>
            <SelectGroup md={8} name="language" options={LANGUAGES} />
            <SelectGroup md={8} name="status" options={STATUS} />
            <SelectGroup md={8} name="copyright" options={COPYRIGHTS} />
          </Row>
          <textarea
            name="summary"
            id="summary"
            className="form-input"
            placeholder="Summarize your story here"
          ></textarea>
          <Row gutter={[24, 24]}>
            <Col sm={12} md={4}>
              <div className="input-group">
                <label className="title-label" htmlFor="public">
                  Mature content
                </label>

                <div className="radio">
                  <Space size={32}>
                    <div className="radio__1">
                      <input
                        id="radio-1"
                        type="radio"
                        name="radio"
                        value={true}
                      />
                      <label htmlFor="radio-1"></label>
                      <p>Yes</p>
                    </div>

                    <div className="radio__2">
                      <input
                        id="radio-2"
                        type="radio"
                        name="radio"
                        value={false}
                        checked
                      />
                      <label htmlFor="radio-2"></label>
                      <p>No</p>
                    </div>
                  </Space>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="input-group">
                <label className="title-label" htmlFor="public">
                  Visibilty
                </label>
                <div className="radio">
                  <Space size={32}>
                    <div className="radio__1">
                      <input
                        id="radio-3"
                        type="radio"
                        name="radio"
                        value={true}
                      />
                      <label htmlFor="radio-3"></label>
                      <p>Public</p>
                    </div>

                    <div className="radio__2">
                      <input
                        id="radio-4"
                        type="radio"
                        name="radio"
                        value={false}
                        checked
                      />
                      <label htmlFor="radio-4"></label>
                      <p>Private</p>
                    </div>
                  </Space>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className="input-group">
                <label htmlFor="maincharacters">Main Characters</label>
                <Row>
                  <Col span={22}>
                    <select className="form-input select-add-input">
                      <option value="Caroline">Caroline</option>
                    </select>
                  </Col>
                  <Col span={2}>
                    <div className="form-input select-add-input-iconbox">
                      <span>+</span>
                    </div>
                  </Col>
                  <small>You can add up to 5 main characters</small>
                </Row>
              </div>
            </Col>
            <Col md={8}>
              <label className="title-label" htmlFor="tags">
                Tags
              </label>
              <Tags />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col md={8}>
              <div className="input-group">
                <label htmlFor="cover">Upload a cover</label>
                <UploadImage />
              </div>
            </Col>
          </Row>
          <Divider />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default newStory;
