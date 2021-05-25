import React from "react";
import { connect } from "react-redux";
import { Row, Col, PageHeader, Button, Switch, Divider, Drawer } from "antd";
import { SlidersOutlined } from "@ant-design/icons";

import { getStoriesByLetter } from "../redux/actions/storiesActions";

import { StoriesGrid } from "../components/common/Grid";
import LoadingScreen from "../components/hoc/LoadingScreen";
import Filter from "../components/explore/Filter";
import AlphabetRow from "../components/explore/AlphabetRow";

const Explore = (props) => {
  const { stories, loading } = props;
  const [currentStories, setCurrentStories] = React.useState([]);
  const [currentLetter, setCurrentLetter] = React.useState("a");
  const [currentCategory, setCurrentCategory] = React.useState("");
  const [currentStatus, setCurrentStatus] = React.useState("");
  const [currentLanguage, setCurrentLanguage] = React.useState("");
  const [mature, setMature] = React.useState(true);
  const [openFilter, setOpenFilter] = React.useState(false);
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  React.useEffect(() => {
    props.getStoriesByLetter(currentLetter, alphabet);
  }, [currentLetter]);

  React.useEffect(() => {
    setCurrentStories(
      stories.filter((story) => (!mature ? !story.mature : story))
    );
    setCurrentCategory("");
    setCurrentStatus("");
    setCurrentLanguage("");
  }, [stories]);

  React.useEffect(() => {
    setCurrentStories(
      stories.filter((story) => (!mature ? !story.mature : story))
    );
  }, [mature]);

  const setFilters = () => {
    setCurrentStories(
      stories
        .filter((story) =>
          currentCategory
            ? story.category
              ? story.category.includes(currentCategory)
              : story.categories.includes(currentCategory)
            : story
        )
        .filter((story) =>
          currentLanguage ? story.language === currentLanguage : story
        )
        .filter((story) =>
          currentStatus ? story.status === currentStatus : story
        )
        .filter((story) => (!mature ? !story.mature : story))
    );
    setOpenFilter(false);
  };

  return (
    <>
      <div className="explore-page">
        <PageHeader
          title={`Explore`}
          extra={
            <Button onClick={setOpenFilter} icon={<SlidersOutlined />}>
              Filter
            </Button>
          }
        />
        <Row gutter={[32, 24]}>
          <Col span={24}>
            <AlphabetRow
              alphabet={alphabet}
              currentLetter={currentLetter}
              setCurrentLetter={setCurrentLetter}
            />
            <div>
              <span>Mature content ? </span>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                defaultChecked={mature}
                onChange={setMature}
              />
            </div>
            <Divider />
            <LoadingScreen loading={loading}>
              <StoriesGrid
                stories={currentStories}
                gutter="16px"
                columnsCountBreakPoints={{
                  1600: 4,
                  1200: 4,
                  900: 3,
                  750: 2,
                  600: 2,
                  350: 1,
                }}
              />
            </LoadingScreen>
          </Col>
        </Row>
      </div>
      <Drawer
        title="Filter Stories"
        placement="right"
        closable={true}
        onClose={() => setOpenFilter(false)}
        visible={openFilter}
        width={"30%"}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              onClick={() => setOpenFilter(false)}
              style={{ marginRight: 8 }}
            >
              Cancel
            </Button>
            <Button onClick={setFilters} type="primary">
              Set filters
            </Button>
          </div>
        }
      >
        <Filter
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          currentStatus={currentStatus}
          setCurrentStatus={setCurrentStatus}
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
          mature={mature}
          setMature={setMature}
        />
      </Drawer>
    </>
  );
};

const mapStateToProps = (state) => ({
  stories: state.stories.storiesFromSearch,
  loading: state.stories.loading,
});

export default connect(mapStateToProps, { getStoriesByLetter })(Explore);
