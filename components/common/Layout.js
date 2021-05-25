import Header from "./Header";
import StickyMenu from "./StickyMenu";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import "flag-icon-css/css/flag-icon.min.css";

import { Drawer, Modal, Radio } from "antd";
import Notifications from "../notifications/Notifications";
import { useNotifcations } from "../../hooks/notificationsHooks";
import Footer from "./Footer";
import FullMenu from "./FullMenu";

const Layout = ({ children }) => {
  // Reference to side menu
  const menuRef = React.useRef();
  const notifications = useNotifcations();

  const [isOpen, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [openLanguage, setOpenLanguage] = React.useState(false);
  const [locale, setLocale] = React.useState("en");

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
        openMenu={setOpen}
        setOpenLanguage={setOpenLanguage}
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
      <Footer />
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
      <Modal
        title="Change Language"
        visible={openLanguage}
        width={500}
        footer={null}
        centered={true}
        closable={false}
        onOk={() => setOpenLanguage(false)}
        onCancel={() => setOpenLanguage(false)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Radio.Group
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
          >
            <Radio.Button key="en" value={"en"}>
              <span className="flag-icon flag-icon-gb"></span> English
            </Radio.Button>
            <Radio.Button key="fr" value={"fr"}>
              <span className="flag-icon flag-icon-fr"></span> Français
            </Radio.Button>
          </Radio.Group>
        </div>
      </Modal>
      <FullMenu toggleMenu={openMenu} menuVisible={isOpen} />
    </React.Fragment>
  );
};

export default Layout;
