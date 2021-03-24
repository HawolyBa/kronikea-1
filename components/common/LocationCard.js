import React from "react";
import { Modal, Button } from "antd";
import Link from "next/Link";

const LocationCard = ({ location, type }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <figure
        className="card character-card"
        data-aos="zoom-in-up"
        onClick={() => setVisible(true)}
      >
        <div className="img-container">
          <img src={location.image} />
        </div>
        <figcaption>
          <h3>{location.name}</h3>
          {type !== "story" && (
            <span className="author">Story: {location.storyTitle}</span>
          )}
        </figcaption>
      </figure>
      <Modal
        title={location.name}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="submit" type="primary" onClick={() => setVisible(false)}>
            Close
          </Button>,
        ]}
      >
        <img className="modal-img" src={location.image} alt={location.name} />
        <p>{location.description}</p>
        {type !== "story" && (
          <p className="modal-story-link">
            Story:{" "}
            <Link href={`/story/${location.storyId}`}>
              <a>{location.storyTitle}</a>
            </Link>
          </p>
        )}
      </Modal>
    </>
  );
};

export default LocationCard;
