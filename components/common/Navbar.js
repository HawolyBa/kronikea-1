import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Modal, Space, Tooltip, Button, Popconfirm } from "antd";

import Search from "../forms/Search";
import FullMenu from "./FullMenu";
import { useAuth } from "../../hooks/userHooks";

const Navbar = ({ toggleNotifications }) => {
  const onSearch = () => {};
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const auth = useAuth();
  const router = useRouter();

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const logout = () => {
    auth.signout().then(() => router.push("/auth"));
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
            <Search />
            <div className="header-icons">
              <Space align="center">
                {/* <div className="custom-btn custom-btn-primary">
                <p>Login / Sign Up</p>
              </div> */}
                <div className="icon">
                  <Space align="center" size={16}>
                    <div className="header-icon icon__home">
                      <Tooltip title="Home" placement="bottom">
                        <Link href="/">
                          <a>
                            <ion-icon name="home"></ion-icon>
                          </a>
                        </Link>
                      </Tooltip>
                    </div>
                    <Tooltip title="Notifications" placement="bottom">
                      <div
                        className="header-icon icon__settings"
                        onClick={toggleNotifications}
                      >
                        <ion-icon name="notifications"></ion-icon>
                      </div>
                    </Tooltip>
                    <Tooltip title="Night mode" placement="bottom">
                      <div className="header-icon icon__settings">
                        <ion-icon name="contrast"></ion-icon>
                      </div>
                    </Tooltip>
                    <div className="header-icon icon__account">
                      <Link href="/profile">
                        <a>
                          <img
                            src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg"
                            alt="aishwaraya"
                          />
                        </a>
                      </Link>
                    </div>
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

                    <div className="menu-btn" onClick={toggleMenu}>
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                    </div>
                  </Space>
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
      </section>
      {/* <FullMenu toggleMenu={toggleMenu} menuVisible={menuVisible} /> */}
    </>
  );
};

export default Navbar;
