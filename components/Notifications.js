import React from "react";
import Link from "next/link";
import { Row, Col, Space } from "antd";

import { dummy } from "../utils/dummy";

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="notification" data-aos="flip-left">
        <Row align="middle" gutter={60} justify="space-between">
          <Col>
            <Link href="/story/1">
              <a className="notification-desc">
                <Space size={16}>
                  <div className="notification-avatar">
                    <img src={dummy.person} alt={dummy.name} />
                  </div>
                  <p>
                    {dummy.name} liked your story{" "}
                    <span className="entity">Lord of the Rings</span>
                  </p>
                </Space>
              </a>
            </Link>
          </Col>
          <Col>
            <div className="notifications-buttons">
              <Space size={20}>
                <span className="btn mark-read-btn">Mark as Read</span>
                <span className="btn delete-btn">Delete</span>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
      <div className="notification" data-aos="flip-left">
        <Row align="middle" gutter={60} justify="space-between">
          <Col>
            <Space size={16}>
              <div className="notification-avatar">
                <img src={dummy.person} alt={dummy.name} />
              </div>
              <p>
                {dummy.name} liked your story{" "}
                <span className="entity">Lord of the Rings</span>
              </p>
            </Space>
          </Col>
          <Col>
            <div className="notifications-buttons">
              <Space size={20}>
                <span className="btn mark-read-btn">Mark as Read</span>
                <span className="btn delete-btn">Delete</span>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
      <div className="notification" data-aos="flip-left">
        <Row align="middle" gutter={60} justify="space-between">
          <Col>
            <Space size={16}>
              <div className="notification-avatar">
                <img src={dummy.person} alt={dummy.name} />
              </div>
              <p>
                {dummy.name} liked your story{" "}
                <span className="entity">Lord of the Rings</span>
              </p>
            </Space>
          </Col>
          <Col>
            <div className="notifications-buttons">
              <Space size={20}>
                <span className="btn mark-read-btn">Mark as Read</span>
                <span className="btn delete-btn">Delete</span>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
      <div className="notification" data-aos="flip-left">
        <Row align="middle" gutter={60} justify="space-between">
          <Col>
            <Space size={16}>
              <div className="notification-avatar">
                <img src={dummy.person} alt={dummy.name} />
              </div>
              <p>
                {dummy.name} liked your story{" "}
                <span className="entity">Lord of the Rings</span>
              </p>
            </Space>
          </Col>
          <Col>
            <div className="notifications-buttons">
              <Space size={20}>
                <span className="btn mark-read-btn">Mark as Read</span>
                <span className="btn delete-btn">Delete</span>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
      <div className="notification notification-read" data-aos="flip-left">
        <Row align="middle" gutter={60} justify="space-between">
          <Col>
            <Space size={16}>
              <div className="notification-avatar">
                <img src={dummy.person} alt={dummy.name} />
              </div>
              <p>
                {dummy.name} liked your story{" "}
                <span className="entity">Lord of the Rings</span>
              </p>
            </Space>
          </Col>
          <Col>
            <div className="notifications-buttons">
              <Space size={20}>
                <span className="btn delete-btn">Delete</span>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Notifications;
