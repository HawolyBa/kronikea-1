import { Row, Col, Empty } from "antd";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Card from "../common/Card";
import UserCard from "../common/UserCard";
import CharacterCard from "../common/CharacterCard";
import LocationCard from "../common/LocationCard";
import { dummy } from "../../utils/dummy";

const StoriesGrid = ({ stories, type, gutter, columnsCountBreakPoints }) => {
  return stories.length > 0 ? (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={gutter}>
        {stories.map((story) => (
          <Link key={story.id} href={`/story/${story.id}`}>
            <a>
              <Card story={story} type={type} />
            </a>
          </Link>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  ) : (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No stories yet" />
  );
};

const MiniGrid = ({ stories, type, gutter, columnsCountBreakPoints }) => {
  return stories.length > 0 ? (
    stories.map((story) => (
      <figure key={story.id} className="mini-card">
        <img src={story.banner ? story.banner : dummy.cover} alt="image" />
        <figcaption>
          <div className="cat-block">
            <span className="cat">Drama</span>
          </div>
          <h3>{story.title}</h3>
        </figcaption>
      </figure>
    ))
  ) : (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No stories yet" />
  );
};

const UserGrid = ({ users, xl, lg, xs, sm, md, gutter }) => {
  return users.length > 0 ? (
    <Row gutter={gutter}>
      {users.map((u) => (
        <Col key={u.id} xl={xl} lg={lg} md={md} sm={sm} xs={xs}>
          <UserCard user={u} />
        </Col>
      ))}
    </Row>
  ) : (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description="No followers yet"
    />
  );
};

const LocationGrid = ({
  locations,
  gutter,
  xl,
  xxl,
  lg,
  md,
  sm,
  xs,
  type,
  columnsCountBreakPoints,
}) => {
  return locations.length > 0 ? (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={gutter}>
        {locations.map((c) => (
          <LocationCard key={c.id} location={c} type={type} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  ) : (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description="No locations yet"
    />
  );
};

const CharacterGrid = ({
  gutter,
  xxl,
  xl,
  lg,
  md,
  sm,
  xs,
  characters,
  type,
  columnsCountBreakPoints,
}) => {
  return characters.length > 0 ? (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={gutter}>
        {characters.map((c) => (
          <Link key={c.id} href={`/character/${c.id}`}>
            <a>
              <CharacterCard character={c} type={type} />
            </a>
          </Link>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  ) : (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description="No characters yet"
    />
  );
};

export { StoriesGrid, CharacterGrid, UserGrid, LocationGrid, MiniGrid };
