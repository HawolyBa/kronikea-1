import React from "react";
import Link from "next/link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import HearingIcon from "@material-ui/icons/Hearing";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Input, Space } from "antd";

const { Search } = Input;

const Navbar = () => {
  const onSearch = () => {};

  return (
    <section className="navbar-header">
      <header id="main-navbar">
        <div className="inner-header">
          <h1 id="title">Kronikea</h1>
          {/* <nav className="main-nav">
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
          </nav> */}
          <div class="search">
            <input type="text" class="search__input" placeholder="Search..." />
            <div class="search__icon">
              <ion-icon name="search"></ion-icon>
            </div>
          </div>
          <div className="header-icons">
            <Space align="center">
              {/* <div className="custom-btn custom-btn-primary">
                <p>Login / Sign Up</p>
              </div> */}
              <div class="icon">
                <Space align="center" size={16}>
                  <div class="icon__home">
                    <ion-icon name="home"></ion-icon>
                  </div>
                  <div class="icon__account">
                    <ion-icon name="person"></ion-icon>
                  </div>
                  <div class="icon__settings">
                    <ion-icon name="notifications"></ion-icon>
                  </div>
                  <div className="menu-btn">
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
    // <header className="side-navbar">
    //   <h1>Kronikea</h1>
    //   <section className="header-bloc">
    //     <h2>Browse Music</h2>
    //     <ul>
    //       <li>
    //         <SearchIcon />
    //         <span>Explore</span>
    //       </li>
    //       <li className="active">
    //         <HearingIcon />
    //         <span>Hear this</span>
    //       </li>
    //       <li>
    //         <RadioButtonCheckedIcon />
    //         <span>Radio</span>
    //       </li>
    //     </ul>
    //   </section>
    //   <section className="header-bloc">
    //     <h2>Your Library</h2>
    //     <ul>
    //       <li>
    //         <SearchIcon />
    //         <span>Explore</span>
    //       </li>
    //       <li className="active">
    //         <HearingIcon />
    //         <span>Hear this</span>
    //       </li>
    //       <li>
    //         <RadioButtonCheckedIcon />
    //         <span>Radio</span>
    //       </li>
    //     </ul>
    //   </section>
    // </header>
  );
};

export default Navbar;
