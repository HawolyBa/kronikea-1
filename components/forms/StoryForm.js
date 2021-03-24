import React from "react";
import { Row, Col, Divider, Form, Spin, Input, Select, message } from "antd";

import {
  CATEGORIES,
  COPYRIGHTS,
  LANGUAGES,
  STATUS,
} from "../../utils/constants";

import Tags from "../../components/forms/Tags";
import RadioButton from "../../components/forms/RadioButton";
import ItemSelector from "./ItemSelector";
import ImageRow from "./ImageRow";

const { Option } = Select;

const StoryForm = ({
  type,
  story,
  form,
  submit,
  loading,
  storyId,
  characters,
  mature,
  setMature,
  visibility,
  setVisibility,
  loadingStory,
}) => {
  const filterSort = (a, b) => {
    const keyA = a.name,
      keyB = b.name;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  };

  const onFailed = () => {
    window.scrollTo(0, 0);
    message.error("There are some errors");
  };

  return (
    <Form
      layout="vertical"
      scrollToFirstError
      onFinishFailed={onFailed}
      onFinish={submit}
      form={form}
      initialValues={
        type === "add"
          ? {
              summary: "",
              mature: false,
              public: true,
              banner: "",
              mainCharacters: [],
              tags: [],
              title: "",
              categories: [],
              copyright: "",
              language: "",
              status: "",
              imageCopyright: "",
            }
          : { ...story, mainCharacters: story.mainArr }
      }
    >
      <Row gutter={[24, 24]}>
        <Col sm={24} xs={24} md={18} lg={18}>
          <Form.Item
            colon={false}
            name="title"
            rules={[
              {
                required: true,
                message: "A title is required",
              },
              { max: 65 },
            ]}
            label="Title"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col sm={24} xs={24} lg={6} md={6}>
          <Form.Item
            name="categories"
            label="Categories"
            rules={[
              {
                required: true,
                message: "At least 1 category is required",
              },
              {
                max: 2,
                type: "array",
                message: "You can only select up to 2 categories",
              },
            ]}
          >
            <Select mode="multiple" allowClear maxTagCount={2}>
              {CATEGORIES?.sort((a, b) => {
                const keyA = a.name,
                  keyB = b.name;
                // Compare the 2 dates
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
              }).map((cat) => (
                <Option value={cat.value} key={cat.value}>
                  {cat.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col md={8} sm={24} xs={24} lg={8}>
          <Form.Item
            name="language"
            label="Language"
            rules={[
              {
                required: true,
                message: "A language is required",
              },
            ]}
          >
            <Select
              showSearch
              filterSort={filterSort}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {LANGUAGES?.map((lang) => (
                <Option value={lang.value} key={lang.value}>
                  {lang.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col md={8} sm={24} xs={24} lg={8}>
          <Form.Item
            name="status"
            label="Status"
            rules={[
              {
                required: true,
                message: "A status is required",
              },
            ]}
          >
            <Select>
              {STATUS.map((stat) => (
                <Option value={stat.value} key={stat.value}>
                  {stat.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col md={8} sm={24} xs={24} lg={8}>
          <Form.Item
            name="copyright"
            label="Copyright"
            rules={[
              {
                required: true,
                message: "A copyright is required",
              },
            ]}
          >
            <Select>
              {COPYRIGHTS.map((copy) => (
                <Option value={copy.value} key={copy.value}>
                  {copy.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="Summary"
        name="summary"
        rules={[
          {
            max: 180,
            message: "Your summary cannot exceed 180 characters",
          },
        ]}
      >
        <Input.TextArea
          autoSize={{ minRows: 5 }}
          showCount={true}
          maxLength={180}
        ></Input.TextArea>
      </Form.Item>
      <Row justify="space-between" gutter={[24, 24]}>
        <RadioButton
          lg={4}
          sm={12}
          xs={24}
          md={8}
          name="public"
          label="Visibility"
          setFunc={setVisibility}
          num1="3"
          num2="4"
          label1="Public"
          label2="Private"
          val={visibility}
        />
        <RadioButton
          lg={4}
          sm={12}
          xs={24}
          md={8}
          val={mature}
          setFunc={setMature}
          name="mature"
          label="Mature content ?"
          num1="1"
          num2="2"
          label1="Yes"
          label2="No"
        />
        <Col lg={8} md={12} sm={24} xs={24}>
          <Tags form={form} />
        </Col>
      </Row>
      <Divider />
      <ItemSelector
        item={story && story.mainArr}
        subject={characters}
        form={form}
        arrInForm="mainCharacters"
        label="Main Characters"
        type="story"
        lg1={12}
        subjectType="characters"
      />
      <Divider />
      <ImageRow name="banner" form={form} itemImage={story?.banner} />
      <Divider />
      {type === "add" ? (
        loading || storyId ? (
          <button disabled className="spin-btn">
            <Spin />
          </button>
        ) : (
          <button type="submit">Create</button>
        )
      ) : loadingStory ? (
        <button disabled className="spin-btn">
          <Spin />
        </button>
      ) : (
        <button type="submit">Edit</button>
      )}
    </Form>
  );
};

export default StoryForm;
