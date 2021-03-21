import React from "react";
import { Row, Col, Divider, Form, Input, InputNumber, Spin } from "antd";

import Relatives from "./Relatives";
import ImageRow from "./ImageRow";
import RadioButton from "./RadioButton";

const CharacterForm = ({
  form,
  characters,
  character,
  submit,
  onFailed,
  visibility,
  setVisibility,
  type,
  loadingCharacter,
  initialValues,
}) => {
  return (
    <Form
      layout="vertical"
      scrollToFirstError
      onFinishFailed={onFailed}
      onFinish={submit}
      form={form}
      initialValues={initialValues}
    >
      <ImageRow name="image" form={form} itemImage={character?.image} />
      <Divider />
      <Row align="bottom" gutter={[24, 24]}>
        <Col md={8} xs={24} sm={24}>
          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[
              {
                required: true,
                message: "A firstname is required",
              },
              { max: 20 },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={8} xs={24} sm={24}>
          <Form.Item label="Lastname" name="lastname" rules={[{ max: 65 }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col md={8} xs={24} sm={24}>
          <Form.Item label="Nickname" name="nickname" rules={[{ max: 65 }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col md={8} sm={24} xs={24}>
          <Form.Item name="gender" label="Gender">
            <Input />
          </Form.Item>
        </Col>
        <Col md={8} sm={24} xs={24}>
          <Form.Item name="occupation" label="Occupation">
            <Input />
          </Form.Item>
        </Col>
        <Col md={8} sm={24} xs={24}>
          <Form.Item name="residence" label="Residence">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col md={8} xs={24} sm={24}>
          <Form.Item label="Ethnicity" name="ethnicity">
            <Input />
          </Form.Item>
        </Col>
        <Col md={8} xs={24} sm={24}>
          <Form.Item label="Group" name="group">
            <Input />
          </Form.Item>
        </Col>
        <Col md={4} xs={24} sm={24}>
          <Form.Item label="Age" name="age">
            <InputNumber min={0} />
          </Form.Item>
        </Col>
        <RadioButton
          lg={4}
          md={4}
          sm={24}
          xs={24}
          name="public"
          label="Visibility"
          num1="1"
          num2="2"
          label1="Public"
          label2="Private"
          setFunc={setVisibility}
          val={visibility}
        />
      </Row>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            max: 180,
            message: "Your description cannot exceed 180 characters",
          },
        ]}
      >
        <Input.TextArea
          autoSize={{ minRows: 5 }}
          showCount={true}
          maxLength={180}
        ></Input.TextArea>
      </Form.Item>
      <Divider />
      <Relatives
        character={character && character}
        form={form}
        characters={characters}
      />
      {type === "add" ? (
        loadingCharacter ? (
          <button disabled className="spin-btn">
            <Spin />
          </button>
        ) : (
          <button type="submit">Create</button>
        )
      ) : loadingCharacter ? (
        <button disabled className="spin-btn">
          <Spin />
        </button>
      ) : (
        <button type="submit">Edit</button>
      )}
    </Form>
  );
};

export default CharacterForm;
