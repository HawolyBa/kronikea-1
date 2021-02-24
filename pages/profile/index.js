import React, { useEffect, useState } from "react";

import { Row, Modal, Button } from "antd";

import Banner from "../../components/profile/Banner";
import Tabs from "../../components/profile/Tabs";
import Stories from "../../components/profile/Stories";
import Characters from "../../components/profile/Characters";
import Followers from "../../components/profile/Followers";
import Locations from "../../components/profile/Locations";
import Settings from "../../components/profile/Settings";

const Profile = () => {
  const [tabs] = useState([
    "stories",
    "characters",
    "locations",
    "favorites stories",
    "favorites characters",
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [settings, openSettings] = useState(false);
  const [currentTab, setCurrentTab] = useState("stories");
  const changeTab = (tab) => setCurrentTab(tab);

  return (
    <div className="profile">
      <Banner openSettings={openSettings} setModalVisible={setModalVisible} />
      <section className="profile-content">
        <Tabs currentTab={currentTab} tabs={tabs} changeTab={changeTab} />
        {currentTab === "stories" && <Stories />}
        {currentTab === "characters" && <Characters />}
        {currentTab === "locations" && <Locations />}
        {currentTab === "favorites stories" && <Stories />}
        {currentTab === "favorites characters" && <Characters />}
      </section>
      <Modal
        title="128 Followers"
        width={"50%"}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setModalVisible(false)}>
            OK
          </Button>,
        ]}
      >
        <Row>
          <Followers />
        </Row>
      </Modal>
      <Modal
        title="Settings"
        visible={settings}
        onOk={() => openSettings(false)}
        onCancel={() => openSettings(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={() => openSettings(false)}
          >
            Submit
          </Button>,
        ]}
      >
        <Settings />
      </Modal>
    </div>
  );
};

export default Profile;
