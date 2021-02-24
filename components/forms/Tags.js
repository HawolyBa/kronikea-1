import { Tag, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Tags = () => {
  const inputButton = React.useRef();
  const editInputButton = React.useRef();
  const [tags, setTags] = React.useState(["Unremovable", "Tag 2", "Tag 3"]);
  const [inputVisible, setInputVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [editInputIndex, setEditInputIndex] = React.useState(-1);
  const [editInputValue, setEditInputValue] = React.useState("");

  React.useEffect(() => {
    console.log(inputButton.current);
  }, [inputButton]);

  const handleClose = (removedTag) =>
    setTags(tags.filter((tag) => tags !== removedTag));

  const showInput = () => {
    setInputVisible(true);
    //console.log();
    //editInputButton.current.focus();
    //inputButton.current.focus();
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleInputConfirm = () => {
    let newTags = tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      newTags = [...newTags, inputValue];
    }

    setTags(newTags);
    setInputValue("");
    setInputVisible(false);
  };

  const handleEditInputChange = (e) => setEditInputValue(e.target.value);

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue("");
  };

  const keyPress = (e) => {
    console.log(e.key);
  };

  return (
    <>
      {tags?.map((tag, i) => {
        if (editInputIndex === i) {
          return (
            <input
              key={i}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
              value={editInputValue}
              ref={editInputButton}
              className="form-input"
            />
          );
        }
        const isLongTag = tag.length > 20;
        const TagElem = (
          <Tag
            onClose={() => handleClose(tag)}
            closable={true}
            key={tag}
            className="edit-tag"
          >
            <span
              onDoubleClick={(e) => {
                if (i !== 0) {
                  setEditInputIndex(i);
                  setEditInputValue(tag);
                  editInputButton.focus();
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {TagElem}
          </Tooltip>
        ) : (
          TagElem
        );
      })}
      {inputVisible && (
        <input
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleInputConfirm();
            }
          }}
          value={inputValue}
          type="text"
          ref={inputButton}
          className="form-input"
        />
      )}
      {!inputVisible && (
        <Tag className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  );
};

export default Tags;
