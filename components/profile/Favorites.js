import Link from "next/link";
import { Row, Col, Tooltip, Spin } from "antd";

const Favorites = ({ favs }) => {
  return (
    <div className="favorites">
      <Row gutter={[15, 10]} justify="space-between">
        {favs.isLoading ? (
          <Spin />
        ) : (
          favs.authors.slice(0, 12).map((fav) => (
            <Col key={fav.id} span={6}>
              <Link href={`/profile/${fav.id}`}>
                <a className="fav-item">
                  <Tooltip title={fav.username} color={"#6d5dfc"}>
                    <div className="img-container-border img-container">
                      {fav.image ? (
                        <img src={fav.image} alt={`photo ${fav.username}`} />
                      ) : (
                        <ion-icon name="person"></ion-icon>
                      )}
                    </div>
                  </Tooltip>
                </a>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Favorites;
