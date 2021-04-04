import React from "react";
import Link from "next/link";
import moment from "moment";
import { Image, Col, Tag, Skeleton } from "antd";

import { LANGUAGES } from "../../utils/constants";
import { dummy } from "../../utils/dummy";

import Like from "../common/Like";

const Banner = ({
  loading,
  story,
  id,
  isFavorite,
  addStoryToFavorite,
  removeStoryFromFavorite,
  auth,
}) => {
  let lang = LANGUAGES.find(
    (l) => l.value.toLocaleLowerCase() === story.language
  );
  lang = lang ? lang.name : story.language;
  return (
    <Col sm={24} md={8} lg={6}>
      <div className="story-details">
        {!loading && (
          <>
            <div className="poster" data-aos="zoom-in">
              <Image
                src={story.banner ? story.banner : dummy.noImage}
                alt={`poster ${story.title}`}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <h2>{story.title}</h2>
            <p className="author">
              by{" "}
              <Link href={`/profile/${story.authorId}`}>
                <a>{story.authorName}</a>
              </Link>
            </p>
            <Like
              id={id}
              title={story.title}
              type="story"
              isFavorite={isFavorite}
              likeFunc={addStoryToFavorite}
              username={auth.user.username}
              removeFunc={removeStoryFromFavorite}
            />
            <h3>Summary</h3>
            <p className="summary">
              {story.summary ? story.summary : "No summary yet"}
            </p>
            <h3>Details</h3>
            <div className="details">
              <span>
                Posted on:{" "}
                {typeof story.createdAt === "object"
                  ? moment.unix(story.createdAt.seconds).format("YYYY-DD-MM")
                  : moment(story.createdAt).format("YYYY-DD-MM")}
              </span>
              <br />
              <span>
                Category:{" "}
                <Link href="/category/1">
                  <a>Drama</a>
                </Link>
              </span>
              <br />
              <span>Language: {lang}</span>
              <br />
              <span>Status: {story.status}</span>
              <br />
              <span>Copyright: {story.copyright}</span>
              <br />
              <span>Cover Copyright: {story.imageCopyright}</span>
              <br />
              <span>Mature content: {story.mature ? "YES" : "NO"}</span>
              <br />
            </div>
            <h3>Tags</h3>
            <div className="tags">
              {story.tags.map((tag) => (
                <Tag key={tag} color="#6d5dfc">{`#${tag}`}</Tag>
              ))}
            </div>
          </>
        )}
        <>
          {loading && (
            <Skeleton.Avatar
              loading={loading}
              shape="square"
              size={265}
              active
            />
          )}
          <Skeleton loading={loading} paragraph active />
          <Skeleton loading={loading} paragraph active />
        </>
      </div>
    </Col>
  );
};

export default Banner;
