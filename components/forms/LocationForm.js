import React from "react";
import {
  Form,
  Col,
  Row,
  Select,
  Input,
  message,
  Divider,
  Spin,
  Popconfirm,
} from "antd";

import ImageRow from "./ImageRow";

const LocationForm = ({
  form,
  stories,
  submit,
  type,
  loadingLoc,
  locId,
  initialValues,
  location,
  deleteLocation,
}) => {
  const onFailed = () => {
    window.scrollTo(0, 0);
    message.error("There are some errors");
  };
  return (
    <Form
      scrollToFirstError
      onFinishFailed={onFailed}
      onFinish={submit}
      layout="vertical"
      form={form}
      initialValues={initialValues}
    >
      <Row gutter={[24, 24]}>
        <Col md={16} sm={24} xs={24}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "A name is required",
              },
              { max: 50 },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={8} sm={24} xs={24}>
          <Form.Item
            name="storyId"
            label="Story"
            rules={[
              {
                required: true,
                message: "A story is required",
              },
            ]}
          >
            <Select>
              {stories?.map((story) => (
                <Select.Option key={story.id} value={story.id}>
                  {story.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="description" label="Description">
        <Input.TextArea
          autoSize={{ minRows: 5 }}
          showCount={true}
          maxLength={180}
        ></Input.TextArea>
      </Form.Item>
      <Divider />
      <ImageRow name="image" form={form} itemImage={location?.image} />
      {type === "add" ? (
        loadingLoc || locId ? (
          <button disabled className="spin-btn">
            <Spin />
          </button>
        ) : (
          <button type="submit">Create</button>
        )
      ) : loadingLoc ? (
        <button disabled className="spin-btn">
          <Spin />
        </button>
      ) : (
        <Row gutter={[32, 16]}>
          <Col md={16} sm={24} xs={24}>
            <button type="submit">Edit</button>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Popconfirm
              title="Do you really want to delete this location ?"
              onConfirm={() => deleteLocation(location.id, location.name)}
            >
              <button className="delete-btn" type="button">
                Delete
              </button>
            </Popconfirm>
          </Col>
        </Row>
      )}
    </Form>
  );
};

export default LocationForm;
