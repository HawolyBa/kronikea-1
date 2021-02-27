import { Row, Col } from "antd";

import Card from "../common/Card";

const Stories = ({ stories }) => {
  return (
    <div className="profile-stories">
      <Row wrap={true} gutter={[16, 16]}>
        {stories?.map((story) => (
          <Col key={story.id} xs={24} sm={12} lg={8} xl={6}>
            <Card story={story} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Stories;
