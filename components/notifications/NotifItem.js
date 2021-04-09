import React from "react";
import { Row, Col, Space, Tooltip } from "antd";

const NotifItem = ({ n, notif, router, setVisible }) => {
  const link =
    n.type === "storyLike"
      ? `/story/${n.storyId}`
      : n.type === "characterLike" || n.type === "characterComment"
      ? `/character/${n.characterId}`
      : n.type === "comment"
      ? `/story/${n.storyId}/chapter/${n.chapterId}`
      : n.type === "follow"
      ? `/profile/${n.sender}`
      : null;

  const openLink = () => {
    setVisible(false);
    router.push(link);
  };
  return (
    <div className={`notification ${n.read ? "notif-read" : ""}`}>
      <Row align="middle" gutter={60} justify="space-between">
        <Col span={16}>
          <div onClick={openLink}>
            <a className="notification-desc">
              <Space size={16}>
                <div className="notification-avatar">
                  <img src={n.user.image} alt={n.user.username} />
                </div>
                <p>{n.message}</p>
              </Space>
            </a>
          </div>
        </Col>

        <Col span={8}>
          <div className="notifications-buttons">
            <Space size={20}>
              <span className="btn mark-read-btn">
                {n.read ? (
                  <ion-icon name="checkmark"></ion-icon>
                ) : (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => notif.markAsRead(n.id)}
                  >
                    Mark as Read
                  </span>
                )}
              </span>
              <Tooltip title="DELETE">
                <span
                  onClick={() => notif.deleteOne(n.id)}
                  className="btn delete-btn"
                  style={{ cursor: "pointer" }}
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </span>
              </Tooltip>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NotifItem;
