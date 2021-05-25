import { Divider } from "antd";
import Link from "next/link";

import MenuBloc from "./MenuBloc";
import { CATEGORIES } from "../../utils/constants";

const FullMenu = ({ menuVisible, toggleMenu }) => {
  return (
    <div className={`fullscreen-menu ${menuVisible ? "visible" : ""}`}>
      <div className="close-btn custom-btn" onClick={toggleMenu}>
        <ion-icon name="close"></ion-icon>
      </div>
      <div className="menu-inner">
        <div className="menu-side">
          <nav className="menu-nav">
            <MenuBloc
              toggleMenu={toggleMenu}
              title="Home"
              link="/"
              icon="home"
            />
            <MenuBloc
              toggleMenu={toggleMenu}
              title="Profile"
              link="/profile"
              icon="person"
            />
            <MenuBloc
              toggleMenu={toggleMenu}
              title="Browse"
              link="/browse"
              icon="folder-open"
            />
            <MenuBloc
              toggleMenu={toggleMenu}
              title="Resume reading"
              link="/"
              icon="book"
            />
            <MenuBloc
              toggleMenu={toggleMenu}
              title="About"
              link="/about"
              icon="information-circle"
            />
            <MenuBloc
              toggleMenu={toggleMenu}
              title="Feedback"
              link="/feedback"
              icon="chatbubbles"
            />
          </nav>
        </div>
        <div className="cat-bloc">
          <h2>Categories</h2>
          <nav className="cat-nav">
            <ul>
              {CATEGORIES.map((cat) => (
                <li key={cat.value} onClick={toggleMenu}>
                  <Link href={`/category/${cat.value}`}>
                    <a>{cat.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FullMenu;
