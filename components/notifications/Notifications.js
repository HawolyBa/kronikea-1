import React from "react";
import { Empty } from "antd";
import NotifItem from "./NotifItem";
import { useRouter } from "next/router";

const Notifications = ({ notif, setVisible }) => {
  const router = useRouter();
  return (
    <div className="notifications">
      <div className="cta-btns">
        <div className="cta-btn read-all" onClick={notif.markAllAsRead}>
          Mark all as read
        </div>
        <div className="cta-btn delete-all" onClick={notif.deleteAll}>
          Delete all
        </div>
      </div>
      {notif.items.length > 0 ? (
        notif.items.map((n) => (
          <NotifItem
            setVisible={setVisible}
            router={router}
            key={n.id}
            n={n}
            notif={notif}
          />
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No notifications yet"
        />
      )}
    </div>
  );
};

export default Notifications;
