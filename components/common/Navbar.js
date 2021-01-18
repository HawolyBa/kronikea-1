import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
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
                <a>Profile</a>
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
      </div>
    </header>
  );
};

export default Navbar;
