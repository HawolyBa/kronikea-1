import React from "react";
import { Badge, Rate, Space } from "antd";

const RateStory = ({ rateFunc, storyId, note, userNote, children }) => {
  return (
    <div className="floating-rate">
      <h5>Rating</h5>
      <Space align="center" size={16}>
        <Rate disabled defaultValue={note} />
        <Badge count={note} />
      </Space>
      <div style={{ marginBottom: "20px" }}></div>
      <h5>{userNote === 0 ? "Rate this story !" : "Your note"}</h5>
      <Space align="center" size={16}>
        <Rate
          style={{ fontSize: "16px" }}
          onChange={(val) => rateFunc({ storyId: storyId, value: val })}
          defaultValue={userNote}
        />
        <Badge size="small" count={userNote} />
      </Space>
    </div>
  );
};

export default RateStory;
