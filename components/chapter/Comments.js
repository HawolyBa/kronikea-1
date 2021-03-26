import {
  Comment,
  Tooltip,
  Avatar,
  Input,
  Divider,
  Button,
  Row,
  Col,
  Popconfirm,
} from "antd";
import Link from "next/link";
import moment from "moment";
import Report from "../common/Report";
import React from "react";

const Comments = ({
  comments,
  auth,
  deleteComment,
  submitComment,
  chapid,
  storyId,
  authorId,
  title,
}) => {
  const [commentBody, setCommentBody] = React.useState("");
  const [toggleCommentForm, setToggleCommentForm] = React.useState(false);
  const [toggleAnswerForm, setToggleAnswerForm] = React.useState(false);
  const [clickedForm, setClickedForm] = React.useState("");

  const topComments = comments.filter((comm) => !comm.answer);
  const responses = comments.filter((comm) => comm.answer);
  const allComments = topComments.map((comm) => {
    let res = [];
    responses.forEach((response) => {
      if (response.commentAnsweredId === comm.id) {
        res.push(response);
      }
    });
    return {
      ...comm,
      responses: res.sort((a, b) =>
        a.createdAt && b.createdAt && typeof a.createdAt === "object"
          ? new Date(a.createdAt.seconds * 1000) -
            new Date(b.createdAt.seconds * 1000)
          : new Date(a.createdAt.seconds) - new Date(b.createdAt)
      ),
    };
  });

  const commentToggle = (id) => {
    setClickedForm(id);
    setToggleCommentForm(!toggleCommentForm);
  };

  const answerToggle = (id) => {
    setClickedForm(id);
    setToggleAnswerForm(!toggleAnswerForm);
  };

  const submit = () => {
    submitComment({
      content: commentBody,
      username: auth.user.username,
      userId: auth.user.uid,
      answer: false,
      chapterId: chapid,
      storyId: storyId,
      title,
    });
    setCommentBody("");
  };

  const submitAnswer = (id, username, userId, e) => {
    e.preventDefault();
    submitComment({
      userId: auth.user.uid,
      username: auth.user.username,
      commentAnsweredId: id,
      answeredToId: userId,
      content: `@${username} ${commentBody}`,
      storyId: storyId,
      chapterId: chapid,
      authorId: authorId,
      title: title,
      answeredTo: username,
      answer: true,
    });

    setCommentBody("");
    answerToggle();
  };

  return (
    <section className="comments">
      {auth.user ? (
        <>
          <h3>Add a comment</h3>
          <Row>
            <Col md={24}>
              <Input.TextArea
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                autoSize={{ minRows: 5 }}
                showCount={true}
                maxLength={800}
              ></Input.TextArea>
            </Col>
            <Col md={24}>
              <Button onClick={submit} type="primary">
                Comment
              </Button>
            </Col>
          </Row>
          <Divider />
        </>
      ) : (
        <p style={{ marginBottom: "20px" }}>
          You need to be logged in to post a comment.{" "}
          <Link href={"/auth"}>
            <a>Click here to login or create an account !</a>
          </Link>
        </p>
      )}
      <h3>{comments.length} Comments</h3>
      {allComments.map((comment) => (
        <React.Fragment key={comment.id}>
          <Comment
            actions={[
              auth && auth.user && (
                <span
                  key="comment-basic-reply-to"
                  onClick={commentToggle.bind(null, comment.id)}
                >
                  Reply{" "}
                </span>
              ),
              comment.userId === auth.user.uid && (
                <Popconfirm
                  title="Do you want to delete this comment ?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => deleteComment(comment.id, chapid)}
                >
                  <span>Delete</span>
                </Popconfirm>
              ),
              auth.user && auth.user.uid !== comment.userId && (
                <Report type="comment" data={comment} />
              ),
            ]}
            author={
              <Link href={`/profile/${comment.userId}`}>
                <a>{comment.username}</a>
              </Link>
            }
            avatar={
              <Link href={`/profile/${comment.userId}`}>
                <a>
                  <Avatar src={comment.userImage} alt={comment.username} />
                </a>
              </Link>
            }
            content={<p>{comment.content}</p>}
            datetime={
              <Tooltip
                title={
                  comment.createdAt && typeof comment.createdAt === "object"
                    ? moment
                        .unix(comment.createdAt.seconds)
                        .format("YYYY-MM-DD HH:mm:ss")
                    : moment(comment.createdAt).format("YYYY-MM-DD HH:mm:ss")
                }
              >
                <span>
                  {comment.createdAt && typeof comment.createdAt === "object"
                    ? moment.unix(comment.createdAt.seconds).fromNow()
                    : moment(comment.createdAt).fromNow()}
                </span>
              </Tooltip>
            }
          >
            {comment.responses
              // .sort((a, b) => {
              //   if (a.createdAt) {
              //     if (typeof a.createdAt === "object") {
              //       return (
              //         new Date(a.createdAt.seconds * 1000) -
              //         new Date(b.createdAt.seconds * 1000)
              //       );
              //     } else
              //       return (
              //         new Date(a.createdAt.seconds) - new Date(b.createdAt)
              //       );
              //   }
              // })
              .map((c) => (
                <React.Fragment key={c.id}>
                  <Comment
                    actions={[
                      auth && auth.user && (
                        <span
                          key="comment-basic-reply-to"
                          onClick={answerToggle.bind(null, c.id)}
                        >
                          Reply{" "}
                        </span>
                      ),
                      comment.userId === auth.user.uid && (
                        <Popconfirm
                          title="Do you want to delete this comment ?"
                          okText="Yes"
                          cancelText="No"
                          onConfirm={() => deleteComment(c.id, chapid)}
                        >
                          <span>Delete</span>
                        </Popconfirm>
                      ),
                      auth.user && auth.user.uid !== c.userId && (
                        <Report type="comment" data={comment} />
                      ),
                    ]}
                    author={
                      <Link href={`/profile/${c.userId}`}>
                        <a>{c.username}</a>
                      </Link>
                    }
                    avatar={
                      <Link href={`/profile/${c.userId}`}>
                        <a>
                          <Avatar src={c.userImage} alt={c.username} />
                        </a>
                      </Link>
                    }
                    content={<p>{c.content}</p>}
                    datetime={
                      <Tooltip
                        title={
                          c.createdAt && typeof c.createdAt === "object"
                            ? moment
                                .unix(c.createdAt.seconds)
                                .format("YYYY-MM-DD HH:mm:ss")
                            : moment(c.createdAt).format("YYYY-MM-DD HH:mm:ss")
                        }
                      >
                        <span>
                          {c.createdAt && typeof c.createdAt === "object"
                            ? moment.unix(c.createdAt.seconds).fromNow()
                            : moment(c.createdAt).fromNow()}
                        </span>
                      </Tooltip>
                    }
                  />
                  {clickedForm === c.id && toggleAnswerForm && (
                    <>
                      <Row>
                        <Col md={24}>
                          <Input.TextArea
                            value={commentBody}
                            onChange={(e) => setCommentBody(e.target.value)}
                            autoSize={{ minRows: 5 }}
                            showCount={true}
                            maxLength={800}
                            placeholder={`@${c.username}`}
                          ></Input.TextArea>
                        </Col>
                        <Col md={24}>
                          <Button
                            onClick={submitAnswer.bind(
                              null,
                              comment.id,
                              c.username,
                              c.userId
                            )}
                            type="primary"
                          >
                            Comment
                          </Button>
                        </Col>
                      </Row>
                      <Divider />
                    </>
                  )}
                </React.Fragment>
              ))}
          </Comment>

          {clickedForm === comment.id && toggleCommentForm ? (
            <>
              <Row>
                <Col md={24}>
                  <Input.TextArea
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                    autoSize={{ minRows: 5 }}
                    showCount={true}
                    maxLength={800}
                    placeholder={`@${comment.username}`}
                  ></Input.TextArea>
                </Col>
                <Col md={24}>
                  <Button
                    onClick={submitAnswer.bind(
                      null,
                      comment.id,
                      comment.username,
                      comment.userId
                    )}
                    type="primary"
                  >
                    Comment
                  </Button>
                </Col>
              </Row>
              <Divider />
            </>
          ) : null}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Comments;
