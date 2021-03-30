import React, { createElement } from "react";
import Link from "next/link";
import moment from "moment";
import {
  Input,
  Modal,
  Comment,
  Tooltip,
  Popconfirm,
  Avatar,
  Badge,
  Affix,
} from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

import { dummy } from "../../utils/dummy";
import LoadingScreen from "../hoc/LoadingScreen";
import Report from "../common/Report";

const Comments = ({
  comments,
  auth,
  submit,
  character,
  loadingComments,
  deleteComment,
  alreadyPosted,
  userComment,
  rateComment,
}) => {
  const [visible, setVisible] = React.useState(false);
  const [content, setContent] = React.useState("");

  const submitComment = (e) => {
    e.preventDefault();
    submit(
      {
        userId: auth.user.uid,
        username: auth.user.username,
        content,
        characterId: character.id,
        authorId: character.authorId,
        answer: false,
        likedBy: [],
        dislikedBy,
        voters: [],
      },
      alreadyPosted
    );
    setVisible(false);
    setContent("");
  };

  const closeModal = () => {
    setVisible(false);
    setContent("");
  };

  const like = (userId, commentId, type) => {
    rateComment(comment.id, type);
  };

  const count = userComment ? comments.length + 1 : comments.length;

  return (
    <>
      <section className="character-feedback">
        <header className="feedback-header">
          <h3 className="side-heading">{count} Feedback</h3>
          {!alreadyPosted && (
            <div className="add-comment" onClick={() => setVisible(true)}>
              <ion-icon name="add-circle"></ion-icon>
              <span>Leave a comment</span>
            </div>
          )}
        </header>
        <LoadingScreen loading={loadingComments}>
          <div className="comments-block">
            {userComment && (
              <Badge.Ribbon text="Your feedback">
                <Comment
                  className="author-comment"
                  actions={[
                    userComment.userId === auth.user.uid && (
                      <Popconfirm
                        title="Do you want to delete this comment ?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => deleteComment(userComment.id)}
                      >
                        <span>Delete</span>
                      </Popconfirm>
                    ),
                    auth.user && auth.user.uid !== userComment.userId && (
                      <Report type="comment" data={userComment} />
                    ),
                  ]}
                  author={
                    <Link href={`/profile/${userComment.userId}`}>
                      <a>{userComment.username}</a>
                    </Link>
                  }
                  avatar={
                    <Link href={`/profile/${userComment.userId}`}>
                      <a>
                        <Avatar
                          src={
                            userComment.userImage
                              ? userComment.userImage
                              : dummy.avatar
                          }
                          alt={userComment.username}
                        />
                      </a>
                    </Link>
                  }
                  content={<p>{userComment.content}</p>}
                  datetime={
                    <Tooltip
                      title={
                        userComment.createdAt &&
                        typeof userComment.createdAt === "object"
                          ? moment
                              .unix(userComment.createdAt.seconds)
                              .format("YYYY-MM-DD HH:mm:ss")
                          : moment(userComment.createdAt).format(
                              "YYYY-MM-DD HH:mm:ss"
                            )
                      }
                    >
                      <span>
                        {userComment.createdAt &&
                        typeof userComment.createdAt === "object"
                          ? moment.unix(userComment.createdAt.seconds).fromNow()
                          : moment(userComment.createdAt).fromNow()}
                      </span>
                    </Tooltip>
                  }
                />
              </Badge.Ribbon>
            )}
            {comments.length > 0 &&
              comments.map((comment) => (
                <Comment
                  key={comment.id}
                  actions={[
                    // auth && auth.user && (
                    //   <span
                    //     key="comment-basic-reply-to"
                    //     onClick={commentToggle.bind(null, comment.id)}
                    //   >
                    //     Reply{" "}
                    //   </span>
                    // ),
                    <Tooltip key="comment-basic-like" title="Like">
                      <span onClick={() => rateComment(comment.id, "like")}>
                        {createElement(
                          comment.likedBy.includes(auth.user.uid)
                            ? LikeFilled
                            : LikeOutlined
                        )}
                        <span className="comment-action">
                          {" "}
                          {comment.likedBy.length}
                        </span>
                      </span>
                    </Tooltip>,
                    <Tooltip key="comment-basic-dislike" title="Dislike">
                      <span onClick={() => rateComment(comment.id, "dislike")}>
                        {React.createElement(
                          comment.dislikedBy.includes(auth.user.uid)
                            ? DislikeFilled
                            : DislikeOutlined
                        )}
                        <span className="comment-action">
                          {" "}
                          {comment.dislikedBy.length}
                        </span>
                      </span>
                    </Tooltip>,
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
                        <Avatar
                          src={
                            comment.userImage ? comment.userImage : dummy.avatar
                          }
                          alt={comment.username}
                        />
                      </a>
                    </Link>
                  }
                  content={<p>{comment.content}</p>}
                  datetime={
                    <Tooltip
                      title={
                        comment.createdAt &&
                        typeof comment.createdAt === "object"
                          ? moment
                              .unix(comment.createdAt.seconds)
                              .format("YYYY-MM-DD HH:mm:ss")
                          : moment(comment.createdAt).format(
                              "YYYY-MM-DD HH:mm:ss"
                            )
                      }
                    >
                      <span>
                        {comment.createdAt &&
                        typeof comment.createdAt === "object"
                          ? moment.unix(comment.createdAt.seconds).fromNow()
                          : moment(comment.createdAt).fromNow()}
                      </span>
                    </Tooltip>
                  }
                />
              ))}
          </div>
        </LoadingScreen>
      </section>
      <Modal
        title={"Leave a new comment"}
        visible={visible}
        onCancel={closeModal}
        okText="Submit"
        onOk={submitComment}
      >
        <Input.TextArea
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></Input.TextArea>
      </Modal>
    </>
  );
};

export default Comments;
