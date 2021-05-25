import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { connect } from "react-redux";
import { Row, Col, Divider } from "antd";

import { getStoriesByCategory } from "../../../redux/actions/storiesActions";

import { CATEGORIES } from "../../../utils/constants";
import Pagination from "../../../components/common/Pagination";
import LoadingScreen from "../../../components/hoc/LoadingScreen";

const Category = (props) => {
  const router = useRouter();
  const { cat } = router.query;
  const { loading, stories } = props;

  React.useEffect(() => {
    props.getStoriesByCategory(cat);
  }, [cat]);
  console.log(stories);
  return (
    <div className="category">
      <h2 className="side-heading">Category: {cat.toUpperCase()}</h2>
      <Divider />
      <Row gutter={24}>
        <Col md={4}>
          <div className="categories-col">
            <h3 className="side-heading">Categories</h3>
            <ul>
              {CATEGORIES.sort((a, b) => {
                if (a.value < b.value) {
                  return -1;
                }
                if (a.value > b.value) {
                  return 1;
                }
                return 0;
              }).map((cat) => (
                <li key={cat.value}>
                  <Link href={`/category/${cat.value}`}>
                    <a>{cat.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col md={20}>
          <LoadingScreen loading={loading}>
            <Pagination
              data={stories}
              gutter={"16px"}
              columnsCountBreakPoints={{
                350: 1,
                750: 2,
                900: 3,
                1200: 3,
              }}
              itemType={"stories"}
            />
          </LoadingScreen>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stories: state.stories.storiesFromSearch,
  loading: state.stories.loading,
});

export default connect(mapStateToProps, { getStoriesByCategory })(Category);
