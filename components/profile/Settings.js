import React from "react";
import {
  Tabs,
  Form,
  Input,
  Modal,
  Upload,
  message,
  Button,
  Popconfirm,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
  LinkOutlined,
  FileImageOutlined,
  LoadingOutlined,
  PlusOutlined,
  StarOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import LinkComp from "./LinkComp";
import { auth } from "../../redux/fbConfig";

const { TabPane } = Tabs;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const Settings = ({
  deleteAccount,
  profile,
  openSettings,
  setOpenSettings,
  changeProfile,
}) => {
  const [form] = Form.useForm();
  const [info, setInfo] = React.useState({
    username: "",
    deviantart: "",
    facebook: "",
    instagram: "",
    twitter: "",
    biography: "",
    errors: {
      instagram: "",
      deviantart: "",
      facebook: "",
      twitter: "",
      username: "",
    },
  });
  const [imageUrl, setImageUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleChange = (imageInfo) => {
    if (imageInfo.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (imageInfo.file.status === "done") {
      setInfo({ ...info, image: imageInfo.file.originFileObj });
      getBase64(imageInfo.file.originFileObj, (imageUrl) => {
        setLoading(false);

        setImageUrl(imageUrl);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  React.useEffect(() => {
    if (profile) {
      setImageUrl(profile.image);
      setInfo({
        ...info,
        biography: profile.biography,
        username: profile.username,
        instagram: profile.instagram,
        facebook: profile.facebook,
        twitter: profile.twitter,
        deviantart: profile.deviantart,
        image: profile.image,
      });
    }
  }, [profile]);

  React.useEffect(() => {
    if (
      info.username &&
      info.username.length >= 0 &&
      info.username.length < 4
    ) {
      setInfo({
        ...info,
        errors: {
          ...info.errors,
          username: "Your username needs to be at least 4 characters long",
        },
      });
    } else if (info.username.length > 15) {
      setInfo({
        ...info,
        errors: {
          ...info.errors,
          username: "Your username cannot exceed 15 characters",
        },
      });
    } else {
      setInfo({
        ...info,
        errors: {
          ...info.errors,
          username: "",
        },
      });
    }
  }, [info.username]);

  const submit = () => {
    let errors = [];
    const passwordErrors = form.getFieldsError();

    for (let i in passwordErrors) {
      if (passwordErrors[i].errors.length > 0)
        errors.push([...passwordErrors[i].errors]);
    }

    for (let i in info.errors) {
      if (info.errors[i]) errors.push(info.errors[i]);
    }

    if (errors.length === 0) {
      changeProfile(
        {
          username: info.username,
          twitter: info.twitter,
          instagram: info.instagram,
          deviantart: info.deviantart,
          facebook: info.facebook,
          newPassword: form.getFieldValue("newPassword"),
          actualPassword: form.getFieldValue("actualPassword"),
          image: info.image,
          biography: info.biography,
        },
        setOpenSettings
      );
    } else {
      message.error("There are some errors in the settings");
    }
  };

  const closeModal = () => {
    setImageUrl(profile.image);
    setInfo({
      ...info,
      errors: {
        instagram: "",
        deviantart: "",
        facebook: "",
        twitter: "",
        username: "",
      },
      username: profile.username,
      biography: profile.biography,
      instagram: profile.instagram,
      facebook: profile.facebook,
      twitter: profile.twitter,
      deviantart: profile.deviantart,
      image: profile.image,
    });
    setOpenSettings(false);
  };
  return (
    <>
      <Modal
        width="50%"
        title="Settings"
        visible={openSettings}
        onOk={submit}
        okText="Submit changes"
        onCancel={closeModal}
      >
        <div className="settings">
          <Tabs tabPosition="left" defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <UserOutlined />
                  Username
                </span>
              }
              key="1"
            >
              <Input
                maxLength={15}
                addonBefore={"Username"}
                onChange={(e) => setInfo({ ...info, username: e.target.value })}
                value={info.username}
              />
              {info.errors.username && (
                <div className="ant-form-item-explain ant-form-item-explain-error">
                  <div role="alert">{info.errors.username}</div>
                </div>
              )}
            </TabPane>
            <TabPane
              tab={
                <span>
                  <LockOutlined />
                  Password
                </span>
              }
              key="2"
            >
              <Form
                form={form}
                layout="vertical"
                initialValues={{ actualPassword: "", newPassword: "" }}
              >
                <div className="form-group">
                  <div className="input-group">
                    <Form.Item
                      label="Actual Password"
                      name="actualPassword"
                      rules={[
                        {
                          required: true,
                          message: "Please input your actual password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <Form.Item
                      label="New Password"
                      name="newPassword"
                      rules={[
                        {
                          required: true,
                          message: "Please input your new password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <Form.Item
                      name="confirmPassword"
                      label="Confirm New Password"
                      dependencies={["password"]}
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (
                              !value ||
                              getFieldValue("newPassword") === value
                            ) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "The two passwords that you entered do not match!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <EditOutlined />
                  Bio
                </span>
              }
              key="3"
            >
              <Input.TextArea
                maxLength={140}
                autoSize
                showCount
                value={info.biography}
                onChange={(e) =>
                  setInfo({ ...info, biography: e.target.value })
                }
              ></Input.TextArea>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <LinkOutlined />
                  Links
                </span>
              }
              key="4"
            >
              <LinkComp
                setInfo={setInfo}
                info={info}
                name={"facebook"}
                label={"Facebook"}
              />
              <div style={{ margin: "10px 0" }}></div>
              <LinkComp
                setInfo={setInfo}
                info={info}
                name={"twitter"}
                label={"Twitter"}
              />
              <div style={{ margin: "10px 0" }}></div>
              <LinkComp
                setInfo={setInfo}
                info={info}
                name={"instagram"}
                label={"Instagram"}
              />
              <div style={{ margin: "10px 0" }}></div>
              <LinkComp
                setInfo={setInfo}
                info={info}
                name={"deviantart"}
                label={"Deviantart"}
              />
              <div style={{ margin: "10px 0" }}></div>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <FileImageOutlined />
                  Avatar
                </span>
              }
              key="5"
            >
              <Upload
                showUploadList={{
                  showRemoveIcon: true,
                  removeIcon: <StarOutlined />,
                }}
                listType="picture-card"
                className="cover-uploader"
                showUploadList={true}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                maxCount={1}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <DeleteOutlined />
                  Delete my account
                </span>
              }
              key="6"
            >
              <Popconfirm
                title="Be careful ! This action is not reversible !"
                onConfirm={deleteAccount}
              >
                <Button danger>Click here to delete your account</Button>
              </Popconfirm>
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    </>
  );
};

export default Settings;
