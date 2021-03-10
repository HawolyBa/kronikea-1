import React from "react";
import { Row, Col, Space, Divider, Form, Spin, Result, Button } from "antd";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import {
  CATEGORIES,
  COPYRIGHTS,
  LANGUAGES,
  STATUS,
} from "../../../utils/constants";
import { useAuth } from "../../../hooks/userHooks";
import { getUserCharacters } from "../../../redux/actions/charactersActions";
import { getStory } from "../../../redux/actions/storiesActions";

import InputGroup from "../../../components/common/Input";
import SelectGroup from "../../../components/common/Select";
import Tags from "../../../components/forms/Tags";
import UploadImage from "../../../components/forms/UploadImage";
import Loader from "../../../components/common/Loader";

const EditStory = (props) => {
  const { story } = props;
  const [storyInfo, setStoryInfo] = React.useState({
    title: story.title,
    categories: story.categories,
    language: story.language,
    status: story.status,
    copyright: story.copyright,
    summary: story.summary,
    mature: story.mature,
    public: story.public,
    tags: story.tags,
    mainCharacters: story.mainCharacters,
    banner: story.banner,
    imageCopyright: story.imageCopyright,
  });
  const [summaryCount, setSummaryCount] = React.useState(story.summary.length);
  const [currentChar, setCurrentChar] = React.useState("");
  const auth = useAuth();
  const [form] = Form.useForm();
  const router = useRouter();

  React.useEffect(() => {
    props.getStory(router.query.id);
  });

  React.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters();
    }
  }, [auth]);

  const addCharacter = () => {
    if (
      currentChar &&
      storyInfo.mainCharacters.indexOf(currentChar) === -1 &&
      storyInfo.mainCharacters.length < 5
    ) {
      setStoryInfo({
        ...storyInfo,
        mainCharacters: [...storyInfo.mainCharacters, currentChar],
      });
    }
    setCurrentChar("");
  };

  const removeCharacter = (id) => {
    setStoryInfo({
      ...storyInfo,
      mainCharacters: storyInfo.mainCharacters.filter((c) => c !== id),
    });
  };

  const submitStory = (values) => {
    // props.addStory({
    //   ...values,
    //   authorName: auth.user.username,
    //   banner: storyInfo.banner,
    //   tags: storyInfo.tags,
    //   summary: values.summary ? values.summary : "",
    //   imageCopyright: values.imageCopyright ? values.imageCopyright : "",
    //   mature: storyInfo.mature,
    //   public: storyInfo.public,
    //   mainCharacters: storyInfo.mainCharacters,
    // });
  };
  console.log(story);

  return auth.isLoading && !story.title ? (
    <Loader />
  ) : auth.user.uid && story.authorId === auth.user.uid ? (
    <div className="new-story custom-form">
      <div className="inner">
        <h2 className="side-heading">Edit story</h2>
        <Form
          form={form}
          layout="vertical"
          className="form-group"
          onFinish={submitStory}
        >
          <Row gutter={[24, 24]}>
            <InputGroup
              required={true}
              sm={24}
              xs={24}
              md={18}
              lg={18}
              type="text"
              name="title"
              placeholder="Enter a title"
              value={storyInfo.title}
              onChangeFunc={setStoryInfo}
              storyInfo={storyInfo}
              rules={[
                {
                  required: true,
                  message: "A title is required",
                },
                { max: 70 },
              ]}
            />
            <SelectGroup
              sm={24}
              xs={24}
              lg={6}
              md={6}
              name="categories"
              options={CATEGORIES}
              value={storyInfo.categories}
              onChangeFunc={setStoryInfo}
              storyInfo={storyInfo}
              type="multiple"
              form={form}
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
            />
          </Row>
          <Row gutter={[24, 24]}>
            <SelectGroup
              md={8}
              sm={24}
              xs={24}
              lg={8}
              name="language"
              options={LANGUAGES}
              value={storyInfo.language}
              onChangeFunc={setStoryInfo}
              storyInfo={storyInfo}
              type="single"
              form={form}
              rules={[
                {
                  required: true,
                  message: "A language is required",
                },
              ]}
            />
            <SelectGroup
              md={8}
              sm={24}
              xs={24}
              lg={8}
              name="status"
              options={STATUS}
              info={"info about status"}
              value={storyInfo.status}
              onChangeFunc={setStoryInfo}
              storyInfo={storyInfo}
              type="single"
              form={form}
              rules={[
                {
                  required: true,
                  message: "A status is required",
                },
              ]}
            />
            <SelectGroup
              md={8}
              sm={24}
              xs={24}
              lg={8}
              name="copyright"
              options={COPYRIGHTS}
              info={"info about copyright"}
              value={storyInfo.copyright}
              onChangeFunc={setStoryInfo}
              storyInfo={storyInfo}
              type="single"
              form={form}
              rules={[
                {
                  required: true,
                  message: "A copyright is required",
                },
              ]}
            />
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
            <div className="input-group summary">
              <textarea
                rows="5"
                id="summary"
                className="form-input"
                placeholder="Summarize your story here"
                value={storyInfo.summary}
                onChange={(e) => {
                  setStoryInfo({ ...storyInfo, summary: e.target.value });
                  setSummaryCount(e.target.value.length);
                }}
              ></textarea>
              <span className={`counter ${summaryCount > 180 ? "exceed" : ""}`}>
                {summaryCount}/180
              </span>
            </div>
          </Form.Item>
          <Row justify="space-between" gutter={[24, 24]}>
            <Col lg={4} md={8} sm={12} xs={24}>
              <div className="input-group">
                <fieldset id="mature">
                  <label className="title-label" htmlFor="public">
                    Mature content
                  </label>

                  <div className="radio">
                    <Space size={32}>
                      <div className="radio__1">
                        <input
                          id="radio-1"
                          type="radio"
                          name="mature"
                          value={true}
                          onChange={() =>
                            setStoryInfo({
                              ...storyInfo,
                              mature: true,
                            })
                          }
                          checked={storyInfo.mature ? true : false}
                        />
                        <label htmlFor="radio-1"></label>
                        <p>Yes</p>
                      </div>

                      <div className="radio__2">
                        <input
                          id="radio-2"
                          type="radio"
                          name="mature"
                          value={false}
                          onChange={() =>
                            setStoryInfo({
                              ...storyInfo,
                              mature: false,
                            })
                          }
                          checked={storyInfo.mature ? false : true}
                        />
                        <label htmlFor="radio-2"></label>
                        <p>No</p>
                      </div>
                    </Space>
                  </div>
                </fieldset>
              </div>
            </Col>
            <Col lg={4} md={8} sm={12} xs={24}>
              <div className="input-group">
                <fieldset id="public">
                  <label className="title-label" htmlFor="public">
                    Visibilty
                  </label>
                  <div className="radio">
                    <Space size={32}>
                      <div className="radio__1">
                        <input
                          id="radio-3"
                          type="radio"
                          name="public"
                          value={true}
                          onChange={() =>
                            setStoryInfo({
                              ...storyInfo,
                              public: true,
                            })
                          }
                          checked={storyInfo.public ? true : false}
                        />
                        <label htmlFor="radio-3"></label>
                        <p>Public</p>
                      </div>

                      <div className="radio__2">
                        <input
                          id="radio-4"
                          type="radio"
                          name="public"
                          value={false}
                          onChange={() =>
                            setStoryInfo({
                              ...storyInfo,
                              public: false,
                            })
                          }
                          checked={storyInfo.public ? false : true}
                        />
                        <label htmlFor="radio-4"></label>
                        <p>Private</p>
                      </div>
                    </Space>
                  </div>
                </fieldset>
              </div>
            </Col>

            <Col lg={8} md={12} sm={24} xs={24}>
              <label className="title-label" htmlFor="tags">
                Tags
              </label>
              <Tags
                storyInfo={storyInfo}
                tags={storyInfo.tags}
                setTags={setStoryInfo}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16, 16]}>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Form.Item label="Main Characters" name="mainCharacters">
                <div className="input-group">
                  <Row>
                    <Col span={22}>
                      <select
                        value={currentChar}
                        disabled={
                          storyInfo.mainCharacters?.length >= 5 ? true : false
                        }
                        onChange={(e) => setCurrentChar(e.target.value)}
                        className="form-input select-add-input"
                      >
                        <option selected value="" disabled>
                          Choose
                        </option>
                        {props.characters
                          ?.filter(
                            (c) => !storyInfo.mainCharacters?.includes(c.id)
                          )
                          .map((char) => (
                            <option
                              key={char.id}
                              value={char.id}
                            >{`${char.firstname} ${char.lastname}`}</option>
                          ))}
                      </select>
                    </Col>
                    <Col span={2}>
                      <div
                        className="form-input select-add-input-iconbox"
                        onClick={addCharacter}
                      >
                        <span>+</span>
                      </div>
                    </Col>
                    <small>You can add up to 5 main characters</small>
                  </Row>
                </div>
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <Row gutter={[16, 16]}>
                {props.characters
                  .filter((c) => storyInfo.mainCharacters?.indexOf(c.id) !== -1)
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
          <Divider />
          <Row align="bottom" gutter={[24, 24]}>
            <Col md={12} sm={24} xs={24}>
              <div className="input-group">
                <label htmlFor="banner">Upload a cover</label>
                <UploadImage
                  storyInfo={storyInfo}
                  onChangeFunc={setStoryInfo}
                />
              </div>
            </Col>

            <InputGroup
              required={false}
              sm={24}
              xs={24}
              md={12}
              lg={12}
              id="banner"
              type="text"
              name="banner"
              title="Or submit a link to an image"
              placeholder=""
              value={
                typeof storyInfo.banner !== "object" ? storyInfo.banner : ""
              }
              onChangeFunc={setStoryInfo}
              storyInfo={storyInfo}
            />
          </Row>
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
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters.userCharacters,
  confirmMessage: state.stories.message,
  storyId: state.stories.storyId,
  loading: state.stories.loadingStory,
  story: state.stories.story,
});

export default connect(mapStateToProps, { getUserCharacters, getStory })(
  EditStory
);
