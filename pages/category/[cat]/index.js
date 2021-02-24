import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Row, Col } from "antd";

import { StoryGrid } from "../../../components/common/Grid";
import { CATEGORIES } from "../../../utils/constants";

const Category = () => {
  const router = useRouter();
  const { cat } = router.query;

  return (
    <div className="category">
      <h2>Category: {cat.toUpperCase()}</h2>
      <Row gutter={24}>
        <Col md={4}>
          <div className="categories-col">
            <h3 className="side-heading">Categories</h3>
            <ul>
              {CATEGORIES.map((cat) => (
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
          <StoryGrid />
        </Col>
      </Row>
    </div>
  );
};

export default Category;
