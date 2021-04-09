import React from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Divider } from "antd";

import { getStoriesFromSearch } from "../../../../redux/actions/storiesActions";

import Pagination from "../../../../components/common/Pagination";
import LoadingScreen from "../../../../components/hoc/LoadingScreen";

const StorySearch = (props) => {
  const router = useRouter();
  const { stories, loading } = props;

  React.useEffect(() => {
    if (router.query.storyid) {
      props.getStoriesFromSearch(router.query.storyid);
    }
  }, [router.query.storyid]);

  return (
    <div className="search-page">
      <h2 className="side-heading">
        Search results for: {router.query.storyid}
      </h2>
      <Divider />

      <LoadingScreen loading={loading}>
        <h4>
          {stories.length} result{stories.length > 1 ? "s" : ""}
        </h4>
        <Pagination
          data={stories}
          gutter={"16px"}
          columnsCountBreakPoints={{
            350: 1,
            750: 2,
            900: 3,
            1200: 4,
          }}
          itemType={"stories"}
        />
      </LoadingScreen>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stories: state.stories.storiesFromSearch,
  loading: state.stories.loading,
});

export default connect(mapStateToProps, { getStoriesFromSearch })(StorySearch);
