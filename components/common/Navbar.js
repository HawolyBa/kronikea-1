import React from "react";
import Link from "next/link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Input, Space } from "antd";

const { Search } = Input;

const Navbar = () => {
  const onSearch = () => {};

  return (
    <section className="navbar-header">
      <header id="main-navbar">
        <div className="inner-header">
          <h1 id="title">Kronikea</h1>
          <nav className="main-nav">
            <ul>
              <li className="active">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Categories</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Stories</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Characters</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-icons">
            <Space align="center">
              <Search placeholder="Search..." onSearch={onSearch} enterButton />
              <AccountCircleIcon className="icons" />
              <NotificationsIcon className="icons" />
            </Space>
          </div>
        </div>
      </header>
      <header className="categories">
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
      </header>
    </section>
  );
};

export default Navbar;
