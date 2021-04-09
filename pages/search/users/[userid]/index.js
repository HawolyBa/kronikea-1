import React from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Divider } from "antd";

import { getUsersFromSearch } from "../../../../redux/actions/userActions";

import Pagination from "../../../../components/common/Pagination";
import LoadingScreen from "../../../../components/hoc/LoadingScreen";

const UserSearch = (props) => {
  const router = useRouter();
  const { users, loading } = props;

  React.useEffect(() => {
    if (router.query.userid) {
      props.getUsersFromSearch(router.query.userid);
    }
  }, [router.query.userid]);

  return (
    <div className="search-page">
      <h2 className="side-heading">
        Search results for: {router.query.userid}
      </h2>
      <Divider />

      <LoadingScreen loading={loading}>
        <h4>
          {users.length} result{users.length > 1 ? "s" : ""}
        </h4>
        <Pagination
          data={users}
          xl={4}
          lg={6}
          md={8}
          sm={12}
          xs={12}
          gutter={[12, 16]}
          itemType={"users"}
        />
      </LoadingScreen>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.auth.usersFromSearch,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { getUsersFromSearch })(UserSearch);
