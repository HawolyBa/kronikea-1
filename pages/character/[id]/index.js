import React from "react";
import Link from "next/link";
import { Row, Col, Image, Divider, Space } from "antd";

import { dummy } from "../../../utils/dummy";
import Comments from "../../../components/chapter/Comments";
import CharacterCard from "../../../components/common/CharacterCard";

const Character = () => {
  return (
    <div className="main-character">
      <section className="character-page">
        <div className="character-meta">
          <Link href="/profile/1">
            <a>
              <Space align="center">
                <div className="avatar">
                  <img src={dummy.person} alt={dummy.name} />
                </div>
                <h5>{dummy.name}</h5>
              </Space>
            </a>
          </Link>
          <div className="like-btn">
            <Space size={5} align="center">
              <ion-icon name="heart"></ion-icon>
              <span>Like</span>
            </Space>
          </div>
        </div>
        <h2>Konrad Frei</h2>
        <div className="character-image">
          <div className="img-container">
            <Image
              src={
                "https://i.pinimg.com/564x/4b/fc/c9/4bfcc9e9c4ef6da6c290aade02e83f01.jpg"
              }
              width={"100%"}
              height={600}
              alt="character"
            />
          </div>
        </div>
        <div className="character-description">
          <h3 className="desc-title">Biography</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            accusamus, molestiae nulla assumenda ducimus odio. Autem quos,
            libero dolorem maxime laboriosam temporibus. Consectetur dolorem
            atque reprehenderit, nobis dolore sint porro.
          </p>
        </div>
        <Divider />
        <div className="character-relationships">
          <h3 className="desc-title">Relationships</h3>
          <Row gutter={[16, 16]}>
            <Col md={8} lg={6}>
              <CharacterCard />
            </Col>
            <Col md={8} lg={6}>
              <CharacterCard />
            </Col>
            <Col md={8} lg={6}>
              <CharacterCard />
            </Col>
            <Col md={8} lg={6}>
              <CharacterCard />
            </Col>
            <Col md={8} lg={6}>
              <CharacterCard />
            </Col>
          </Row>
        </div>
      </section>
      <section className="character-feedback">
        <h3 className="side-heading">Feedback</h3>
        <Comments />
      </section>
    </div>
  );
};

export default Character;
