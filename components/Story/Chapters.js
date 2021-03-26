import React from "react";
import { Col, Popconfirm, Row, Space } from "antd";

import WithLink from "../hoc/WithLink";

const Chapters = ({ chapters, id, deleteChapter, loading }) => {
  return (
    <>
      <h3 className="chap-title">Chapters</h3>
      <div className="chapters">
        {!loading &&
          chapters.map((item) => (
            <div key={item.id} className="chapter" data-aos="flip-left">
              <Row align="middle" gutter={60} justify="space-between">
                <Col>
                  <h4>
                    {item.number}. {item.title} -{" "}
                    <span className="comments">
                      {item.commentsCount} comments
                    </span>
                  </h4>
                </Col>
                <Col>
                  <div className="chapter-buttons">
                    <Space size={20} align="center">
                      <WithLink
                        className="btn read-btn"
                        link={`/story/${id}/chapter/${item.id}`}
                      >
                        Read
                      </WithLink>
                      <WithLink
                        className="btn edit-btn"
                        link={`/story/${id}/chapter/${item.id}/edit`}
                      >
                        Edit
                      </WithLink>
                      <Popconfirm
                        title="Do you really want to delete this chapter ?"
                        onConfirm={() => deleteChapter(item.id)}
                      >
                        <ion-icon name="trash-outline"></ion-icon>
                      </Popconfirm>
                    </Space>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
      </div>
    </>
  );
};

export default Chapters;
