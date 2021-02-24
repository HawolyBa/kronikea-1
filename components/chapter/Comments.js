import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";

import { dummy } from "../../utils/dummy";

const Comments = () => {
  return (
    <section className="comments">
      <h3>12 Comments</h3>
      <Comment
        actions={[<span key="comment-basic-reply-to">Reply </span>]}
        author={<a>Han Solo</a>}
        avatar={<Avatar src={dummy.person} alt={dummy.name} />}
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    </section>
  );
};

export default Comments;
