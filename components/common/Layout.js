import Header from "./Header";
import StickyMenu from "./StickyMenu";
import Navbar from "./Navbar";
import "antd/dist/antd.css";
import "../../style/main.scss";

const Layout = ({ children }) => {
  // Reference to side menu
  const menuRef = React.useRef();

  const [isOpen, setOpen] = React.useState(false);

  const openMenu = (e) => {
    setOpen(!isOpen);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", clickOutsideMenu);
  }, [menuRef.current]);

  const clickOutsideMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <main className={`main-content ${isOpen ? "content-menu-open" : ""}`}>
        <Header menuRef={menuRef} isOpen={isOpen} openMenu={openMenu} />
        <div className="content">{children}</div>
      </main>
      <StickyMenu />
    </React.Fragment>
  );
};

export default Layout;
