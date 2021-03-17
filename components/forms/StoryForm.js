import React from "react";
import { Row, Col, Divider, Form, Spin, Input, Select, message } from "antd";
import isImageUrl from "is-image-url";

import {
  CATEGORIES,
  COPYRIGHTS,
  LANGUAGES,
  STATUS,
} from "../../utils/constants";

import Tags from "../../components/forms/Tags";
import UploadImage from "../../components/forms/UploadImage";
import RadioButton from "../../components/forms/RadioButton";
import ItemSelector from "./ItemSelector";

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
  const [linkVisible, setLinkVisible] = React.useState(false);
  const [uploadVisible, setUploadVisible] = React.useState(false);
  // const [currentChar, setCurrentChar] = React.useState("");
  // const [selectedCharacters, setSelectedCharacters] = React.useState(
  //   story ? characters.filter((c) => story.mainCharacters.includes(c.id)) : []
  // );

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

  // const addCharacter = () => {
  //   if (
  //     currentChar &&
  //     form.getFieldValue("mainCharacters")?.indexOf(currentChar) === -1 &&
  //     form.getFieldValue("mainCharacters")?.length < 5
  //   ) {
  //     setSelectedCharacters([
  //       ...selectedCharacters,
  //       characters.find((c) => c.id === currentChar),
  //     ]);
  //     form.setFieldsValue({
  //       mainCharacters: [...form.getFieldValue("mainCharacters"), currentChar],
  //     });
  //   }
  //   setCurrentChar("");
  //   form.setFieldsValue({ currentChar: "" });
  // };

  // const removeCharacter = (id) => {
  //   form.setFieldsValue({
  //     mainCharacters: form
  //       .getFieldValue("mainCharacters")
  //       .filter((c) => c !== id),
  //   });
  //   setSelectedCharacters(selectedCharacters.filter((c) => c.id !== id));
  // };

  const showLink = () => {
    form.setFieldsValue({ banner: null });
    setLinkVisible(true);
    setUploadVisible(false);
  };

  const showUpload = () => {
    form.setFieldsValue({ banner: null });
    setLinkVisible(false);
    setUploadVisible(true);
  };

  return (
    <div className="new-story custom-form">
      <div className="inner">
        <h2 className="side-heading">
          {`${type} ${type === "add" && "a new"} story ${
            type === "edit" ? ":" : ""
          } ${type === "edit" ? story.title : ""}`}
        </h2>
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
              : { ...story }
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
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
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
            item={story && story.mainCharacters}
            subject={characters}
            form={form}
            arrInForm="mainCharacters"
            label="Main Characters"
            type="story"
            lg1={12}
            subjectType="characters"
          />
          <Divider />
          {!uploadVisible && !linkVisible && (
            <div className="upload-btns">
              <button onClick={showUpload} type="button" className="upload-btn">
                Upload a cover
              </button>

              <button onClick={showLink} type="button" className="upload-btn">
                Submit a link to a cover
              </button>
            </div>
          )}
          {uploadVisible && (
            <Row align="bottom" gutter={[24, 24]}>
              <Col md={12} sm={24} xs={24}>
                <UploadImage form={form} image={story?.banner} />
              </Col>
              <Col md={12} sm={24} xs={24}>
                <button onClick={showLink} type="button" className="upload-btn">
                  OR Submit a link to a cover
                </button>
              </Col>
            </Row>
          )}
          {linkVisible && (
            <Row align="bottom" gutter={[24, 24]}>
              <Col sm={24} xs={24} md={12} lg={12}>
                <Form.Item
                  rules={[
                    {
                      type: "url",
                      message: "This field must be a valid url.",
                    },
                    () => ({
                      validator(_, value) {
                        if (isImageUrl(value)) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("The link needs to be an image")
                        );
                      },
                    }),
                  ]}
                  label="Submit a link to your image"
                  name="banner"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col md={12} sm={24} xs={24}>
                <button
                  onClick={showUpload}
                  type="button"
                  className="upload-btn"
                >
                  Upload a cover
                </button>
              </Col>
            </Row>
          )}
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
      </div>
    </div>
  );
};

export default StoryForm;
