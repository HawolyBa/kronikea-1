import React from "react";
import { Row, Col, Space, Divider, Form } from "antd";
import { connect } from "react-redux";

import {
  CATEGORIES,
  COPYRIGHTS,
  LANGUAGES,
  STATUS,
} from "../../utils/constants";
import { useAuth } from "../../hooks/userHooks";
import { getUserCharacters } from "../../redux/actions/charactersActions";

import InputGroup from "../../components/common/Input";
import SelectGroup from "../../components/common/Select";
import Tags from "../../components/forms/Tags";
import UploadImage from "../../components/forms/UploadImage";

const newStory = (props) => {
  const [storyInfo, setStoryInfo] = React.useState({
    title: "",
    categories: [],
    language: "",
    status: "",
    copyright: "",
    summary: "",
    mature: false,
    public: true,
    tags: [],
    mainCharacters: [],
    secondaryCharacters: [],
    image: "",
    imageCopyright: "",
  });
  const [currentChar, setCurrentChar] = React.useState("");
  const auth = useAuth();

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
  };

  const removeCharacter = (id) => {
    setStoryInfo({
      ...storyInfo,
      mainCharacters: storyInfo.mainCharacters.filter((c) => c !== id),
    });
  };

  console.log(currentChar);
  return (
    <div className="new-story custom-form">
      <div className="inner">
        <h2 className="side-heading">Add a new story</h2>
        <Form layout="vertical" className="form-group">
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
            />
          </Row>
          <div className="input-group">
            <label htmlFor="summary">Summary</label>
            <textarea
              rows="5"
              name="summary"
              id="summary"
              className="form-input"
              placeholder="Summarize your story here"
              value={storyInfo.summary}
              onChange={(e) =>
                setStoryInfo({ ...storyInfo, summary: e.target.value })
              }
            ></textarea>
          </div>
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
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Main Characters">
                <div className="input-group">
                  <Row>
                    <Col span={22}>
                      <select
                        disabled={
                          storyInfo.mainCharacters.length >= 5 ? true : false
                        }
                        onChange={(e) => setCurrentChar(e.target.value)}
                        className="form-input select-add-input"
                        name="mainCharacters"
                      >
                        {/* <option selected value="none" disabled hidden>
                          Choose
                        </option> */}
                        {props.characters
                          ?.filter(
                            (c) => !storyInfo.mainCharacters.includes(c.id)
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
            <Col lg={12} md={12} sm={24} xs={24}>
              {props.characters
                .filter((c) => storyInfo.mainCharacters.indexOf(c.id) !== -1)
                .map((char) => (
                  <p key={char.id}>
                    {`${char.firstname} ${char.lastname}`}{" "}
                    <span onClick={() => removeCharacter(char.id)}>x</span>
                  </p>
                ))}
            </Col>
          </Row>
          <Divider />
          <Row align="bottom" gutter={[24, 24]}>
            <Col md={12} sm={24} xs={24}>
              <div className="input-group">
                <label htmlFor="image">Upload a cover</label>
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
              id="image"
              type="text"
              name="image"
              title="Or submit a link to an image"
              placeholder=""
              value={storyInfo.image}
              onChangeFunc={setStoryInfo}
              storyInfo={storyInfo}
            />
          </Row>
          <Divider />
          <button type="submit">Create</button>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters.userCharacters,
});

export default connect(mapStateToProps, { getUserCharacters })(newStory);
