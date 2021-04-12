import { Row, Col, Divider } from "antd";
import React from "react";

const PopularCategories = () => {
  return (
    <section className="popular-categories">
      <h3 className="side-heading">Popular Categories</h3>
      <Row gutter={[32, 16]}>
        <Col span={6}>
          <div className="category-pill">
            <span>Drama</span>
          </div>
        </Col>
        <Col span={6}>
          <div className="category-pill">
            <span>Drama</span>
          </div>
        </Col>
        <Col span={6}>
          <div className="category-pill">
            <span>Drama</span>
          </div>
        </Col>
        <Col span={6}>
          <div className="category-pill">
            <span>Drama</span>
          </div>
        </Col>
      </Row>
      <Divider />
    </section>
  );
};

export default PopularCategories;
