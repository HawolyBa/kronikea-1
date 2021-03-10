import React from "react";
import { Row, Col, Divider, Form, Spin, message, Input, Select } from "antd";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import isImageUrl from "is-image-url";

import {
  CATEGORIES,
  COPYRIGHTS,
  LANGUAGES,
  STATUS,
} from "../../utils/constants";
import { useAuth } from "../../hooks/userHooks";
import { getUserCharacters } from "../../redux/actions/charactersActions";
import { addStory } from "../../redux/actions/storiesActions";

import Tags from "../../components/forms/Tags";
import UploadImage from "../../components/forms/UploadImage";
import Loader from "../../components/common/Loader";
import RadioButton from "../../components/forms/RadioButton";

const { Option } = Select;

const NewStory = (props) => {
  const auth = useAuth();
  const [form] = Form.useForm();
  const router = useRouter();
  const [linkVisible, setLinkVisible] = React.useState(false);
  const [uploadVisible, setUploadVisible] = React.useState(false);
  const [mature, setMature] = React.useState(false);
  const [visibility, setVisibility] = React.useState(true);
  const [currentChar, setCurrentChar] = React.useState("");

  const addCharacter = () => {
    if (
      currentChar &&
      form.getFieldValue("mainCharacters")?.indexOf(currentChar) === -1 &&
      form.getFieldValue("mainCharacters")?.length < 5
    ) {
      form.setFieldsValue({
        mainCharacters: [...form.getFieldValue("mainCharacters"), currentChar],
      });
    }
    setCurrentChar("");
    form.setFieldsValue({ currentChar: "" });
  };

  const submit = (values) => {
    delete values.currentChar;
    props.addStory({
      ...values,
      authorName: auth.user.username,
      banner: form.getFieldValue("banner") ? form.getFieldValue("banner") : "",
    });
  };

  const onFailed = (error) => {
    window.scrollTo(0, 0);
    message.error("There are some errors");
  };

  React.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters();
    }
  }, [auth]);

  React.useEffect(() => {
    form.setFieldsValue({ mature });
  }, [mature]);

  React.useEffect(() => {
    form.setFieldsValue({ public: visibility });
  }, [visibility]);

  const filterSort = (a, b) => {
    const keyA = a.name,
      keyB = b.name;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  };

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

  return auth.isLoading ? (
    <Loader />
  ) : auth.user.uid ? (
    <div className="new-story custom-form">
      <div className="inner">
        <h2 className="side-heading">Add a new story</h2>
        <Form
          layout="vertical"
          scrollToFirstError
          onFinishFailed={onFailed}
          onFinish={submit}
          form={form}
          initialValues={{
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
          }}
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
                <Select filterSort={filterSort}>
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
          <Form.Item name="mainCharacters" label="Main Characters">
            <Row gutter={[24, 24]}>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Row gutter={16}>
                  <Col span={22}>
                    <Form.Item name="currentChar">
                      <Select
                        disabled={
                          form.getFieldValue("mainCharacters")?.length >= 5
                            ? true
                            : false
                        }
                        onChange={(val) => setCurrentChar(val)}
                      >
                        <Option value="none" disabled>
                          Choose
                        </Option>
                        {props.characters
                          .filter(
                            (c) =>
                              form
                                .getFieldValue("mainCharacters")
                                ?.indexOf(c.id) === -1
                          )
                          ?.sort((a, b) => {
                            const keyA = a.firstname,
                              keyB = b.firstname;
                            // Compare the 2 dates
                            if (keyA < keyB) return -1;
                            if (keyA > keyB) return 1;
                            return 0;
                          })
                          .map((char) => (
                            <Option
                              key={char.id}
                              value={char.id}
                            >{`${char.firstname} ${char.lastname}`}</Option>
                          ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <div
                      className="select-add-input-iconbox"
                      onClick={addCharacter}
                    >
                      <span>+</span>
                    </div>
                  </Col>
                  <small>You can add up to 5 main characters</small>
                </Row>
              </Col>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Row gutter={[16, 24]}>
                  {props.characters
                    .filter(
                      (c) =>
                        form.getFieldValue("mainCharacters")?.indexOf(c.id) !==
                        -1
                    )
                    .map((char) => (
                      <Col md={12} sm={24} key={char.id}>
                        <div key={char.id} className="main-selected">
                          <div className="main-avatar">
                            <img src={char.image} alt={char.firstname} />
                          </div>
                          <p>{`${char.firstname} ${char.lastname}`} </p>
                          <ion-icon
                            onClick={() => removeCharacter(char.id)}
                            name="close-circle"
                          ></ion-icon>
                        </div>
                      </Col>
                    ))}
                </Row>
              </Col>
            </Row>
          </Form.Item>
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
                <UploadImage form={form} />
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
          {props.loading || props.storyId ? (
            <button disabled>
              <Spin />
            </button>
          ) : (
            <button type="submit">Create</button>
          )}
        </Form>
      </div>
    </div>
  ) : (
    router.push("/auth")
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters.userCharacters,
  confirmMessage: state.stories.message,
  storyId: state.stories.storyId,
  loading: state.stories.loadingStory,
});

export default connect(mapStateToProps, { getUserCharacters, addStory })(
  NewStory
);
