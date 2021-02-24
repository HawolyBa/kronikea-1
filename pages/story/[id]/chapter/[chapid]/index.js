import React from "react";
import Link from "next/link";
import { Row, Col, Divider, Space, PageHeader, Tooltip } from "antd";

import { dummy } from "../../../../../utils/dummy";
import Comments from "../../../../../components/chapter/Comments";
import CharacterCard from "../../../../../components/common/CharacterCard";
import LocationCard from "../../../../../components/common/LocationCard";

const Chapter = () => {
  return (
    <div className="main-chapter">
      <div className="chapter-page">
        <Tooltip title="Next Chapter" placement="bottom">
          <div className="icon custom-icon nav-btn next-btn">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </Tooltip>
        <Tooltip title="Previous Chapter" placement="bottom">
          <div className="icon custom-icon nav-btn prev-btn">
            <ion-icon name="chevron-back-circle"></ion-icon>
          </div>
        </Tooltip>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Back to story"
        />
        <h2>1. Chapter 1</h2>
        <div className="meta">
          <Divider orientation="left">
            <Link href="/profile/1">
              <a>
                <Space direction="vertical" align="center">
                  <div className="avatar">
                    <img src={dummy.person} alt={dummy.name} />
                  </div>
                  <h5>{dummy.name}</h5>
                </Space>
              </a>
            </Link>
          </Divider>
        </div>
        <section className="chapter-content">
          <p className="meta">Posted on August 20, 2020</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            suscipit distinctio quaerat rem animi commodi. Blanditiis
            praesentium obcaecati, esse corrupti aut fuga optio sapiente enim
            accusamus voluptas nemo, deleniti unde dignissimos quis ducimus?
            Earum saepe, eos quidem tempore eius obcaecati, voluptates culpa
            doloremque dolor et distinctio porro aliquam dolorem, magnam
            necessitatibus architecto exercitationem eligendi! Est, dolore
            pariatur. Quam veniam, quibusdam consequuntur atque deleniti,
            deserunt asperiores suscipit, unde veritatis qui non commodi omnis
            enim eum necessitatibus tempora voluptatum quod modi beatae sunt
            vitae. Reprehenderit minus eveniet sed dolore quo enim, fugiat nemo
            ea necessitatibus assumenda! Soluta, quidem delectus possimus
            corrupti distinctio architecto quasi reiciendis aut minima earum
            aperiam? Doloribus dolor vero, nobis minus, facere tempora incidunt
            voluptatem quos, quis eos esse animi maiores. In nisi corporis
            quisquam optio fuga quasi ex, vitae assumenda inventore laboriosam
            saepe modi necessitatibus quibusdam nobis velit est natus
            reprehenderit recusandae. Laboriosam veniam sunt voluptatem vitae
            aperiam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            suscipit distinctio quaerat rem animi commodi. Blanditiis
            praesentium obcaecati, esse corrupti aut fuga optio sapiente enim
            accusamus voluptas nemo, deleniti unde dignissimos quis ducimus?
            Earum saepe, eos quidem tempore eius obcaecati, voluptates culpa
            doloremque dolor et distinctio porro aliquam dolorem, magnam
            necessitatibus architecto exercitationem eligendi! Est, dolore
            pariatur. Quam veniam, quibusdam consequuntur atque deleniti,
            deserunt asperiores suscipit, unde veritatis qui non commodi omnis
            enim eum necessitatibus tempora voluptatum quod modi beatae sunt
            vitae. Reprehenderit minus eveniet sed dolore quo enim, fugiat nemo
            ea necessitatibus assumenda! Soluta, quidem delectus possimus
            corrupti distinctio architecto quasi reiciendis aut minima earum
            aperiam? Doloribus dolor vero, nobis minus, facere tempora incidunt
            voluptatem quos, quis eos esse animi maiores. In nisi corporis
            quisquam optio fuga quasi ex, vitae assumenda inventore laboriosam
            saepe modi necessitatibus quibusdam nobis velit est natus
            reprehenderit recusandae. Laboriosam veniam sunt voluptatem vitae
            aperiam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            suscipit distinctio quaerat rem animi commodi. Blanditiis
            praesentium obcaecati, esse corrupti aut fuga optio sapiente enim
            accusamus voluptas nemo, deleniti unde dignissimos quis ducimus?
            Earum saepe, eos quidem tempore eius obcaecati, voluptates culpa
            doloremque dolor et distinctio porro aliquam dolorem, magnam
            necessitatibus architecto exercitationem eligendi! Est, dolore
            pariatur. Quam veniam, quibusdam consequuntur atque deleniti,
            deserunt asperiores suscipit, unde veritatis qui non commodi omnis
            enim eum necessitatibus tempora voluptatum quod modi beatae sunt
            vitae. Reprehenderit minus eveniet sed dolore quo enim, fugiat nemo
            ea necessitatibus assumenda! Soluta, quidem delectus possimus
            corrupti distinctio architecto quasi reiciendis aut minima earum
            aperiam? Doloribus dolor vero, nobis minus, facere tempora incidunt
            voluptatem quos, quis eos esse animi maiores. In nisi corporis
            quisquam optio fuga quasi ex, vitae assumenda inventore laboriosam
            saepe modi necessitatibus quibusdam nobis velit est natus
            reprehenderit recusandae. Laboriosam veniam sunt voluptatem vitae
            aperiam?
          </p>
        </section>
        <Divider />
        <Comments />
      </div>
      <div className="main-chapter-details">
        <h3>Characters in this chapter</h3>
        <Row gutter={[12, 12]}>
          <Col md={12}>
            <CharacterCard />
          </Col>
          <Col md={12}>
            <CharacterCard />
          </Col>
          <Col md={12}>
            <CharacterCard />
          </Col>
          <Col md={12}>
            <CharacterCard />
          </Col>
        </Row>
        <Divider />
        <h3>Locations in this chapter</h3>
        <Row gutter={[12, 12]}>
          <Col md={12}>
            <LocationCard />
          </Col>
          <Col md={12}>
            <LocationCard />
          </Col>
          <Col md={12}>
            <LocationCard />
          </Col>
          <Col md={12}>
            <LocationCard />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Chapter;
