import React from "react";
import Link from "next/link";
import { Col, Popconfirm, Row, Space } from "antd";

const Chapters = ({ chapters, id, deleteChapter, loading, auth }) => {
  return (
    <>
      <div className="chapters">
        {!loading &&
          chapters.map((item) => (
            <div key={item.id} className="chapter" data-aos="flip-left">
              <Row align="middle" gutter={60} justify="space-between">
                <Col>
                  <h4 className={!item.status ? "draft" : ""}>
                    {item.number}. {item.title} {!item.status && <i>(draft)</i>}{" "}
                    -{" "}
                    <span className="comments">
                      {item.commentsCount} comments
                    </span>
                  </h4>
                </Col>
                <Col>
                  <div className="chapter-buttons">
                    <Space size={20} align="center">
                      {item.status && (
                        <Link href={`/story/${id}/chapter/${item.id}`}>
                          <a className="btn read-btn">Read</a>
                        </Link>
                      )}
                      {auth.user && auth.user.uid === item.authorId && (
                        <>
                          <Link href={`/story/${id}/chapter/${item.id}/edit`}>
                            <a className="btn edit-btn">Edit</a>
                          </Link>
                          <Popconfirm
                            title="Do you really want to delete this chapter ?"
                            onConfirm={() => deleteChapter(item.id)}
                          >
                            <ion-icon name="trash-outline"></ion-icon>
                          </Popconfirm>
                        </>
                      )}
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
