import Header from "./Header";
import StickyMenu from "./StickyMenu";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

import { Drawer } from "antd";
import Notifications from "../notifications/Notifications";
import { useNotifcations } from "../../hooks/notificationsHooks";

const Layout = ({ children }) => {
  // Reference to side menu
  const menuRef = React.useRef();
  const notifications = useNotifcations();

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

  const router = useRouter();

  return (
    <React.Fragment>
      <Navbar
        toggleNotifications={toggleNotifications}
        notificationsCount={notifications.count && notifications.count}
      />
      <main
        className={`main-content ${isOpen ? "content-menu-open" : ""} ${
          router.pathname === "/" ? "home-content" : ""
        }`}
      >
        {/* <Header menuRef={menuRef} isOpen={isOpen} openMenu={openMenu} /> */}
        <div className="content">{children}</div>
      </main>
      {/* <StickyMenu /> */}
      <Drawer
        title="Notifications"
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        width={800}
        headerStyle={{
          fontWeight: 300,
          textTransform: "uppercase",
          color: "#acb9d7",
        }}
      >
        <Notifications setVisible={setVisible} notif={notifications} />
      </Drawer>
    </React.Fragment>
  );
};

export default Layout;
