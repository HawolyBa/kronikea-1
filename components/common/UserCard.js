import { Space } from "antd";

const UserCard = () => {
  return (
    <figure className="user-card" data-aos="flip-left">
      <Space direction="vertical" size={12} align="center">
        <div className="img-container">
          <img src="https://i.pinimg.com/564x/70/50/a3/7050a30cc61e8a7f3f8677ebf9505db7.jpg" />
        </div>
        <figcaption>Aishwarya Rai</figcaption>
      </Space>
    </figure>
  );
};

export default UserCard;
