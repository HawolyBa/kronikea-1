import Header from "./Header";
import StickyMenu from "./StickyMenu";
import Navbar from "./Navbar";

import { Drawer } from "antd";
import Notifications from "../Notifications";

const Layout = ({ children }) => {
  // Reference to side menu
  const menuRef = React.useRef();

  const [isOpen, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const toggleNotifications = () => setVisible(!visible);

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
      <Navbar toggleNotifications={toggleNotifications} />
      <main className={`main-content ${isOpen ? "content-menu-open" : ""}`}>
        {/* <Header menuRef={menuRef} isOpen={isOpen} openMenu={openMenu} /> */}
        <div className="content">{children}</div>
      </main>
      <StickyMenu />
      <Drawer
        title="Notifications"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={800}
        headerStyle={{
          fontWeight: 300,
          textTransform: "uppercase",
          color: "#acb9d7",
        }}
      >
        <Notifications />
      </Drawer>
    </React.Fragment>
  );
};

export default Layout;
