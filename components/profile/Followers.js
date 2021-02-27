import { Row, Col } from "antd";

import UserCard from "../common/UserCard";

const Followers = ({ md, sm, xs, items }) => {
  return (
    <div className="followers">
      <Row gutter={[20, 30]} align="center">
        {items?.map((item) => (
          <Col flex="auto" key={item.id} md={md} sm={sm} xs={xs}>
            <UserCard user={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Followers;
