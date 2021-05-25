import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Modal,
  Space,
  Tooltip,
  Button,
  Popconfirm,
  Badge,
  Row,
  Col,
} from "antd";
import {
  UserOutlined,
  EnvironmentOutlined,
  BookOutlined,
} from "@ant-design/icons";

import Search from "../forms/Search";
import { useAuth } from "../../hooks/userHooks";
import { dummy } from "../../utils/dummy";

const Navbar = ({
  toggleNotifications,
  notificationsCount,
  setOpenLanguage,
  openMenu,
}) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const auth = useAuth();
  const router = useRouter();

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const logout = () => {
    auth.signout();
  };

  return (
    <>
      <section className="navbar-header">
        <header id="main-navbar">
          <div className="inner-header">
            <h1 id="title">
              <Link href="/">
                <a>Kronikea</a>
              </Link>
            </h1>
            <Search router={router} />
            <div className="header-icons">
              <Space align="center">
                {/* <div className="custom-btn custom-btn-primary">
                <p>Login / Sign Up</p>
              </div> */}
                <div className="icon">
                  <Tooltip title="Home" placement="bottom">
                    <div className="header-icon icon__home">
                      <Link href="/">
                        <a>
                          <ion-icon name="home"></ion-icon>
                        </a>
                      </Link>
                    </div>
                  </Tooltip>
                  <Tooltip title="Explore" placement="bottom">
                    <div className="header-icon icon__home">
                      <Link href="/explore">
                        <a>
                          <ion-icon name="eye"></ion-icon>
                        </a>
                      </Link>
                    </div>
                  </Tooltip>
                  {!auth.isLoading && auth.user && (
                    <Tooltip
                      title={`Profile - ${auth.user && auth.user.username}`}
                      placement="bottom"
                    >
                      <div className="header-icon icon__account">
                        <Link href="/profile">
                          <a>
                            <img
                              src={
                                auth.user.image ? auth.user.image : dummy.avatar
                              }
                            />
                          </a>
                        </Link>
                      </div>
                    </Tooltip>
                  )}
                  {!auth.isLoading && auth.user && (
                    <>
                      <Tooltip title="Add a new item" placement="bottom">
                        <div
                          onClick={() => setCtaVisible(true)}
                          className="header-icon icon__settings"
                        >
                          <ion-icon name="add"></ion-icon>
                        </div>
                      </Tooltip>
                      <Tooltip title="Notifications" placement="bottom">
                        <Badge size="default" count={notificationsCount}>
                          <div
                            className="header-icon icon__notif icon__settings"
                            onClick={toggleNotifications}
                          >
                            <ion-icon name="notifications"></ion-icon>
                          </div>
                        </Badge>
                      </Tooltip>
                    </>
                  )}
                  <Tooltip title="Change Language" placement="bottom">
                    <div
                      onClick={() => setOpenLanguage(true)}
                      className="header-icon icon__settings"
                    >
                      <ion-icon name="globe-outline"></ion-icon>
                    </div>
                  </Tooltip>
                  <Tooltip title="Night/Day mode" placement="bottom">
                    <div className="header-icon icon__settings">
                      <ion-icon name="contrast"></ion-icon>
                    </div>
                  </Tooltip>
                  {!auth.isLoading && auth.user ? (
                    <Popconfirm
                      title="Do you really want to log out ?"
                      onConfirm={logout}
                    >
                      <Tooltip title="Log out" placement="bottom">
                        <div className="header-icon icon__settings">
                          <ion-icon name="log-out"></ion-icon>
                        </div>
                      </Tooltip>
                    </Popconfirm>
                  ) : (
                    <Tooltip title="Log out" placement="bottom">
                      <Link href="/auth">
                        <a>
                          <div className="header-icon icon__settings">
                            <ion-icon name="log-in"></ion-icon>
                          </div>
                        </a>
                      </Link>
                    </Tooltip>
                  )}
                  <div
                    className="mobile-icon icon__home"
                    onClick={() => setSearchVisible(true)}
                  >
                    <ion-icon name="search"></ion-icon>
                  </div>

                  <div className="menu-btn" onClick={openMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </div>
              </Space>
            </div>
          </div>
        </header>
        {/* <header className="categories">
          <ul>
            <li>Drama</li>
            <li>Comedy</li>
            <li>Horror</li>
            <li>Romance</li>
            <li>Sci-fi</li>
            <li>Fantasy</li>
            <li>Humor</li>
            <li>Action</li>
            <li>Thriller</li>
            <li>Supernatural</li>
            <li>Adventure</li>
            <li>Mystery</li>
            <li>Western</li>
            <li>History</li>
            <li>Crime</li>
            <li>Fanfiction</li>
          </ul>
        </header> */}

        <Modal
          closable={false}
          visible={searchVisible}
          onOk={() => setSearchVisible(false)}
          onCancel={() => setSearchVisible(false)}
          footer={[
            <Button
              key="submit"
              type="primary"
              onClick={() => setSearchVisible(false)}
            >
              Search
            </Button>,
          ]}
        >
          <input />
        </Modal>
        <Modal
          closable={false}
          visible={ctaVisible}
          onOk={() => setCtaVisible(false)}
          onCancel={() => setCtaVisible(false)}
          footer={null}
          width={700}
          centered
        >
          <Row gutter={16} justify="center">
            <Col span={8}>
              <Button
                block
                htmlType="button"
                icon={<UserOutlined />}
                onClick={() => {
                  router.push("/character/new");
                  setCtaVisible(false);
                }}
              >
                Add a new character
              </Button>
            </Col>
            <Col span={8}>
              <Button
                block
                htmlType="button"
                icon={<BookOutlined />}
                onClick={() => {
                  router.push("/story/new");
                  setCtaVisible(false);
                }}
              >
                Add a new story
              </Button>
            </Col>
            <Col span={8}>
              <Button
                block
                htmlType="button"
                icon={<EnvironmentOutlined />}
                onClick={() => {
                  router.push("/location/new");
                  setCtaVisible(false);
                }}
              >
                Add a new location
              </Button>
            </Col>
          </Row>
        </Modal>
      </section>
      {/* <FullMenu toggleMenu={toggleMenu} menuVisible={menuVisible} /> */}
    </>
  );
};

export default Navbar;
