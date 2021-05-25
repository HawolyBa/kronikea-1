import React from "react";
import Link from "next/link";
import { Select, Space, Divider, Row, Col } from "antd";
import { CATEGORIES } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="inner-footer">
        <Row gutter={42}>
          <Col xl={6} lg={8} md={12} sm={24} xs={24}>
            <section className="links">
              <h4>Links</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <span className="dot">&bull;</span>
                </li>
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                  <span className="dot">&bull;</span>
                </li>
                <li>
                  <Link href="/explore">
                    <a>Explore</a>
                  </Link>
                </li>
              </ul>
              {/* <Divider /> */}
            </section>
          </Col>

          <Col xl={6} lg={9} md={12} sm={24} xs={24}>
            <section className="about">
              <h4>About Kronikea</h4>
              <ul>
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                  <span className="dot">&bull;</span>
                </li>
                <li>
                  <Link href="/rules">
                    <a>Rules</a>
                  </Link>
                  <span className="dot">&bull;</span>
                </li>
                <li>
                  <Link href="/feedback">
                    <a>Feedback</a>
                  </Link>
                  <span className="dot">&bull;</span>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
              {/* <Divider /> */}
            </section>
          </Col>
          <Col xl={9} lg={7} md={12} sm={24} xs={24}>
            <section className="categories">
              <h4>Categories</h4>
              <Select value="none">
                <Select.Option value="none">Choose a category</Select.Option>
                {CATEGORIES.map((c) => (
                  <Select.Option value={c.calue}>{c.name}</Select.Option>
                ))}
              </Select>
              {/* <Divider /> */}
            </section>
          </Col>
          <Col xl={3} lg={8} md={12} sm={24} xs={24}>
            <section className="socials">
              <h4>Social Links</h4>
              <Space align="center" size={16}>
                <a target="_blank">
                  <div className="icon custom-icon">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </div>
                </a>
                <a target="_blank">
                  <div className="icon custom-icon">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </div>
                </a>
                <a target="_blank">
                  <div className="icon custom-icon">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </div>
                </a>
              </Space>
              {/* <Divider /> */}
            </section>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
