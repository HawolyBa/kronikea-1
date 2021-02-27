import Link from "next/link";
import { Space } from "antd";

const UserCard = ({ user }) => {
  return (
    <Link href={`/profile/${user.id}`}>
      <a>
        <figure className="user-card" data-aos="flip-left">
          <Space direction="vertical" size={12} align="center">
            <div className="img-container">
              {user.image ? (
                <img src={user.image} alt={`photo ${user.username}`} />
              ) : (
                <ion-icon name="person"></ion-icon>
              )}
            </div>
            <figcaption>{user.username}</figcaption>
          </Space>
        </figure>
      </a>
    </Link>
  );
};

export default UserCard;
