import { Tag, Tooltip, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Tags = ({ form }) => {
  const inputButton = React.useRef();
  const editInputButton = React.useRef();
  const [inputVisible, setInputVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [editInputIndex, setEditInputIndex] = React.useState(-1);
  const [editInputValue, setEditInputValue] = React.useState("");

  const handleClose = (removedTag) => {
    form.setFieldsValue({
      tags: form.getFieldValue("tags")?.filter((tag) => tag !== removedTag),
    });
  };

  const showInput = () => {
    setInputVisible(true);
    inputButton?.current?.focus();
    //editInputButton.current.focus();
    //;
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleInputConfirm = () => {
    let newTags = form.getFieldValue("tags");
    if (inputValue && form.getFieldValue("tags")?.indexOf(inputValue) === -1) {
      newTags = [...newTags, inputValue];
    }
    form.setFieldsValue({ tags: newTags });
    setInputValue("");
    setInputVisible(false);
  };

  const handleEditInputChange = (e) => setEditInputValue(e.target.value);

  const handleEditInputConfirm = () => {
    const newTags = [...form.getFieldValue("tags")];
    newTags[editInputIndex] = editInputValue;
    form.setFieldsValue({ tags: newTags });
    setEditInputIndex(-1);
    setEditInputValue("");
  };

  const keyPress = (e) => {
    console.log(e.key);
  };

  return (
    <Form.Item label="Tags" name="tags">
      {form.getFieldValue("tags")?.map((tag, i) => {
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
              {isLongTag ? `#${tag.slice(0, 20)}...` : `#${tag}`}
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
          className="tag-input"
        />
      )}
      {!inputVisible && (
        <Tag className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </Form.Item>
  );
};

export default Tags;
