import Link from "next/link";
import { Space } from "antd";

const MenuBloc = ({ link, title, icon, toggleMenu }) => {
  return (
    <Link href={link}>
      <a className="menu-bloc" onClick={toggleMenu}>
        <Space align="baseline" size={16}>
          <ion-icon name={icon}></ion-icon>
          <span>{title}</span>
        </Space>
      </a>
    </Link>
  );
};

export default MenuBloc;
