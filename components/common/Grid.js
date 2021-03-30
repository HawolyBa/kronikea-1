import { Row, Col, Empty } from "antd";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Card from "../common/Card";
import UserCard from "../common/UserCard";
import CharacterCard from "../common/CharacterCard";
import LocationCard from "../common/LocationCard";

const StoriesGrid = ({ stories, type, gutter, columnsCountBreakPoints }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={gutter}>
        {stories.length > 0 ? (
          stories.map((story) => (
            <Link key={story.id} href={`/story/${story.id}`}>
              <a>
                <Card story={story} type={type} />
              </a>
            </Link>
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No stories yet"
          />
        )}
      </Masonry>
    </ResponsiveMasonry>
  );
};

const UserGrid = ({ users, lg, xs, sm, md, gutter }) => {
  return (
    <Row gutter={gutter}>
      {users.length > 0 ? (
        users.map((u) => (
          <Col key={u.id} lg={lg} md={md} sm={sm} xs={xs}>
            <UserCard user={u} />
          </Col>
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No followers yet"
        />
      )}
    </Row>
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
        {locations.length > 0 ? (
          locations.map((c) => <LocationCard location={c} type={type} />)
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No characters yet"
          />
        )}
      </Masonry>
    </ResponsiveMasonry>
  ) : (
    //   <Row gutter={gutter}>
    //     {locations.map((loc) => (
    //       <Col xl={xl} xxl={xxl} xs={xs} sm={sm} md={md} lg={lg} key={loc.id}>
    //         <LocationCard type={type} location={loc} />
    //       </Col>
    //     ))}
    //   </Row>
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
        {characters.length > 0 ? (
          characters.map((c) => (
            <Link key={c.id} href={`/character/${c.id}`}>
              <a>
                <CharacterCard character={c} type={type} />
              </a>
            </Link>
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No characters yet"
          />
        )}
      </Masonry>
    </ResponsiveMasonry>
  ) : (
    // <Row gutter={gutter}>
    //   {characters?.map((c) => (
    //     <Col key={c.id} xxl={xxl} xl={xl} lg={lg} md={md} sm={sm} xs={xs}>
    //       {type === "show" ? (
    //         <Link href={`/character/${c.id}`}>
    //           <a>
    //             <CharacterCard character={c} type={type} />
    //           </a>
    //         </Link>
    //       ) : (
    //         <CharacterCard character={c} type={type} />
    //       )}
    //     </Col>
    //   ))}
    // </Row>
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description="No characters yet"
    />
  );
};

export { StoriesGrid, CharacterGrid, UserGrid, LocationGrid };
